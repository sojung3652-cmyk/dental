import { MapPin, Train, Bus, ParkingSquare, MousePointerClick } from "lucide-react";
import { CLINIC } from "@/data/clinic";
import { TRANSIT } from "@/data/location";

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Train;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-brand-surface rounded-2xl p-6">
      <div className="w-10 h-10 rounded-full bg-brand-sub-surface flex items-center justify-center mb-4">
        <Icon size={18} strokeWidth={1.8} className="text-brand-primary-dark" />
      </div>
      <h3 className="text-lg font-semibold text-brand-primary-dark mb-4">{title}</h3>
      <div className="text-brand-text-sub body-relaxed text-sm space-y-3">{children}</div>
    </div>
  );
}

function RouteRow({ type, numbers }: { type: string; numbers: string }) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-2">
      <span className="text-xs text-brand-primary-dark bg-brand-sub-surface rounded-full px-2 py-0.5 shrink-0">
        {type}
      </span>
      <span>{numbers}</span>
    </p>
  );
}

export default function Location() {
  return (
    <section id="location" className="bg-brand-sub-surface py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-14 grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-7">
            <p className="section-eyebrow">오시는 길</p>
            <h2 className="headline-tight text-3xl md:text-5xl font-light text-brand-text">
              {CLINIC.station} 도보 5분,
              <br />
              <span className="font-semibold">주차장 완비</span>.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 mb-6">
          <div className="md:col-span-7 rounded-2xl overflow-hidden bg-brand-surface aspect-[4/3] md:aspect-auto relative min-h-[360px]">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
              <rect width="400" height="300" fill="#E2E8F0" />
              <path d="M0 150 L400 150" stroke="#F8FAFC" strokeWidth="24" />
              <path d="M200 0 L200 300" stroke="#F8FAFC" strokeWidth="18" />
              <path d="M80 0 L120 300" stroke="#F8FAFC" strokeWidth="10" opacity="0.7" />
              <path d="M300 0 L320 300" stroke="#F8FAFC" strokeWidth="10" opacity="0.7" />
              <rect x="30" y="30" width="60" height="90" fill="#CBD5E1" opacity="0.5" />
              <rect x="240" y="30" width="50" height="90" fill="#CBD5E1" opacity="0.5" />
              <rect x="30" y="180" width="70" height="90" fill="#CBD5E1" opacity="0.5" />
              <rect x="240" y="180" width="60" height="90" fill="#CBD5E1" opacity="0.5" />
              <circle cx="215" cy="135" r="10" fill="#D48A8A" />
              <circle cx="215" cy="135" r="20" fill="#D48A8A" opacity="0.25" />
            </svg>
            <div className="absolute bottom-4 left-4 bg-brand-surface/95 backdrop-blur rounded-lg px-4 py-2 text-sm font-medium text-brand-primary-dark shadow-sm">
              {CLINIC.nameKo} · 5층
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="bg-brand-primary-dark text-white rounded-2xl px-6 py-4 flex items-start gap-3">
              <MapPin size={20} strokeWidth={1.8} className="text-brand-accent shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="font-semibold">{CLINIC.nameKo} · 5층</p>
                <p className="text-sm text-slate-300 mt-1">{CLINIC.address.line1}</p>
                <p className="text-sm text-slate-300">{CLINIC.address.line2}</p>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="inline-block text-lg font-semibold mt-3 hover:text-slate-200 transition-colors"
                >
                  {CLINIC.phone}
                </a>
                <p className="text-xs text-slate-300 mt-3">
                  {CLINIC.hours.weekday} · {CLINIC.hours.saturday}
                </p>
                <p className="text-xs text-slate-400">
                  {CLINIC.hours.lunch}, {CLINIC.hours.closed}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-brand-primary text-brand-primary-dark hover:bg-brand-surface px-5 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                카카오맵
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-brand-primary text-brand-primary-dark hover:bg-brand-surface px-5 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                네이버 지도
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <InfoCard icon={Train} title="지하철 이용 시">
            {TRANSIT.subway.lines.map((line) => (
              <p key={line.line}>
                <span className="font-semibold text-brand-text">{line.line}</span>
                <br />
                {line.detail}
              </p>
            ))}
          </InfoCard>

          <InfoCard icon={Bus} title="버스 이용 시">
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
          </InfoCard>

          <InfoCard icon={ParkingSquare} title="주차장 이용">
            <p>
              <span className="font-semibold text-brand-text">{TRANSIT.parking.title}</span> (
              {TRANSIT.parking.subtitle})
            </p>
            <div className="space-y-1">
              {TRANSIT.parking.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </InfoCard>
        </div>

        <a
          href="/location"
          className="group flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 rounded-2xl py-4 text-center text-brand-primary-dark font-medium transition-colors"
        >
          5층 오시는 길 상세보기 →
          <MousePointerClick size={18} strokeWidth={1.8} className="text-brand-text-muted" />
        </a>
      </div>
    </section>
  );
}
