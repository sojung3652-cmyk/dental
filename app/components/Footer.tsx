import Image from "next/image";
import { CLINIC } from "@/data/clinic";

const TREATMENT_LINKS = ["일반 진료", "사랑니", "스케일링", "임플란트", "교정"];
const CLINIC_LINKS: { label: string; href: string }[] = [
  { label: "의료진", href: "#doctors" },
  { label: "진료 시간", href: "#schedule" },
  { label: "오시는 길", href: "#location" },
  { label: "비급여 안내", href: "/pricing" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Image src="/logo.svg" alt={CLINIC.nameKo} width={160} height={45} className="h-10 w-auto" />
            <p className="text-sm text-brand-text-sub mt-6 body-relaxed">
              {CLINIC.address.line1}
              <br />
              {CLINIC.address.line2}
              <br />
              {CLINIC.phone}
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs text-brand-text-muted mb-4">진료</p>
            <ul className="space-y-2 text-sm text-brand-text-sub">
              {TREATMENT_LINKS.map((label) => (
                <li key={label}>
                  <a href="#services" className="hover:text-brand-primary-dark">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs text-brand-text-muted mb-4">병원 안내</p>
            <ul className="space-y-2 text-sm text-brand-text-sub">
              {CLINIC_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-brand-primary-dark">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs text-brand-text-muted mb-4">모바일 앱</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="border border-slate-300 hover:border-brand-primary-dark rounded-lg px-4 py-2.5 text-xs text-brand-text-sub hover:text-brand-primary-dark transition-colors"
              >
                App Store
              </a>
              <a
                href="#"
                className="border border-slate-300 hover:border-brand-primary-dark rounded-lg px-4 py-2.5 text-xs text-brand-text-sub hover:text-brand-primary-dark transition-colors"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4 text-xs text-brand-text-muted">
          <p>© 2026 {CLINIC.nameKo}. 컨셉 디자인 데모입니다.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-brand-primary-dark">
              개인정보처리방침
            </a>
            <a href="/terms" className="hover:text-brand-primary-dark">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
