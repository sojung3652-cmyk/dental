"use client";

import { MessageCircle, Phone } from "lucide-react";
import { usePhoneModal } from "../context/PhoneModalContext";
import { useComingSoonModal } from "../context/ComingSoonModalContext";

const BUTTON_CLASS =
  "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-sm font-medium transition-colors";

export default function ReservationAltChannels() {
  const { open: openPhone } = usePhoneModal();
  const { show } = useComingSoonModal();

  return (
    <div className="bg-brand-sub-surface rounded-2xl p-5 md:p-6 mb-10 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
      <p className="text-xs text-brand-text-muted">다른 방법으로도 예약하실 수 있습니다</p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => show("네이버 예약을 준비하고 있습니다.\n곧 만나요.")}
          className={BUTTON_CLASS}
        >
          <span className="w-4 h-4 rounded bg-[#03C75A] text-white flex items-center justify-center font-bold text-[10px]">
            N
          </span>
          네이버 예약
        </button>
        <button
          type="button"
          onClick={() => show("카카오톡 예약을 준비하고 있습니다.\n곧 만나요.")}
          className={BUTTON_CLASS}
        >
          <span className="w-4 h-4 rounded bg-[#FEE500] text-[#3C1E1E] flex items-center justify-center">
            <MessageCircle size={10} strokeWidth={2} />
          </span>
          카카오톡 예약
        </button>
        <button type="button" onClick={openPhone} className={BUTTON_CLASS}>
          <span className="w-4 h-4 rounded-full bg-brand-primary-dark text-white flex items-center justify-center">
            <Phone size={10} strokeWidth={2} />
          </span>
          전화 예약
        </button>
      </div>
    </div>
  );
}
