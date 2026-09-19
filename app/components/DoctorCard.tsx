import type { Doctor } from "@/data/doctors";
import DoctorPortrait from "./DoctorPortrait";

export default function DoctorCard({ doctor, onClick }: { doctor: Doctor; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left bg-brand-surface rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-[4/5] w-full overflow-hidden">
        <DoctorPortrait
          slug={doctor.slug}
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-base font-semibold text-brand-text">{doctor.name} 원장</p>
        <p className="text-xs text-brand-text-muted mt-1">{doctor.specialties.join(" · ")}</p>
      </div>
    </button>
  );
}
