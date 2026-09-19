"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { CLINIC } from "@/data/clinic";
import { NAV_ITEMS } from "@/data/nav";
import FloatingIcons from "./FloatingIcons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-brand-bg/85 backdrop-blur border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center">
            <Image
              src="/logo.svg"
              alt={CLINIC.nameKo}
              width={160}
              height={45}
              priority
              className="h-10 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-brand-text-sub">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group nav-link py-2">
                  <button
                    type="button"
                    className="flex items-center gap-1 hover:text-brand-primary-dark transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={1.8}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-lg border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm text-brand-text-sub hover:bg-brand-sub-surface hover:text-brand-primary-dark transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link py-2 hover:text-brand-primary-dark transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href="/reservation"
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

      <FloatingIcons />

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-brand-bg md:hidden flex flex-col ${open ? "open" : ""}`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200/60 shrink-0">
          <Image src="/logo.svg" alt={CLINIC.nameKo} width={160} height={45} className="h-9 w-auto" />
          <button
            aria-label="메뉴 닫기"
            onClick={() => setOpen(false)}
            className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-slate-100"
          >
            <X size={22} strokeWidth={1.8} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-4">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <details key={item.label} className="border-b border-slate-100 group/acc">
                <summary className="flex items-center justify-between py-4 cursor-pointer list-none text-xl font-medium text-brand-primary-dark">
                  {item.label}
                  <ChevronDown
                    size={20}
                    strokeWidth={1.8}
                    className="transition-transform group-open/acc:rotate-180"
                  />
                </summary>
                <div className="pb-4 pl-2 space-y-1">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-base text-brand-text-sub"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </details>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-xl font-medium text-brand-primary-dark border-b border-slate-100"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="p-6 space-y-3 border-t border-slate-200/60 shrink-0">
          <a
            href="/reservation"
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
