import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DoctorsFilter from "../components/DoctorsFilter";
import { doctors } from "@/data/doctors";
import { CLINIC } from "@/data/clinic";

export const metadata: Metadata = {
  title: "의료진 소개 · 산뜻치과",
  description: "산뜻치과의 다섯 원장을 소개합니다. 각 진료 분야의 전문 원장이 직접 책임 진료합니다.",
};

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <p className="text-xs text-brand-text-muted mb-8">
            <Link href="/" className="hover:text-brand-primary-dark transition-colors">
              홈
            </Link>
            <span className="text-brand-text-muted mx-2">/</span>
            병원소개
            <span className="text-brand-text-muted mx-2">/</span>
            의료진 소개
          </p>

          <p className="section-eyebrow">병원소개</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-brand-text">{CLINIC.nameKo} 의료진</h1>
          <p className="mt-3 text-brand-text-sub max-w-2xl">
            각 진료 분야의 전문 원장이 진단부터 치료까지 직접 책임집니다. 원장님을 선택하시면 자세한
            프로필을 확인하실 수 있습니다.
          </p>

          <div className="mt-10">
            <DoctorsFilter doctors={doctors} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-accent" />
                <p className="text-sm text-brand-text-muted">진료 원칙</p>
              </div>
              <h2 className="text-xl font-semibold text-brand-primary-dark">우리 원장님들의 진료 방식</h2>
              <p className="mt-4 text-brand-text-sub body-relaxed">
                산뜻치과의 다섯 원장은 각자의 전문 분야를 담당하지만, 진료 방식은 하나의 원칙 위에
                있습니다. 정확한 진단, 꼭 필요한 진료, 오래 편안한 회복. 이 세 가지 원칙 아래에서
                모든 진료가 이루어집니다.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-accent" />
                <p className="text-sm text-brand-text-muted">예약 안내</p>
              </div>
              <h2 className="text-xl font-semibold text-brand-primary-dark">담당 선생님 배정 방식</h2>
              <p className="mt-4 text-brand-text-sub body-relaxed">
                예약 시 진료 유형에 맞는 선생님을 자동으로 추천해드립니다. 원하시는 선생님이
                있으시면 예약 페이지에서 직접 선택하실 수도 있습니다.
              </p>
              <Link
                href="/reservation"
                className="inline-block mt-4 text-sm text-brand-primary-dark hover:text-brand-text underline underline-offset-4 decoration-brand-accent"
              >
                예약 페이지로 이동
              </Link>
            </div>
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
                원하시는 선생님과 <span className="font-semibold">직접</span> 진료받으세요.
              </h2>
              <p className="body-relaxed text-slate-300 mb-10 md:text-lg">
                진료 유형과 담당 선생님을 선택하고 원하시는 시간을 정하세요.
              </p>
              <Link
                href="/reservation"
                className="inline-flex items-center bg-white hover:bg-slate-100 text-brand-primary-dark px-8 py-4 rounded-lg font-medium transition-colors"
              >
                예약하기
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
