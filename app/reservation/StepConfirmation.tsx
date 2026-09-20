"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { doctors } from "@/data/doctors";
import { formatFullDate, formatTimeKo, maskPhone } from "@/data/reservation";

export default function StepConfirmation({
  serviceSlug,
  doctorSlug,
  isoSlot,
  ref: reservationRef,
  name,
  phone,
}: {
  serviceSlug: string;
  doctorSlug: string;
  isoSlot: string;
  ref: string;
  name?: string;
  phone?: string;
}) {
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const doctor = doctors.find((d) => d.slug === doctorSlug);
  const [datePart, time] = isoSlot.split("T");
  const slotDate = new Date(datePart);

  function handleShare() {
    // Mock: no real Kakao integration in this concept build.
    console.log("share stub");
  }

  return (
    <div className="text-center py-8 md:py-12">
      <div className="w-16 h-16 rounded-full bg-brand-sub-surface flex items-center justify-center mx-auto">
        <Check size={28} strokeWidth={2} className="text-brand-primary-dark" />
      </div>

      <h1 className="text-3xl font-semibold text-brand-text mt-6">예약이 확정되었습니다</h1>
      <p className="font-pen text-brand-accent text-[22px] mt-3">
        {doctor?.name} 선생님께서 기다리고 계세요
      </p>

      <div className="inline-block bg-brand-sub-surface rounded-lg px-5 py-2.5 mt-10">
        <p className="text-xs text-brand-text-muted mb-0.5">예약번호</p>
        <p className="font-mono text-lg font-semibold text-brand-primary-dark">{reservationRef}</p>
      </div>

      <div className="bg-brand-surface border border-slate-200 rounded-2xl p-6 md:p-8 text-left space-y-3 mt-6">
        <div className="flex justify-between text-sm">
          <span className="text-brand-text-muted">진료 유형</span>
          <span className="text-brand-text font-medium">{service?.title}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-brand-text-muted">담당 선생님</span>
          <span className="text-brand-text font-medium">{doctor?.name} 선생님</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-brand-text-muted">일시</span>
          <span className="text-brand-text font-medium">
            {formatFullDate(slotDate)} {formatTimeKo(time)}
          </span>
        </div>
        {name && (
          <div className="flex justify-between text-sm">
            <span className="text-brand-text-muted">예약자 이름</span>
            <span className="text-brand-text font-medium">{name}</span>
          </div>
        )}
        {phone && (
          <div className="flex justify-between text-sm">
            <span className="text-brand-text-muted">연락처</span>
            <span className="text-brand-text font-medium">{maskPhone(phone)}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
        <Link
          href="/"
          className="inline-flex items-center justify-center border border-brand-primary text-brand-primary-dark hover:bg-brand-sub-surface px-7 py-3.5 rounded-lg font-medium transition-colors"
        >
          홈으로 돌아가기
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
