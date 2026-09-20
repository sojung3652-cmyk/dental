"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Doctor } from "@/data/doctors";
import DoctorCard from "./DoctorCard";
import DoctorModal from "./DoctorModal";

const CLOSE_ANIMATION_MS = 250;

function DoctorsGridInner({ doctors, className }: { doctors: Doctor[]; className: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeSlug = searchParams.get("doctor");

  // Captured once at mount: if the page loaded with `?doctor=<slug>` already
  // in the URL, that doctor's portrait is above the fold on first paint and
  // should load with priority. Doctors opened later via click should not.
  const [coldLoadSlug] = useState(activeSlug);

  const [renderedDoctor, setRenderedDoctor] = useState<Doctor | null>(
    () => doctors.find((d) => d.slug === activeSlug) ?? null
  );
  const [closing, setClosing] = useState(false);

  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const isFirstRenderRef = useRef(true);
  const openedInSessionRef = useRef(false);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    openedInSessionRef.current = Boolean(activeSlug);

    const doctor = doctors.find((d) => d.slug === activeSlug) ?? null;
    if (doctor) {
      setRenderedDoctor(doctor);
      setClosing(false);
    } else if (renderedDoctor) {
      setClosing(true);
      const timer = setTimeout(() => setRenderedDoctor(null), CLOSE_ANIMATION_MS);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlug]);

  function openDoctor(slug: string) {
    router.push(`${pathname}?doctor=${slug}`, { scroll: false });
  }

  function closeModal() {
    const previousSlug = activeSlug;
    if (openedInSessionRef.current) {
      router.back();
    } else {
      router.replace(pathname, { scroll: false });
    }
    requestAnimationFrame(() => {
      if (previousSlug) cardRefs.current[previousSlug]?.focus();
    });
  }

  return (
    <>
      <div className={className}>
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.slug}
            doctor={doctor}
            onClick={() => openDoctor(doctor.slug)}
            cardRef={(el) => {
              cardRefs.current[doctor.slug] = el;
            }}
          />
        ))}
      </div>
      {renderedDoctor && (
        <DoctorModal
          doctor={renderedDoctor}
          closing={closing}
          onClose={closeModal}
          priority={renderedDoctor.slug === coldLoadSlug}
        />
      )}
    </>
  );
}

export default function DoctorsGrid({
  doctors,
  className = "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-4",
}: {
  doctors: Doctor[];
  className?: string;
}) {
  return (
    <Suspense fallback={<div className={className} />}>
      <DoctorsGridInner doctors={doctors} className={className} />
    </Suspense>
  );
}
