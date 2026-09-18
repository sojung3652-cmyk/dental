import { CLINIC } from "@/data/clinic";

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

        <div className="grid md:grid-cols-12 gap-6">
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

          <div className="md:col-span-5 space-y-6 bg-brand-surface rounded-2xl p-8">
            <div>
              <p className="text-xs text-brand-text-muted mb-1">주소</p>
              <p className="text-brand-text">{CLINIC.address.line1}</p>
              <p className="text-brand-text">{CLINIC.address.line2}</p>
            </div>
            <div>
              <p className="text-xs text-brand-text-muted mb-1">전화</p>
              <a
                href={`tel:${CLINIC.phone}`}
                className="text-2xl font-semibold text-brand-primary-dark hover:text-brand-text transition-colors"
              >
                {CLINIC.phone}
              </a>
            </div>
            <div>
              <p className="text-xs text-brand-text-muted mb-1">진료 시간</p>
              <p className="text-brand-text">{CLINIC.hours.weekday}</p>
              <p className="text-brand-text">{CLINIC.hours.saturday}</p>
              <p className="text-brand-text-sub text-sm mt-1">
                {CLINIC.hours.lunch}, {CLINIC.hours.closed}
              </p>
            </div>
            <div>
              <p className="text-xs text-brand-text-muted mb-1">주차</p>
              <p className="text-brand-text-sub text-sm body-relaxed">
                건물 지하 주차장을 이용해주세요. 데스크에서 주차 확인 도장을 찍어드립니다.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-brand-primary text-brand-primary-dark hover:bg-brand-sub-surface px-5 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                카카오맵
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-brand-primary text-brand-primary-dark hover:bg-brand-sub-surface px-5 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                네이버 지도
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
