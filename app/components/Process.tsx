import { PROCESS_STEPS } from "@/data/process";

export default function Process() {
  return (
    <section className="bg-brand-primary-dark py-24 md:py-28 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-14 md:mb-16 max-w-2xl">
          <p className="text-sm text-brand-accent mb-3 flex items-center gap-2">
            <span className="inline-block w-5 h-px bg-brand-accent"></span>
            방문에서 진료까지
          </p>
          <h2 className="headline-tight text-3xl md:text-5xl font-light">
            처음 오신 분도
            <br />
            <span className="font-semibold">헷갈리지 않도록</span>.
          </h2>
        </div>

        <ol className="grid md:grid-cols-5 gap-6 md:gap-4">
          {PROCESS_STEPS.map((step) => (
            <li key={step.numeral}>
              <div className="signature text-4xl text-brand-accent mb-4">{step.numeral}</div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-300 body-relaxed">{step.blurb}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
