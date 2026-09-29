"use client";

import { Phone } from "lucide-react";
import { usePhoneModal } from "../context/PhoneModalContext";
import { useComingSoonModal } from "../context/ComingSoonModalContext";

const LINK_CLASS =
  "inline-flex items-center gap-1.5 text-brand-primary-dark hover:text-brand-text underline underline-offset-4 decoration-slate-300 hover:decoration-brand-primary-dark transition-colors";

export default function ReservationAltChannels() {
  const { open: openPhone } = usePhoneModal();
  const { show } = useComingSoonModal();

  return (
    <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
      <span className="text-brand-text-muted">다른 방법으로도 예약 가능합니다</span>
      <button
        type="button"
        onClick={() => show("네이버 예약을 준비하고 있습니다.\n곧 만나요.")}
        className={LINK_CLASS}
      >
        <span className="w-3.5 h-3.5 rounded bg-[#03C75A] text-white text-[9px] font-bold flex items-center justify-center">
          N
        </span>
        네이버 예약
      </button>
      <button
        type="button"
        onClick={() => show("카카오톡 예약을 준비하고 있습니다.\n곧 만나요.")}
        className={LINK_CLASS}
      >
        <span className="w-3.5 h-3.5 rounded bg-[#FEE500] text-[#3C1E1E] flex items-center justify-center">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </span>
        카카오톡 예약
      </button>
      <button type="button" onClick={openPhone} className={LINK_CLASS}>
        <Phone className="w-3.5 h-3.5" />
        전화 예약
      </button>
    </div>
  );
}
