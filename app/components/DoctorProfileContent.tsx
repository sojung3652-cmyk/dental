import Link from "next/link";
import type { ElementType } from "react";
import type { Doctor } from "@/data/doctors";
import DoctorPortrait from "./DoctorPortrait";

function CredentialSection({ label, items }: { label: string; items: string[] }) {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-px bg-brand-accent"></span>
        <h3 className="text-sm font-semibold text-brand-primary-dark tracking-wider">{label}</h3>
      </div>
      <ul className="space-y-2 text-brand-text body-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-brand-text-muted mt-1.5 shrink-0">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function DoctorProfileContent({
  doctor,
  titleAs = "h2",
  sticky = false,
}: {
  doctor: Doctor;
  titleAs?: ElementType;
  sticky?: boolean;
}) {
  const NameTag = titleAs;

  return (
    <div className="grid md:grid-cols-12 gap-10 md:gap-16">
      <div className="md:col-span-5">
        <div className={sticky ? "md:sticky md:top-24" : undefined}>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <DoctorPortrait slug={doctor.slug} className="w-full h-full" />
          </div>

          <p
            className={
              doctor.title === "대표원장"
                ? "text-xs text-brand-accent uppercase tracking-wider mt-6 mb-1"
                : "text-xs text-brand-text-muted uppercase tracking-wider mt-6 mb-1"
            }
          >
            {doctor.title}
          </p>
          <NameTag className="text-2xl font-semibold text-brand-text">
            {doctor.name}
            <span className="text-brand-text-sub font-normal"> 원장님</span>
          </NameTag>
          <div className="flex gap-1.5 mt-3 flex-wrap">
            {doctor.specialties.map((specialty) => (
              <span
                key={specialty}
                className="text-xs text-brand-primary-dark bg-brand-sub-surface rounded-full px-2.5 py-1"
              >
                {specialty}
              </span>
            ))}
          </div>

          <Link
            href={`/reservation?doctor=${doctor.slug}`}
            className="inline-flex items-center justify-center w-full mt-8 bg-brand-primary-dark hover:bg-brand-text text-white px-7 py-3.5 rounded-lg font-medium transition-colors"
          >
            이 원장님으로 예약하기
          </Link>
        </div>
      </div>

      <div className="md:col-span-7">
        <p className="text-xl text-brand-text-sub body-relaxed">{doctor.intro}</p>

        <CredentialSection label="학력" items={doctor.education} />
        <CredentialSection label="경력" items={doctor.career} />
        <CredentialSection label="소속 학회" items={doctor.societies} />
        {doctor.certifications && <CredentialSection label="자격" items={doctor.certifications} />}
      </div>
    </div>
  );
}
