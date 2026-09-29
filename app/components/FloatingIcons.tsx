"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Phone, CalendarCheck, MessageCircle } from "lucide-react";
import Modal from "./Modal";
import ChatPickerPopup from "./ChatPickerPopup";
import { usePhoneModal } from "../context/PhoneModalContext";
import { useComingSoonModal } from "../context/ComingSoonModalContext";

export type ChatChannel = "kakao" | "1on1" | "ai";

type ModalState = "none" | "chatPicker";

const COMING_SOON_MESSAGE: Record<ChatChannel, string> = {
  kakao: "카카오톡 채널을 준비하고 있습니다.\n곧 만나요.",
  "1on1": "1:1 문의 기능을 준비하고 있습니다.\n곧 만나요.",
  ai: "AI 챗봇을 준비하고 있습니다.\n곧 만나요.",
};

export default function FloatingIcons() {
  const { open: openPhoneModal } = usePhoneModal();
  const { show: showComingSoon } = useComingSoonModal();
  const [modal, setModal] = useState<ModalState>("none");

  const chatBtnRef = useRef<HTMLButtonElement>(null);

  function handleSelectChannel(selected: ChatChannel) {
    setModal("none");
    showComingSoon(COMING_SOON_MESSAGE[selected]);
  }

  return (
    <>
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-3">
        <button
          type="button"
          title="전화"
          aria-label="전화"
          onClick={openPhoneModal}
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

      {modal === "chatPicker" && (
        <Modal onClose={() => setModal("none")} titleId="chat-picker-title" returnFocusRef={chatBtnRef}>
          {() => <ChatPickerPopup titleId="chat-picker-title" onSelect={handleSelectChannel} />}
        </Modal>
      )}
    </>
  );
}
