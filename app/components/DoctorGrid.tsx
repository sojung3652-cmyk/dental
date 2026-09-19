"use client";

import { useState, type ReactNode } from "react";
import type { Doctor } from "@/data/doctors";
import DoctorCard from "./DoctorCard";
import DoctorModal from "./DoctorModal";

export default function DoctorGrid({
  doctors,
  trailing,
  className = "grid grid-cols-1 md:grid-cols-3 gap-6",
}: {
  doctors: Doctor[];
  trailing?: ReactNode;
  className?: string;
}) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selected = doctors.find((d) => d.slug === selectedSlug) ?? null;

  return (
    <>
      <div className={className}>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.slug} doctor={doctor} onClick={() => setSelectedSlug(doctor.slug)} />
        ))}
        {trailing}
      </div>
      {selected && <DoctorModal doctor={selected} onClose={() => setSelectedSlug(null)} />}
    </>
  );
}
