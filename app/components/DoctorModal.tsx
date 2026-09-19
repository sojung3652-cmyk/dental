"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Doctor } from "@/data/doctors";
import DoctorProfileContent from "./DoctorProfileContent";

export default function DoctorModal({ doctor, onClose }: { doctor: Doctor; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.documentElement.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [onClose]);

  return (
    // Placeholder layout — the "Modal layout" spec (columns/sizing) wasn't
    // received; this keeps the previous backdrop+panel structure pending that detail.
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-brand-text/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${doctor.name} 원장님 프로필`}
        className="relative bg-brand-bg rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 md:p-10"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-brand-surface hover:bg-brand-sub-surface transition-colors"
        >
          <X size={18} strokeWidth={1.8} />
        </button>
        <DoctorProfileContent doctor={doctor} titleAs="h2" />
      </div>
    </div>
  );
}
