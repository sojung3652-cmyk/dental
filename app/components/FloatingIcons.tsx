"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Phone, CalendarCheck, MessageCircle } from "lucide-react";
import Modal from "./Modal";
import PhonePopup from "./PhonePopup";
import ChatPickerPopup from "./ChatPickerPopup";
import ComingSoonPopup from "./ComingSoonPopup";

export type ChatChannel = "kakao" | "1on1" | "ai";

type ModalState = "none" | "phone" | "chatPicker" | "comingSoon";

const COMING_SOON_MESSAGE: Record<ChatChannel, string> = {
  kakao: "카카오톡 채널을 준비하고 있습니다.\n곧 만나요.",
  "1on1": "1:1 문의 기능을 준비하고 있습니다.\n곧 만나요.",
  ai: "AI 챗봇을 준비하고 있습니다.\n곧 만나요.",
};

export default function FloatingIcons() {
  const [modal, setModal] = useState<ModalState>("none");
  const [channel, setChannel] = useState<ChatChannel | null>(null);

  const phoneBtnRef = useRef<HTMLButtonElement>(null);
  const chatBtnRef = useRef<HTMLButtonElement>(null);

  function handleSelectChannel(selected: ChatChannel) {
    setChannel(selected);
    setModal("comingSoon");
  }

  return (
    <>
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-3">
        <button
          ref={phoneBtnRef}
          type="button"
          title="전화"
          aria-label="전화"
          onClick={() => setModal("phone")}
          className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-brand-primary-dark transition-shadow"
        >
          <Phone size={20} strokeWidth={1.8} />
        </button>

        <Link
          href="/reservation"
          title="온라인 예약"
          aria-label="온라인 예약"
          className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-brand-primary-dark transition-shadow"
        >
          <CalendarCheck size={20} strokeWidth={1.8} />
        </Link>

        <button
          ref={chatBtnRef}
          type="button"
          title="상담 문의"
          aria-label="상담 문의"
          onClick={() => setModal("chatPicker")}
          className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-brand-primary-dark transition-shadow"
        >
          <MessageCircle size={20} strokeWidth={1.8} />
        </button>
      </div>

      {modal === "phone" && (
        <Modal onClose={() => setModal("none")} titleId="phone-popup-title" returnFocusRef={phoneBtnRef}>
          {() => <PhonePopup titleId="phone-popup-title" />}
        </Modal>
      )}

      {modal === "chatPicker" && (
        <Modal onClose={() => setModal("none")} titleId="chat-picker-title" returnFocusRef={chatBtnRef}>
          {() => <ChatPickerPopup titleId="chat-picker-title" onSelect={handleSelectChannel} />}
        </Modal>
      )}

      {modal === "comingSoon" && channel && (
        <Modal onClose={() => setModal("none")} titleId="coming-soon-title" returnFocusRef={chatBtnRef}>
          {(requestClose) => (
            <ComingSoonPopup
              titleId="coming-soon-title"
              message={COMING_SOON_MESSAGE[channel]}
              onConfirm={requestClose}
            />
          )}
        </Modal>
      )}
    </>
  );
}
