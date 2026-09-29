"use client";

import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import Modal from "../components/Modal";
import ComingSoonPopup from "../components/ComingSoonPopup";

type ComingSoonState = { message: string } | null;

type ComingSoonContextValue = {
  show: (message: string) => void;
};

const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);

export function ComingSoonModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ComingSoonState>(null);
  // Same rationale as PhoneModalContext: this can be triggered from many
  // buttons across the site, so capture the actual clicked element at call
  // time and return focus there on close.
  const triggerRef = useRef<HTMLElement | null>(null);

  function show(message: string) {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setState({ message });
  }

  return (
    <ComingSoonContext.Provider value={{ show }}>
      {children}
      {state && (
        <Modal onClose={() => setState(null)} titleId="coming-soon-title" returnFocusRef={triggerRef}>
          {(requestClose) => (
            <ComingSoonPopup titleId="coming-soon-title" message={state.message} onConfirm={requestClose} />
          )}
        </Modal>
      )}
    </ComingSoonContext.Provider>
  );
}

export function useComingSoonModal() {
  const ctx = useContext(ComingSoonContext);
  if (!ctx) throw new Error("useComingSoonModal must be used within ComingSoonModalProvider");
  return ctx;
}
