import { CLINIC } from "@/data/clinic";

export default function ReservationCta() {
  return (
    <section id="reservation" className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-28">
      <div className="bg-brand-primary-dark rounded-3xl px-8 md:px-16 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-accent/20"></div>
        <div className="absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-brand-accent/10"></div>
        <div className="relative max-w-2xl">
          <p className="text-sm font-medium text-brand-accent mb-3">예약 안내</p>
          <h2 className="display-tight text-4xl md:text-5xl font-light text-white mb-6">
            지금 온라인으로
            <br />
            <span className="font-semibold">예약하세요.</span>
          </h2>
          <p className="body-relaxed text-slate-300 mb-10 md:text-lg">
            정기 검진, 사랑니, 스케일링, 임플란트, 교정 등 필요한 진료를 온라인으로 예약하실 수
            있습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/reservation"
              className="inline-flex items-center bg-white hover:bg-slate-100 text-brand-primary-dark px-8 py-4 rounded-lg font-medium transition-colors"
            >
              예약 페이지로
            </a>
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center border border-slate-500 hover:border-white text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              전화 상담
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
