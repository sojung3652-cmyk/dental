import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, UserRound, Sparkles } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CLINIC } from "@/data/clinic";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = { title: `인사말 · ${CLINIC.nameKo}` };

const VALUES = [
  {
    icon: HeartHandshake,
    title: "정직한 진료",
    blurb: "꼭 필요한 진료만 안내드리고, 치료 전 비용과 계획을 모두 말씀드립니다.",
  },
  {
    icon: UserRound,
    title: "담당 원장제",
    blurb: "첫 진료부터 마지막 확인까지 한 분의 원장이 처음부터 끝까지 함께합니다.",
  },
  {
    icon: Sparkles,
    title: "편안한 환경",
    blurb: "밝고 정돈된 공간에서, 서두르지 않는 진료 속도를 지키고자 합니다.",
  },
];

export default function GreetingPage() {
  const director = doctors[0];

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <p className="text-xs text-brand-text-muted mb-8">
            <Link href="/" className="hover:text-brand-primary-dark transition-colors">
              홈
            </Link>
            <span className="text-brand-text-muted mx-2">/</span>
            병원소개
            <span className="text-brand-text-muted mx-2">/</span>
            인사말
          </p>

          <p className="section-eyebrow">병원소개</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-brand-text">인사말</h1>

          {/* Pull quote */}
          <div className="text-center mt-14">
            <p className="font-pen text-brand-accent text-xl mb-4">산뜻치과가 시작된 자리</p>
            <p className="headline-tight text-4xl md:text-5xl font-light text-brand-text">
              이분이 내 <span className="font-semibold">가족</span>이라면
              <br />
              어떻게 <span className="font-semibold">진료</span>할까?
            </p>
            <p className="text-sm text-brand-text-muted mt-6">
              ― 산뜻치과 개원 첫날, 진료실 벽에 적힌 문장
            </p>
          </div>

          {/* Signed letter */}
          <div className="bg-brand-surface rounded-3xl p-8 md:p-14 mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/doctors/lee.jpg"
                  alt={`${director.name} ${director.title} 프로필`}
                  fill
                  sizes="64px"
                  className="object-cover object-center"
                />
              </div>
              <div>
                <p className="text-sm text-brand-text-sub">{director.title}</p>
                <p className="text-lg font-semibold text-brand-primary-dark">{director.name}</p>
              </div>
            </div>

            <div className="body-relaxed text-brand-text space-y-4 text-[15px] md:text-base">
              <p>
                안녕하세요. {CLINIC.nameKo} {director.title} {director.name}입니다.
              </p>
              <p>
                치과는 늘 조금 무서운 곳이었습니다. 어릴 적 저도 그랬고, 지금 진료 의자에 앉는
                분들의 마음도 크게 다르지 않을 거라 생각합니다.
              </p>
              <p>
                그래서 저희 다섯 명의 원장은 매일 하나의 질문으로 하루를 시작합니다.{" "}
                <span className="brand-emph text-brand-primary-dark">
                  &ldquo;내 가족이 이 자리에 앉아 있다면, 나는 어떻게 진료할까?&rdquo;
                </span>
              </p>
              <p>
                이 질문은 저희가 개원을 준비하며 진료실 벽에 가장 먼저 적어둔 문장이기도 합니다.
                진단 장비와 인테리어보다, 이 한 줄을 먼저 정했습니다. 그만큼 저희에게는 모든
                결정의 기준이 되는 질문입니다.
              </p>
              <p>
                그 답을 따라 저희는 꼭 필요한 진료만 권해드리고, 치료 전 계획과 비용을 미리
                말씀드리며, 첫 진료부터 마지막 확인까지 담당 원장이 직접 책임지는 것을 원칙으로
                삼고 있습니다. 작은 불편함도 가볍게 넘기지 않고, 충분히 설명드린 후 함께
                결정합니다.
              </p>
              <p>
                그 답을 따라 저희는 아프지 않게, 오래 편안하게, 그리고 다시 오고 싶어지는 치과가
                되기 위해 노력합니다. 언제든 편안한 마음으로 찾아주세요.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-end justify-between">
              <p className="text-sm text-brand-text-sub">
                {CLINIC.nameKo} {director.title}
              </p>
              <p className="signature text-3xl text-brand-primary-dark">{director.name}</p>
            </div>
          </div>

          {/* Clinic values */}
          <section className="mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brand-accent" />
              <h2 className="text-xl font-semibold text-brand-primary-dark">우리의 가치</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {VALUES.map(({ icon: Icon, title, blurb }) => (
                <div key={title} className="bg-brand-sub-surface rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-full bg-brand-surface flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={1.6} className="text-brand-primary-dark" />
                  </div>
                  <h3 className="font-semibold text-brand-text mb-1.5">{title}</h3>
                  <p className="text-sm text-brand-text-sub body-relaxed">{blurb}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
