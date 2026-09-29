import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CLINIC } from "@/data/clinic";

export const metadata: Metadata = {
  title: "병원 둘러보기 · 산뜻치과",
  description: "산뜻치과의 진료 공간을 소개합니다. 접수실부터 3D CT 촬영실까지 세심하게 준비된 공간을 확인하세요.",
};

const PATIENT_SPACES = [
  {
    src: "/images/clinic/reception.jpg",
    title: "접수실",
    desc: "방문하시면 가장 먼저 만나는 공간입니다. 밝고 정돈된 데스크에서 접수와 상담이 이루어집니다.",
  },
  {
    src: "/images/clinic/waiting.jpg",
    title: "대기실",
    desc: "편안한 좌석과 자연광이 들어오는 대기 공간에서 진료를 기다리실 수 있습니다.",
  },
  {
    src: "/images/clinic/kids.jpg",
    title: "어린이 공간",
    desc: "어린 환자와 보호자를 위한 별도 공간을 마련했습니다. 책과 놀이 도구가 준비되어 있습니다.",
  },
];

const TREATMENT_SPACES = [
  {
    src: "/images/clinic/consultation.jpg",
    title: "상담실",
    desc: "치료 계획을 설명드리는 별도의 상담 공간입니다. 화면과 함께 진단 결과를 자세히 확인하실 수 있습니다.",
  },
  {
    src: "/images/clinic/treatment.jpg",
    title: "진료실",
    desc: "최신 진료 의자와 장비를 갖춘 진료실입니다. 담당 원장이 처음부터 끝까지 직접 진료를 진행합니다.",
  },
  {
    src: "/images/clinic/hallway.jpg",
    title: "복도",
    desc: "진료실 사이를 잇는 공간도 편안한 이동이 되도록 넓고 밝게 유지합니다.",
  },
];

const SUPPORT_SPACES = [
  {
    src: "/images/clinic/ct.jpg",
    title: "3D CT 촬영실",
    desc: "임플란트와 사랑니 발치 시 필요한 3D CT를 촬영하는 전용 공간입니다. 뼈 상태와 신경 위치를 정밀하게 확인할 수 있습니다.",
  },
  {
    src: "/images/clinic/sterilization.jpg",
    title: "소독실",
    desc: "모든 진료 도구는 별도의 소독실에서 고압 증기 멸균 처리됩니다. 환자마다 새롭게 소독된 도구를 사용합니다.",
  },
];

export default function GalleryPage() {
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
            병원 둘러보기
          </p>

          <p className="section-eyebrow">병원소개</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-brand-text">병원 둘러보기</h1>
          <p className="mt-3 text-brand-text-sub max-w-2xl">
            {CLINIC.nameKo}는 환자분의 편안함과 진료의 정확성 모두를 위해 공간을 세심하게
            준비했습니다.
          </p>

          {/* Hero photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] mt-14">
            <Image
              src="/images/clinic/entrance.jpg"
              alt="산뜻치과 입구"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 bg-brand-surface/95 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium text-brand-primary-dark">
              산뜻치과 입구 · 5층
            </div>
          </div>

          {/* 환자 공간 */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-px bg-brand-accent" />
              <h2 className="text-xl font-semibold text-brand-primary-dark">환자 공간</h2>
            </div>
            <p className="text-sm text-brand-text-sub mb-6 ml-11">
              방문하시는 순간부터 진료 대기까지, 편안하게 머무르실 수 있도록 준비했습니다.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {PATIENT_SPACES.map((space) => (
                <figure key={space.src}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={space.src}
                      alt={`산뜻치과 ${space.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <figcaption>
                    <p className="mt-4 font-semibold text-brand-primary-dark">{space.title}</p>
                    <p className="mt-2 text-sm text-brand-text-sub body-relaxed">{space.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* 진료 공간 */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-px bg-brand-accent" />
              <h2 className="text-xl font-semibold text-brand-primary-dark">진료 공간</h2>
            </div>
            <p className="text-sm text-brand-text-sub mb-6 ml-11">
              상담부터 치료까지, 각 진료 단계에 맞는 공간에서 진행됩니다.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {TREATMENT_SPACES.map((space) => (
                <figure key={space.src}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={space.src}
                      alt={`산뜻치과 ${space.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <figcaption>
                    <p className="mt-4 font-semibold text-brand-primary-dark">{space.title}</p>
                    <p className="mt-2 text-sm text-brand-text-sub body-relaxed">{space.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* 진료 지원 공간 */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-px bg-brand-accent" />
              <h2 className="text-xl font-semibold text-brand-primary-dark">진료 지원 공간</h2>
            </div>
            <p className="text-sm text-brand-text-sub mb-6 ml-11">
              정확한 진단과 위생 관리를 위해 별도의 전문 공간을 운영합니다.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {SUPPORT_SPACES.map((space) => (
                <figure key={space.src}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                    <Image
                      src={space.src}
                      alt={`산뜻치과 ${space.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <figcaption>
                    <p className="mt-4 font-semibold text-brand-primary-dark">{space.title}</p>
                    <p className="mt-2 text-sm text-brand-text-sub body-relaxed">{space.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* 방문 안내 */}
          <div className="bg-brand-sub-surface rounded-2xl p-8 md:p-12 mt-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl font-semibold text-brand-primary-dark">
                  직접 방문해서 확인해보세요.
                </h2>
                <p className="mt-3 text-brand-text-sub body-relaxed">
                  사진으로는 다 담기지 않는 공간의 분위기가 있습니다. 방문 전 오시는 길과 진료
                  시간을 확인하세요.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  href="/location"
                  className="border border-brand-primary text-brand-primary-dark hover:bg-brand-surface px-6 py-3.5 rounded-lg text-sm font-medium transition-colors"
                >
                  오시는 길 보기
                </Link>
                <Link
                  href="/reservation"
                  className="bg-brand-primary-dark hover:bg-brand-text text-white px-6 py-3.5 rounded-lg text-sm font-medium transition-colors"
                >
                  예약하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
