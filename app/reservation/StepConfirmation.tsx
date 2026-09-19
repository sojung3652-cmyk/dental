"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { doctors } from "@/data/doctors";
import { formatFullDate, formatTimeKo, maskPhone } from "@/data/reservation";

export default function StepConfirmation({
  serviceSlug,
  doctorSlug,
  isoSlot,
  ref: reservationRef,
  phone,
}: {
  serviceSlug: string;
  doctorSlug: string;
  isoSlot: string;
  ref: string;
  phone?: string;
}) {
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const doctor = doctors.find((d) => d.slug === doctorSlug);
  const [datePart, time] = isoSlot.split("T");
  const slotDate = new Date(datePart);

  function handleShare() {
    // Mock: no real Kakao integration in this concept build.
    console.log("[mock] 카카오톡으로 공유", { reservationRef });
  }

  return (
    <div className="max-w-lg mx-auto text-center py-8 md:py-12">
      <div className="relative w-20 h-20 mx-auto mb-8">
        <div className="absolute inset-0 rounded-full bg-brand-sub-surface" />
        <div className="absolute inset-0 flex items-center justify-center">
          <CheckCircle2 size={36} strokeWidth={1.6} className="text-brand-primary-dark" />
        </div>
      </div>

      <p className="text-sm font-medium text-brand-accent mb-3">편안한 마음으로 오세요</p>
      <h1 className="display-tight text-3xl md:text-4xl font-light text-brand-text mb-8">
        예약이 <span className="font-semibold">확정되었어요</span>
      </h1>

      <div className="inline-block bg-brand-sub-surface rounded-lg px-5 py-2.5 text-sm text-brand-text-sub mb-8">
        예약번호 <span className="font-semibold text-brand-primary-dark">{reservationRef}</span>
      </div>

      <div className="bg-brand-surface border border-slate-200 rounded-2xl p-6 md:p-8 text-left space-y-3 mb-8">
        <div className="flex justify-between text-sm">
          <span className="text-brand-text-muted">진료</span>
          <span className="text-brand-text font-medium">{service?.title}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-brand-text-muted">원장</span>
          <span className="text-brand-text font-medium">{doctor?.name} 원장님</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-brand-text-muted">일시</span>
          <span className="text-brand-text font-medium">
            {formatFullDate(slotDate)} {formatTimeKo(time)}
          </span>
        </div>
        {phone && (
          <div className="flex justify-between text-sm">
            <span className="text-brand-text-muted">연락처</span>
            <span className="text-brand-text font-medium">{maskPhone(phone)}</span>
          </div>
        )}
      </div>

      <p className="body-relaxed text-brand-text-sub mb-10">{doctor?.name} 선생님이 기다리고 계세요.</p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center border border-brand-primary text-brand-primary-dark hover:bg-brand-sub-surface px-7 py-3.5 rounded-lg font-medium transition-colors"
        >
          홈으로
        </Link>
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center justify-center bg-brand-primary-dark hover:bg-brand-text text-white px-7 py-3.5 rounded-lg font-medium transition-colors"
        >
          카카오톡으로 공유
        </button>
      </div>
    </div>
  );
}
