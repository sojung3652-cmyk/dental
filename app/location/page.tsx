import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Train,
  Bus,
  ParkingCircle,
  Accessibility,
  Coffee,
  Pill,
  Building,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddressCopyButton from "../components/AddressCopyButton";
import PhoneCtaButton from "../components/PhoneCtaButton";
import CtaButtonGroup from "../components/CtaButtonGroup";
import { CLINIC } from "@/data/clinic";
import { TRANSIT } from "@/data/location";

export const metadata: Metadata = {
  title: "오시는 길 · 산뜻치과",
  description: "산뜻역 도보 5분 거리. 주차, 대중교통, 건물 내부 안내를 확인하세요.",
};

function RouteRow({ type, numbers }: { type: string; numbers: string }) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-2">
      <span className="text-xs bg-brand-sub-surface text-brand-primary-dark px-2 py-0.5 rounded-full shrink-0">
        {type}
      </span>
      <span>{numbers}</span>
    </p>
  );
}

const DIRECTION_STEPS = [
  {
    title: "1층 로비",
    desc: "정문으로 들어오시면 오른편에 엘리베이터 3대가 나란히 있습니다.",
  },
  {
    title: "엘리베이터 탑승",
    desc: "5층 버튼을 눌러주세요. 소요 시간은 약 20초입니다.",
  },
  {
    title: "5층 도착",
    desc: "엘리베이터에서 내리시면 왼편 첫 번째 문이 산뜻치과입니다.",
  },
  {
    title: "접수 데스크",
    desc: "성함을 말씀해주시면 바로 안내해드립니다.",
  },
];

const AMENITIES = [
  { icon: Coffee, name: "편안 스타벅스", distance: "도보 2분" },
  { icon: Pill, name: "산뜻 약국", distance: "도보 3분" },
  { icon: Building, name: "산뜻시청", distance: "도보 5분" },
  { icon: ParkingCircle, name: "편안 공영주차장", distance: "도보 3분" },
];

const FULL_ADDRESS = `${CLINIC.address.line1} ${CLINIC.address.line2}`;

export default function LocationPage() {
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
            오시는 길
          </p>

          <p className="section-eyebrow">병원소개</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-brand-text">오시는 길</h1>
          <p className="mt-3 text-brand-text-sub max-w-2xl">
            {CLINIC.station} 도보 5분 거리에 위치하고 있습니다. 편안하게 방문하실 수 있도록 상세한
            안내를 준비했습니다.
          </p>

          {/* Address bar */}
          <div className="mt-12 bg-brand-primary-dark text-white rounded-2xl px-6 py-5 flex flex-wrap items-center gap-4">
            <MapPin size={20} strokeWidth={1.8} className="text-brand-accent shrink-0" />
            <p className="font-medium">{FULL_ADDRESS}</p>
            <span className="w-px h-6 bg-white/30 shrink-0" />
            <PhoneCtaButton className="hover:text-slate-200 transition-colors">
              {CLINIC.phone}
            </PhoneCtaButton>
            <AddressCopyButton address={FULL_ADDRESS} />
          </div>

          {/* Map */}
          <div className="mt-8">
            <div className="rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] relative">
              <Image
                src="/images/clinic/map.jpg"
                alt="산뜻치과 위치 지도 — 산뜻역 2호선, 편안역 4호선 인근"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 bg-brand-surface/95 backdrop-blur rounded-lg px-4 py-2 text-sm font-medium text-brand-primary-dark shadow-sm">
                {CLINIC.nameKo} · 5층
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="#"
                className="border border-brand-primary text-brand-primary-dark hover:bg-brand-sub-surface px-5 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                카카오맵으로 열기
              </a>
              <a
                href="#"
                className="border border-brand-primary text-brand-primary-dark hover:bg-brand-sub-surface px-5 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                네이버 지도로 열기
              </a>
            </div>
          </div>

          {/* Transportation cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-14">
            <div className="bg-brand-surface rounded-2xl p-6">
              <div className="w-11 h-11 rounded-full bg-brand-sub-surface flex items-center justify-center mb-4">
                <Train size={20} strokeWidth={1.8} className="text-brand-primary-dark" />
              </div>
              <h2 className="text-lg font-semibold text-brand-primary-dark mb-4">지하철 이용 시</h2>
              <div className="text-brand-text-sub body-relaxed text-sm space-y-3">
                {TRANSIT.subway.lines.map((line) => (
                  <p key={line.line}>
                    <span className="font-semibold text-brand-text">{line.line}</span>
                    <br />
                    {line.detail}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-brand-surface rounded-2xl p-6">
              <div className="w-11 h-11 rounded-full bg-brand-sub-surface flex items-center justify-center mb-4">
                <Bus size={20} strokeWidth={1.8} className="text-brand-primary-dark" />
              </div>
              <h2 className="text-lg font-semibold text-brand-primary-dark mb-4">버스 이용 시</h2>
              <div className="text-brand-text-sub body-relaxed text-sm space-y-3">
                {TRANSIT.bus.stops.map((stop) => (
                  <div key={stop.name}>
                    <p className="font-semibold text-brand-text mb-1.5">{stop.name}</p>
                    <div className="space-y-1">
                      {stop.routes.map((route) => (
                        <RouteRow key={route.type + route.numbers} type={route.type} numbers={route.numbers} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-surface rounded-2xl p-6">
              <div className="w-11 h-11 rounded-full bg-brand-sub-surface flex items-center justify-center mb-4">
                <ParkingCircle size={20} strokeWidth={1.8} className="text-brand-primary-dark" />
              </div>
              <h2 className="text-lg font-semibold text-brand-primary-dark mb-4">주차장 이용</h2>
              <div className="text-brand-text-sub body-relaxed text-sm space-y-3">
                <p>
                  <span className="font-semibold text-brand-text">{TRANSIT.parking.title}</span> (
                  {TRANSIT.parking.subtitle})
                </p>
                <div className="space-y-1">
                  {TRANSIT.parking.lines.slice(0, 3).map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <p className="font-semibold text-brand-text mt-3">대체 주차장</p>
                <p>편안구 공영주차장 도보 3분</p>
              </div>
            </div>
          </div>

          {/* 건물 내부 안내 */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brand-accent" />
              <h2 className="text-xl font-semibold text-brand-primary-dark">건물 내부 안내</h2>
            </div>
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5 bg-brand-sub-surface rounded-2xl p-8 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 220 240" className="w-full h-full max-w-[260px]">
                  {[1, 2, 3, 4, 5].map((floor) => {
                    const rowIndex = 5 - floor; // 5F at top (row 0), 1F at bottom (row 4)
                    const y = 10 + rowIndex * 38;
                    const isTop = floor === 5;
                    return (
                      <g key={floor}>
                        <rect
                          x={40}
                          y={y}
                          width={130}
                          height={38}
                          fill={isTop ? "#D48A8A" : "#FFFFFF"}
                          fillOpacity={isTop ? 0.2 : 1}
                          stroke="#CBD5E1"
                          strokeWidth={1.5}
                        />
                        <text
                          x={30}
                          y={y + 23}
                          textAnchor="end"
                          fontSize={12}
                          fontWeight={isTop ? 700 : 400}
                          fill={isTop ? "#334155" : "#64748B"}
                        >
                          {floor}F
                        </text>
                        {isTop && (
                          <text x={55} y={y + 23} fontSize={11} fontWeight={700} fill="#334155">
                            5F · 산뜻치과
                          </text>
                        )}
                      </g>
                    );
                  })}

                  {/* Elevator shaft on the right */}
                  <rect x={178} y={10} width={22} height={190} fill="#F1F5F9" stroke="#CBD5E1" strokeWidth={1.5} />
                  <path d="M189 30 L183 40 L195 40 Z" fill="#94A3B8" />
                  <path d="M189 180 L183 170 L195 170 Z" fill="#94A3B8" />

                  {/* Entrance arrow at ground level */}
                  <line x1={105} y1={238} x2={105} y2={202} stroke="#334155" strokeWidth={2} />
                  <path d="M105 200 L99 210 L111 210 Z" fill="#334155" />
                  <text x={105} y={236} textAnchor="middle" fontSize={10} fill="#475569">
                    입구
                  </text>
                </svg>
              </div>

              <div className="md:col-span-7">
                <h3 className="text-lg font-semibold text-brand-primary-dark mb-6">
                  엘리베이터로 5층까지 오시는 방법
                </h3>
                <ol className="space-y-6">
                  {DIRECTION_STEPS.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="font-light text-2xl text-brand-accent shrink-0 w-8">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-semibold text-brand-text">{step.title}</p>
                        <p className="text-sm text-brand-text-sub body-relaxed mt-1">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 bg-brand-sub-surface rounded-lg p-4 flex items-start gap-3">
                  <Accessibility size={20} strokeWidth={1.8} className="text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-brand-text-sub">
                    휠체어와 유모차 진입 가능합니다. 필요하신 도움은 언제든 데스크로 문의해주세요.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 주변 편의시설 */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-px bg-brand-accent" />
              <h2 className="text-xl font-semibold text-brand-primary-dark">주변 편의시설</h2>
            </div>
            <p className="text-sm text-brand-text-sub mb-6 ml-11">
              방문 전후로 이용하실 수 있는 근처 시설을 안내드립니다.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {AMENITIES.map(({ icon: Icon, name, distance }) => (
                <div key={name} className="bg-brand-surface rounded-xl p-5 hover:shadow-sm transition-shadow">
                  <Icon size={20} strokeWidth={1.8} className="text-brand-accent" />
                  <p className="font-semibold text-brand-text mt-3">{name}</p>
                  <p className="text-xs text-brand-text-muted mt-1">{distance}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 진료 시간 재확인 */}
          <div className="bg-brand-sub-surface rounded-2xl p-8 md:p-10 mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-sm font-semibold text-brand-primary-dark mb-4">진료 시간</h2>
                <p className="text-lg font-medium text-brand-text">{CLINIC.hours.weekday}</p>
                <p className="text-lg font-medium text-brand-text">{CLINIC.hours.saturday}</p>
                <p className="text-sm text-brand-text-sub mt-2">
                  {CLINIC.hours.lunch} · {CLINIC.hours.closed}
                </p>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-brand-primary-dark mb-4">방문 전 문의</h2>
                <PhoneCtaButton className="text-2xl font-semibold text-brand-primary-dark hover:text-brand-text transition-colors">
                  {CLINIC.phone}
                </PhoneCtaButton>
                <p className="text-sm text-brand-text-sub mt-2">
                  방문 전 전화로 미리 문의하시면 대기 시간을 줄이실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA band */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mt-20 pb-16 md:pb-20">
          <div className="bg-brand-primary-dark rounded-3xl px-8 md:px-16 py-16 md:py-24 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-accent/20" />
            <div className="absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-brand-accent/10" />
            <div className="relative max-w-2xl">
              <p className="text-sm font-medium text-brand-accent mb-3">방문 안내</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                방문 전 <span className="font-semibold">예약을 권장</span>드립니다.
              </h2>
              <p className="body-relaxed text-slate-300 mb-10 md:text-lg">
                온라인으로 원하시는 시간과 담당 선생님을 미리 정하실 수 있습니다.
              </p>
              <CtaButtonGroup />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
