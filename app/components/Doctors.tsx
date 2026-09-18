import { ArrowRight } from "lucide-react";

const GRADIENTS = [
  { id: "p1", from: "#E2E8F0", to: "#CBD5E1", toOpacity: 1 },
  { id: "p2", from: "#F1F5F9", to: "#D48A8A", toOpacity: 0.35 },
  { id: "p3", from: "#CBD5E1", to: "#94A3B8", toOpacity: 1 },
  { id: "p4", from: "#F1F5F9", to: "#CBD5E1", toOpacity: 1 },
  { id: "p5", from: "#E2E8F0", to: "#D48A8A", toOpacity: 0.25 },
];

const DOCTORS = [
  {
    gradient: "p1",
    title: "대표원장",
    accent: true,
    name: "이서준 원장",
    specialty: "임플란트 · 보철",
    blurb: "정밀한 진단으로 부담이 적은 임플란트를 계획합니다.",
  },
  {
    gradient: "p2",
    title: "진료원장",
    name: "박수민 원장",
    specialty: "교정 · 투명교정",
    blurb: "라이프스타일에 맞춘 교정 방식을 함께 찾습니다.",
  },
  {
    gradient: "p3",
    title: "진료원장",
    name: "정하윤 원장",
    specialty: "소아 · 가족 진료",
    blurb: "아이도, 부모님도 편안하게 다녀가시길 바랍니다.",
  },
  {
    gradient: "p4",
    title: "진료원장",
    name: "김도현 원장",
    specialty: "구강외과 · 사랑니",
    blurb: "어려운 위치의 사랑니도 안전하게 발치합니다.",
  },
  {
    gradient: "p5",
    title: "진료원장",
    name: "최유진 원장",
    specialty: "보존 · 심미 진료",
    blurb: "자연치아를 오래 쓰실 수 있도록 돕습니다.",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="bg-brand-sub-surface py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-14 md:mb-16 grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-6">
            <p className="section-eyebrow">저희 의료진</p>
            <h2 className="headline-tight text-3xl md:text-5xl font-light text-brand-text">
              다섯 명의 원장,
              <br />
              <span className="font-semibold">각자의 전문 분야</span>로.
            </h2>
          </div>
          <p className="md:col-span-6 body-relaxed text-brand-text-sub md:text-lg">
            진료마다 담당 원장이 정해져 있어, 처음 뵙는 분부터 정기 방문하시는 분까지 같은
            손길로 진료받으실 수 있습니다.
          </p>
        </div>

        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            {GRADIENTS.map((g) => (
              <linearGradient key={g.id} id={g.id} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor={g.from} />
                <stop offset="1" stopColor={g.to} stopOpacity={g.toOpacity} />
              </linearGradient>
            ))}
          </defs>
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DOCTORS.map((doctor) => (
            <article key={doctor.name} className="bg-brand-surface rounded-2xl p-6">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-5">
                <svg viewBox="0 0 200 250" className="w-full h-full">
                  <rect width="200" height="250" fill={`url(#${doctor.gradient})`} />
                  <circle cx="100" cy="115" r="42" fill="#F8FAFC" opacity="0.9" />
                  <ellipse cx="100" cy="220" rx="72" ry="38" fill="#F8FAFC" opacity="0.9" />
                </svg>
              </div>
              <p
                className={
                  doctor.accent
                    ? "text-xs text-brand-accent uppercase tracking-wider mb-1"
                    : "text-xs text-brand-text-muted mb-1"
                }
              >
                {doctor.title}
              </p>
              <h3 className="text-lg font-semibold text-brand-text">{doctor.name}</h3>
              <p className="text-sm text-brand-primary mt-1">{doctor.specialty}</p>
              <p className="body-relaxed text-sm text-brand-text-sub mt-3">{doctor.blurb}</p>
            </article>
          ))}

          <a
            href="#"
            className="rounded-2xl border border-dashed border-slate-300 hover:border-brand-primary hover:bg-brand-surface p-6 flex flex-col justify-center items-start transition-colors min-h-[400px]"
          >
            <span className="text-sm text-brand-text-sub mb-2">전체 프로필</span>
            <span className="text-lg font-semibold text-brand-primary-dark">
              의료진 자세히 보기
            </span>
            <span className="mt-6 text-brand-accent">
              <ArrowRight size={28} strokeWidth={1.4} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
