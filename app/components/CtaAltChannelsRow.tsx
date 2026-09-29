"use client";

import { MessageCircle } from "lucide-react";
import { useComingSoonModal } from "../context/ComingSoonModalContext";

const BUTTON_CLASS =
  "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-colors";

export default function CtaAltChannelsRow() {
  const { show } = useComingSoonModal();

  return (
    <div>
      <p className="text-xs text-slate-400 mt-8 mb-4 text-left md:text-center">또는 다른 방법으로</p>
      <div className="flex flex-wrap gap-3 md:justify-center">
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
      </div>
    </div>
  );
}
