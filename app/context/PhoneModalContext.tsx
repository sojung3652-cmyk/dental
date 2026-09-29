"use client";

import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import Modal from "../components/Modal";
import PhonePopup from "../components/PhonePopup";

type PhoneModalContextValue = {
  open: () => void;
};

const PhoneModalContext = createContext<PhoneModalContextValue | null>(null);

export function PhoneModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  // This modal can be opened from any of many buttons scattered across the
  // site, so there's no single fixed trigger to return focus to. Capture
  // whichever element was actually focused (i.e. clicked) at open time —
  // that's the real trigger for this invocation — and return focus there.
  const triggerRef = useRef<HTMLElement | null>(null);

  function open() {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setIsOpen(true);
  }

  return (
    <PhoneModalContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} titleId="phone-popup-title" returnFocusRef={triggerRef}>
          {() => <PhonePopup titleId="phone-popup-title" />}
        </Modal>
      )}
    </PhoneModalContext.Provider>
  );
}

export function usePhoneModal() {
  const ctx = useContext(PhoneModalContext);
  if (!ctx) throw new Error("usePhoneModal must be used within PhoneModalProvider");
  return ctx;
}
