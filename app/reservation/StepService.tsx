import { SERVICES } from "@/data/services";
import { SERVICE_DOCTOR_MATCH } from "@/data/reservation";

function toEstimatePill(duration: string): string {
  return `약 ${duration.replace("정도", "").trim()}`;
}

export default function StepService({
  doctorSlug,
  onSelect,
}: {
  doctorSlug?: string;
  onSelect: (slug: string) => void;
}) {
  // A doctor-first deep link (from the doctor modal CTA) carries `doctor` into
  // Step 1 before a service is chosen — surface which service(s) that doctor
  // is matched to, via a reverse lookup of the same map Step 2 uses.
  const suggestedServices = doctorSlug
    ? Object.entries(SERVICE_DOCTOR_MATCH)
        .filter(([, doctorSlugs]) => doctorSlugs.includes(doctorSlug))
        .map(([serviceSlug]) => serviceSlug)
    : [];

  return (
    <div>
      <p className="text-sm text-brand-text-muted mb-2 text-center">1단계 · 진료 유형</p>
      <h1 className="headline-tight text-3xl md:text-4xl font-light text-brand-text text-center mb-12">
        어떤 진료가 <span className="font-semibold">필요하신가요</span>?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map(({ slug, icon: Icon, title, blurb, duration, prepNote }) => (
          <button
            key={slug}
            type="button"
            onClick={() => onSelect(slug)}
            className="text-left bg-brand-surface hover:bg-brand-sub-surface border border-slate-200 hover:border-brand-primary rounded-2xl p-6 transition-colors"
          >
            <div className="w-11 h-11 rounded-full bg-brand-sub-surface flex items-center justify-center mb-5">
              <Icon size={20} strokeWidth={1.6} color="#334155" />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-brand-text">{title}</h3>
              {suggestedServices.includes(slug) && (
                <span className="text-[11px] text-brand-accent border border-brand-accent/40 rounded-full px-1.5 py-0.5 shrink-0">
                  추천
                </span>
              )}
            </div>
            <p className="text-sm text-brand-text-sub mb-3">{blurb}</p>
            <span className="inline-block text-xs text-brand-primary-dark bg-brand-sub-surface rounded-full px-2.5 py-1 mb-3">
              {toEstimatePill(duration)}
            </span>
            <p className="text-xs text-brand-text-sub">{prepNote}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
