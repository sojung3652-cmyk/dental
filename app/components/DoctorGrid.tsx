"use client";

import { Suspense, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Doctor } from "@/data/doctors";
import DoctorCard from "./DoctorCard";
import DoctorModal from "./DoctorModal";

function DoctorGridInner({ doctors, className }: { doctors: Doctor[]; className: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedSlug = searchParams.get("doctor");
  const selected = doctors.find((d) => d.slug === selectedSlug) ?? null;

  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const openedByUsRef = useRef(false);

  function openDoctor(slug: string) {
    openedByUsRef.current = true;
    router.push(`${pathname}?doctor=${slug}`, { scroll: false });
  }

  function closeModal() {
    const previousSlug = selectedSlug;
    if (openedByUsRef.current) {
      router.back();
    } else {
      router.replace(pathname, { scroll: false });
    }
    openedByUsRef.current = false;
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
      {selected && <DoctorModal doctor={selected} onClose={closeModal} />}
    </>
  );
}

export default function DoctorGrid({
  doctors,
  className = "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-4",
}: {
  doctors: Doctor[];
  className?: string;
}) {
  return (
    <Suspense fallback={<div className={className} />}>
      <DoctorGridInner doctors={doctors} className={className} />
    </Suspense>
  );
}
