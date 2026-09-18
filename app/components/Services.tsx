import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-28">
      <div className="mb-14 md:mb-16 grid md:grid-cols-12 gap-6 items-end">
        <div className="md:col-span-6">
          <p className="section-eyebrow">진료 안내</p>
          <h2 className="headline-tight text-3xl md:text-5xl font-light text-brand-text">
            정기 검진부터 임플란트까지,
            <br />
            <span className="font-semibold">한 곳에서</span>.
          </h2>
        </div>
        <p className="md:col-span-6 body-relaxed text-brand-text-sub md:text-lg">
          오시기 전에 어떤 진료가 필요하신지 가볍게 살펴보세요. 상담과 검진 이후에 최종 계획을
          함께 정합니다.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
        {SERVICES.map(({ slug, icon: Icon, title, blurb }) => (
          <a
            key={slug}
            href={`/reservation?service=${slug}`}
            className="group bg-brand-surface hover:bg-brand-sub-surface rounded-2xl p-6 md:p-7 transition-colors"
          >
            <div className="w-11 h-11 rounded-full bg-brand-sub-surface group-hover:bg-white flex items-center justify-center mb-6 transition-colors">
              <Icon size={20} strokeWidth={1.6} color="#334155" />
            </div>
            <h3 className="font-semibold text-brand-text mb-1">{title}</h3>
            <p className="text-sm text-brand-text-sub">{blurb}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
