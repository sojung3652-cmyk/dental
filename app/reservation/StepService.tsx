import { SERVICES } from "@/data/services";

export default function StepService({ onSelect }: { onSelect: (slug: string) => void }) {
  return (
    <div>
      <p className="text-sm font-medium text-brand-accent mb-2 text-center">천천히 골라주세요</p>
      <h1 className="headline-tight text-3xl md:text-4xl font-light text-brand-text text-center mb-12">
        어떤 진료가 <span className="font-semibold">필요하신가요</span>?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
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
            <h3 className="font-semibold text-brand-text mb-1">
              {title} · {duration}
            </h3>
            <p className="text-sm text-brand-text-sub mb-3">{blurb}</p>
            <p className="text-xs text-brand-text-muted">{prepNote}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
