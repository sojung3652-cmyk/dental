import { CONCERNS } from "@/data/concerns";

export default function Concerns() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-28">
      <div className="mb-14 md:mb-16 max-w-2xl">
        <p className="section-eyebrow">망설이고 계신가요?</p>
        <h2 className="headline-tight text-3xl md:text-5xl font-light text-brand-text">
          <span className="font-semibold">산뜻치과의 약속</span>
        </h2>
      </div>

      <div className="space-y-1">
        {CONCERNS.map((concern) => (
          <details
            key={concern.numeral}
            className="group bg-brand-surface rounded-2xl overflow-hidden"
            open={concern.open}
          >
            <summary className="cursor-pointer p-8 md:p-10 list-none flex items-start gap-6">
              <span className="text-sm font-medium tracking-wide text-brand-accent shrink-0 mt-1.5">
                {concern.numeral}
              </span>
              <div className="flex-1">
                <h3 className="headline-tight text-xl md:text-2xl font-semibold text-brand-primary-dark">
                  {concern.question}
                </h3>
                <div className="mt-5 body-relaxed text-brand-text-sub">{concern.answer}</div>
              </div>
            </summary>
          </details>
        ))}
      </div>
    </section>
  );
}
