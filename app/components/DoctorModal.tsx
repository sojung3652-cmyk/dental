"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { Doctor } from "@/data/doctors";
import DoctorPortrait from "./DoctorPortrait";

function CredentialSection({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mt-10">
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
    </div>
  );
}

export default function DoctorModal({
  doctor,
  closing,
  onClose,
  priority = false,
}: {
  doctor: Doctor;
  closing: boolean;
  onClose: () => void;
  priority?: boolean;
}) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true));
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.documentElement.classList.add("overflow-hidden");
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.classList.remove("overflow-hidden");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shown = entered && !closing;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-brand-primary-dark/60 backdrop-blur-sm transition-opacity duration-200 motion-reduce:transition-none ${
        shown ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${doctor.name} 원장님 프로필`}
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-brand-bg rounded-3xl shadow-2xl w-[96vw] md:w-[92vw] max-w-4xl max-h-[92vh] md:max-h-[90vh] overflow-y-auto transition-all duration-[250ms] motion-reduce:transition-none ${
          shown ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute top-4 right-4 w-12 h-12 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-brand-surface hover:bg-brand-sub-surface transition-colors"
        >
          <X size={18} strokeWidth={1.8} />
        </button>

        <div className="p-6 md:p-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-5">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden max-h-[50vh] md:max-h-none mx-auto">
                <DoctorPortrait
                  slug={doctor.slug}
                  className="w-full h-full"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={priority}
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <p className="text-sm text-brand-accent">{doctor.title}</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-brand-text">
                {doctor.name}
                <span className="text-brand-text-sub font-normal"> 원장님</span>
              </h2>
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

              <p className="text-lg text-brand-text-sub body-relaxed mt-6">{doctor.intro}</p>

              <CredentialSection label="학력" items={doctor.education} />
              <CredentialSection label="경력" items={doctor.career} />
              <CredentialSection label="소속 학회" items={doctor.societies} />
              {doctor.certifications && <CredentialSection label="자격" items={doctor.certifications} />}

              <div className="mt-10 flex md:justify-end">
                <Link
                  href={`/reservation?doctor=${doctor.slug}`}
                  className="inline-flex items-center justify-center w-full md:w-auto bg-brand-primary-dark hover:bg-brand-text text-white px-8 py-3.5 rounded-lg font-medium transition-colors"
                >
                  {doctor.name} 선생님 진료 예약하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
