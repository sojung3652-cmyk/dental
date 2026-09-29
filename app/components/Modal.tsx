"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const CLOSE_ANIMATION_MS = 250;

export default function Modal({
  onClose,
  titleId,
  returnFocusRef,
  children,
}: {
  onClose: () => void;
  titleId: string;
  returnFocusRef?: React.RefObject<HTMLElement | null>;
  children: (requestClose: () => void) => React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [entered, setEntered] = useState(false);
  const [closing, setClosing] = useState(false);
  const closingRef = useRef(false);

  function requestClose() {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    window.setTimeout(() => {
      onClose();
      returnFocusRef?.current?.focus();
    }, CLOSE_ANIMATION_MS);
  }

  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true));
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        requestClose();
        return;
      }
      if (e.key === "Tab" && containerRef.current) {
        const focusables = containerRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.documentElement.classList.add("overflow-hidden");
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.classList.remove("overflow-hidden");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shown = entered && !closing;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary-dark/50 backdrop-blur-sm transition-opacity duration-200 motion-reduce:transition-none ${
        shown ? "opacity-100" : "opacity-0"
      }`}
      onClick={requestClose}
      aria-hidden="true"
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className={`relative max-w-sm w-[90vw] bg-brand-surface rounded-2xl shadow-2xl p-8 transition-all duration-[250ms] motion-reduce:transition-none ${
          shown ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={requestClose}
          aria-label="닫기"
          className="absolute top-4 right-4 w-9 h-9 rounded-full hover:bg-brand-sub-surface flex items-center justify-center transition-colors"
        >
          <X size={18} strokeWidth={1.8} />
        </button>
        {children(requestClose)}
      </div>
    </div>
  );
}
