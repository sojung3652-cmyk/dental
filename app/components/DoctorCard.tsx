import Link from "next/link";
import type { Doctor } from "@/data/doctors";
import DoctorPortrait from "./DoctorPortrait";

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="bg-brand-surface rounded-2xl p-6 flex flex-col">
      <div className="aspect-[4/5] rounded-xl overflow-hidden mb-5">
        <DoctorPortrait slug={doctor.slug} className="w-full h-full" />
      </div>

      <p
        className={
          doctor.title === "대표원장"
            ? "text-xs text-brand-accent uppercase tracking-wider mb-1"
            : "text-xs text-brand-text-muted mb-1"
        }
      >
        {doctor.title}
      </p>
      <h3 className="text-lg font-semibold text-brand-text">
        {doctor.name}
        <span className="text-brand-text-sub font-normal"> 원장님</span>
      </h3>

      <div className="flex gap-1.5 mt-2 flex-wrap">
        {doctor.specialties.map((specialty) => (
          <span
            key={specialty}
            className="text-xs text-brand-primary-dark bg-brand-sub-surface rounded-full px-2.5 py-1"
          >
            {specialty}
          </span>
        ))}
      </div>

      <p className="body-relaxed text-sm text-brand-text-sub mt-3 line-clamp-2">{doctor.intro}</p>

      <Link
        href={`/doctors/${doctor.slug}`}
        className="inline-block mt-auto pt-4 text-sm text-brand-primary-dark hover:text-brand-text underline underline-offset-2"
      >
        프로필 보기
      </Link>
    </article>
  );
}
