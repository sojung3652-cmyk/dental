"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import PhoneCtaButton from "./PhoneCtaButton";
import { useComingSoonModal } from "../context/ComingSoonModalContext";

const ALT_BUTTON_CLASS =
  "inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-4 rounded-lg font-medium text-sm transition-colors";

export default function CtaButtonGroup({
  reservationHref = "/reservation",
  reservationLabel = "예약하기",
}: {
  reservationHref?: string;
  reservationLabel?: string;
}) {
  const { show } = useComingSoonModal();

  return (
    <div className="mt-10 flex flex-wrap gap-3 justify-center">
      <Link
        href={reservationHref}
        className="inline-flex items-center bg-white hover:bg-slate-100 text-brand-primary-dark px-8 py-4 rounded-lg font-semibold transition-colors"
      >
        {reservationLabel}
      </Link>
      <PhoneCtaButton className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white px-6 py-4 rounded-lg font-medium transition-colors">
        <Phone size={16} strokeWidth={1.8} />
        전화 상담
      </PhoneCtaButton>
      <button
        type="button"
        onClick={() => show("네이버 예약을 준비하고 있습니다.\n곧 만나요.")}
        className={ALT_BUTTON_CLASS}
      >
        <span className="w-4 h-4 rounded bg-[#03C75A] text-white flex items-center justify-center font-bold text-[10px]">
          N
        </span>
        네이버 예약
      </button>
      <button
        type="button"
        onClick={() => show("카카오톡 예약을 준비하고 있습니다.\n곧 만나요.")}
        className={ALT_BUTTON_CLASS}
      >
        <span className="w-4 h-4 rounded bg-[#FEE500] text-[#3C1E1E] flex items-center justify-center">
          <MessageCircle size={10} strokeWidth={2} />
        </span>
        카카오톡 예약
      </button>
    </div>
  );
}
