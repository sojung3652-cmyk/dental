import { Phone } from "lucide-react";
import { CLINIC } from "@/data/clinic";

export default function PhonePopup({ titleId }: { titleId: string }) {
  return (
    <div>
      <div className="w-14 h-14 rounded-full bg-brand-sub-surface flex items-center justify-center mx-auto">
        <Phone size={24} strokeWidth={1.8} className="text-brand-primary-dark" />
      </div>

      <h2 id={titleId} className="mt-4 text-center text-lg font-semibold text-brand-primary-dark">
        전화 상담
      </h2>

      <p className="mt-6 text-center text-3xl font-semibold text-brand-primary-dark tracking-wide">
        {CLINIC.phone}
      </p>

      <a
        href={`tel:${CLINIC.phone}`}
        className="mt-6 block w-full text-center bg-brand-primary-dark hover:bg-brand-text text-white py-3.5 rounded-lg font-medium transition-colors"
      >
        전화 걸기
      </a>

      <div className="mt-6 bg-brand-sub-surface rounded-lg p-4">
        <p className="text-xs text-brand-text-muted mb-2">진료 시간</p>
        <p className="text-sm text-brand-text-sub">{CLINIC.hours.weekday}</p>
        <p className="text-sm text-brand-text-sub">{CLINIC.hours.saturday}</p>
        <p className="text-sm text-brand-text-sub">일요일 · 공휴일 휴진</p>
      </div>

      <p className="mt-4 text-xs text-brand-text-muted text-center">
        점심시간 {CLINIC.hours.lunch.replace("점심 ", "")}에는 통화가 어려울 수 있습니다.
      </p>
    </div>
  );
}
