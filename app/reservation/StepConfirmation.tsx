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
    // TODO: wire real KakaoTalk share
    console.log("share stub");
  }

  return (
    <div className="max-w-xl mx-auto text-center py-16 md:py-24">
      <div className="w-20 h-20 rounded-full bg-brand-sub-surface flex items-center justify-center mx-auto">
        <Check size={40} className="text-brand-primary-dark stroke-[2.5]" />
      </div>

      <h1 className="text-3xl md:text-4xl font-semibold text-brand-text mt-8">예약이 확정되었습니다</h1>
      <p className="font-pen text-2xl text-brand-accent mt-4">
        {doctor?.name} 선생님께서 기다리고 계세요
      </p>

      <div className="inline-block bg-brand-sub-surface rounded-xl px-6 py-4 mt-10">
        <p className="text-xs text-brand-text-muted mb-1">예약번호</p>
        <p className="text-xl font-semibold text-brand-primary-dark font-mono tracking-wider">{reservationRef}</p>
      </div>

      <div className="bg-brand-surface rounded-2xl p-6 text-left mt-6">
        <p className="text-xs text-brand-text-muted mb-2">예약 정보</p>
        <div className="flex justify-between text-sm border-b border-slate-100 py-2">
          <span className="text-brand-text-muted">진료 유형</span>
          <span className="text-brand-text font-medium">{service?.title}</span>
        </div>
        <div className="flex justify-between text-sm border-b border-slate-100 py-2">
          <span className="text-brand-text-muted">담당 선생님</span>
          <span className="text-brand-text font-medium">{doctor?.name} 선생님</span>
        </div>
        <div className="flex justify-between text-sm border-b border-slate-100 py-2 last:border-0">
          <span className="text-brand-text-muted">일시</span>
          <span className="text-brand-text font-medium">
            {formatFullDate(slotDate)} {formatTimeKo(time)}
          </span>
        </div>
        {name && (
          <div className="flex justify-between text-sm border-b border-slate-100 py-2 last:border-0">
            <span className="text-brand-text-muted">예약자 이름</span>
            <span className="text-brand-text font-medium">{name}</span>
          </div>
        )}
        {phone && (
          <div className="flex justify-between text-sm border-b border-slate-100 py-2 last:border-0">
            <span className="text-brand-text-muted">연락처</span>
            <span className="text-brand-text font-medium">{maskPhone(phone)}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-3 justify-center mt-10">
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
