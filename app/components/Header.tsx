"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC } from "@/data/clinic";

const NAV_LINKS = [
  { href: "#philosophy", label: "저희의 마음" },
  { href: "#doctors", label: "의료진" },
  { href: "#services", label: "진료 안내" },
  { href: "#schedule", label: "진료 시간" },
  { href: "#location", label: "오시는 길" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-brand-bg/85 backdrop-blur border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="text-lg font-semibold tracking-tight text-brand-primary-dark">
              {CLINIC.nameKo}
            </span>
            <span className="hidden sm:inline text-xs text-brand-text-muted">
              {CLINIC.nameEn}
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-brand-text-sub">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link hover:text-brand-primary-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              className="bg-brand-primary-dark hover:bg-brand-text text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              예약하기
            </a>
          </nav>
          <button
            aria-label="메뉴 열기"
            onClick={() => setOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-slate-100"
          >
            <Menu size={22} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-brand-bg md:hidden flex flex-col ${open ? "open" : ""}`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200/60">
          <span className="text-lg font-semibold text-brand-primary-dark">{CLINIC.nameKo}</span>
          <button
            aria-label="메뉴 닫기"
            onClick={() => setOpen(false)}
            className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-slate-100"
          >
            <X size={22} strokeWidth={1.8} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col justify-center gap-2 px-6 text-2xl font-medium text-brand-primary-dark">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-3">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="p-6 space-y-3 border-t border-slate-200/60">
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="block bg-brand-primary-dark text-white text-center py-4 rounded-lg font-medium"
          >
            예약하기
          </a>
          <a
            href={`tel:${CLINIC.phone}`}
            className="flex items-center justify-center gap-2 border border-brand-primary text-brand-primary-dark text-center py-4 rounded-lg font-medium"
          >
            <Phone size={18} strokeWidth={1.8} />
            전화 걸기
          </a>
        </div>
      </div>
    </>
  );
}
