const STEPS = [
  {
    numeral: "첫째",
    title: "진료 접수",
    blurb: "데스크에서 간단히 접수해주세요. 처음이시면 문진표를 함께 작성합니다.",
  },
  { numeral: "둘째", title: "검사와 촬영", blurb: "X-ray와 구강 스캔으로 현재 상태를 확인합니다." },
  {
    numeral: "셋째",
    title: "원장 상담",
    blurb: "담당 원장이 결과를 화면으로 함께 보며 설명드립니다.",
  },
  {
    numeral: "넷째",
    title: "치료 계획",
    blurb: "필요한 진료와 비용을 미리 안내드리고, 결정은 환자분께 맡깁니다.",
  },
  { numeral: "다섯째", title: "치료 진행", blurb: "담당 원장이 처음부터 끝까지 직접 진행합니다." },
];

export default function Process() {
  return (
    <section className="bg-brand-primary-dark py-24 md:py-32 text-white">
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
          {STEPS.map((step) => (
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
