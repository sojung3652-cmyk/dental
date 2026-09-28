import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
      </main>
      <Footer />
    </>
  );
}
