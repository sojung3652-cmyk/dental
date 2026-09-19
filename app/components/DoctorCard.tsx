import type { Doctor } from "@/data/doctors";
import DoctorPortrait from "./DoctorPortrait";

export default function DoctorCard({
  doctor,
  onClick,
  cardRef,
}: {
  doctor: Doctor;
  onClick: () => void;
  cardRef?: (el: HTMLButtonElement | null) => void;
}) {
  return (
    <button
      ref={cardRef}
      type="button"
      onClick={onClick}
      className="group text-left bg-brand-surface rounded-2xl overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow group-hover:translate-y-[-2px] transition-transform"
    >
      <div className="aspect-[4/5] w-full">
        <DoctorPortrait slug={doctor.slug} className="w-full h-full" />
      </div>
      <div className="p-4">
        <p className="text-base font-semibold text-brand-text">{doctor.name} 원장</p>
        <p className="text-xs text-brand-text-muted mt-1">{doctor.specialties.join(" · ")}</p>
      </div>
    </button>
  );
}
