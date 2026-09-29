import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PhoneCtaButton from "../components/PhoneCtaButton";
import CtaAltChannelsRow from "../components/CtaAltChannelsRow";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "진료 안내 · 산뜻치과",
  description: "산뜻치과의 진료 안내. 일반 진료, 임플란트, 사랑니 발치, 스케일링, 교정 등 각 진료의 자세한 안내를 확인하세요.",
};

function toEstimatePill(duration: string): string {
  return `약 ${duration.replace("정도", "").trim()}`;
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <p className="section-eyebrow">진료 안내</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-brand-text">산뜻치과의 진료 안내</h1>
          <p className="text-brand-text-sub mt-3">
            산뜻치과는 다음 진료를 제공합니다. 각 진료의 자세한 안내와 담당 선생님을 확인하실 수
            있습니다.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {SERVICES.map(({ slug, icon: Icon, title, blurb, duration, prepNote }) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="bg-brand-surface rounded-2xl p-8 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-brand-sub-surface flex items-center justify-center">
                  <Icon size={22} strokeWidth={1.6} color="#334155" />
                </div>
                <h2 className="text-xl font-semibold text-brand-text mt-6">{title}</h2>
                <p className="text-sm text-brand-text-sub mt-2">{blurb}</p>
                <p className="text-xs text-brand-text-muted mt-4">{toEstimatePill(duration)}</p>
                <p className="text-xs text-brand-text-muted">{prepNote}</p>
                <span className="text-sm text-brand-primary-dark underline underline-offset-4 decoration-slate-300 mt-6">
                  자세히 보기
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA band */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mt-20 pb-16 md:pb-20">
          <div className="bg-brand-primary-dark rounded-3xl px-8 md:px-16 py-16 md:py-24 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-accent/20" />
            <div className="absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-brand-accent/10" />
            <div className="relative max-w-2xl">
              <p className="text-sm font-medium text-brand-accent mb-3">예약 안내</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                필요한 진료를 지금 <span className="font-semibold">예약하세요</span>.
              </h2>
              <p className="body-relaxed text-slate-300 mb-10 md:text-lg">
                온라인으로 진료 유형과 담당 선생님을 선택하실 수 있습니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/reservation"
                  className="inline-flex items-center bg-white hover:bg-slate-100 text-brand-primary-dark px-8 py-4 rounded-lg font-medium transition-colors"
                >
                  예약하기
                </Link>
                <PhoneCtaButton className="inline-flex items-center border border-slate-500 hover:border-white text-white px-8 py-4 rounded-lg font-medium transition-colors">
                  전화 상담
                </PhoneCtaButton>
              </div>
              <CtaAltChannelsRow />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
