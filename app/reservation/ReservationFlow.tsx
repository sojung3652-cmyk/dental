"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Stepper from "./Stepper";
import StepService from "./StepService";
import StepSchedule from "./StepSchedule";
import StepDetails, { type ReservationDetails } from "./StepDetails";
import StepConfirmation from "./StepConfirmation";
import { generateReservationRef } from "@/data/reservation";

export default function ReservationFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const service = searchParams.get("service") ?? undefined;
  const doctor = searchParams.get("doctor") ?? undefined;
  const slot = searchParams.get("slot") ?? undefined;
  const confirmed = searchParams.get("confirmed") === "1";
  const ref = searchParams.get("ref") ?? undefined;

  // Contact info never lives in the URL — kept in memory for the current
  // session only. A cold deep link straight to the confirmed URL (no prior
  // form submit) simply won't have these to show; StepConfirmation handles
  // that by hiding the rows.
  const [submittedName, setSubmittedName] = useState<string | undefined>();
  const [submittedPhone, setSubmittedPhone] = useState<string | undefined>();

  let step: 1 | 2 | 3 | 4 = 1;
  if (confirmed) step = 4;
  else if (service && slot && doctor) step = 3;
  else if (service) step = 2;

  useEffect(() => {
    if (step === 4 && (!service || !doctor || !slot || !ref)) {
      router.replace("/reservation");
    }
  }, [step, service, doctor, slot, ref, router]);

  function pushParams(mutate: (p: URLSearchParams) => void) {
    const next = new URLSearchParams(searchParams.toString());
    mutate(next);
    router.push(`/reservation?${next.toString()}`);
  }

  function goToStep1() {
    pushParams((p) => {
      p.delete("service");
      p.delete("doctor");
      p.delete("slot");
      p.delete("confirmed");
      p.delete("ref");
    });
  }

  function goToStep2() {
    pushParams((p) => {
      p.delete("slot");
      p.delete("confirmed");
      p.delete("ref");
    });
  }

  function handleSelectService(slug: string) {
    pushParams((p) => {
      p.set("service", slug);
      p.delete("slot");
      p.delete("confirmed");
      p.delete("ref");
    });
  }

  function handlePickDoctor(slug: string) {
    pushParams((p) => {
      p.set("doctor", slug);
      p.delete("slot");
    });
  }

  function handlePickSlot(doctorSlug: string, isoSlot: string) {
    pushParams((p) => {
      p.set("doctor", doctorSlug);
      p.set("slot", isoSlot);
    });
  }

  function handleSubmitDetails(details: ReservationDetails) {
    setSubmittedName(details.name);
    setSubmittedPhone(details.phone);
    const newRef = generateReservationRef();
    pushParams((p) => {
      p.set("confirmed", "1");
      p.set("ref", newRef);
    });
  }

  if (step === 4 && service && doctor && slot && ref) {
    return (
      <div className="max-w-xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <StepConfirmation
          serviceSlug={service}
          doctorSlug={doctor}
          isoSlot={slot}
          ref={ref}
          name={submittedName}
          phone={submittedPhone}
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <Stepper current={step === 4 ? 3 : (step as 1 | 2 | 3)} onJump={(s) => (s === 1 ? goToStep1() : goToStep2())} />

      {step === 1 && <StepService doctorSlug={doctor} onSelect={handleSelectService} />}

      {step === 2 && (
        <StepSchedule
          serviceSlug={service}
          doctorSlug={doctor}
          initialSlot={slot}
          onPickDoctor={handlePickDoctor}
          onPickSlot={handlePickSlot}
        />
      )}

      {step === 3 && service && doctor && slot && (
        <StepDetails
          serviceSlug={service}
          doctorSlug={doctor}
          isoSlot={slot}
          onEditService={goToStep1}
          onEditSchedule={goToStep2}
          onSubmit={handleSubmitDetails}
        />
      )}
    </div>
  );
}
