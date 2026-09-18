const CONCERNS = [
  {
    numeral: "하나.",
    question: "치료가 많이 아프진 않을까요?",
    answer:
      "아프지 않게 하는 것이 저희 진료의 첫 원칙입니다. 마취 전 표면 마취부터 시작해 통증 반응을 살피며 천천히 진행하고, 필요하신 분께는 수면진정요법을 안내드립니다. 치료 중 언제든 손을 들어 주시면 즉시 멈춥니다.",
    open: true,
  },
  {
    numeral: "둘.",
    question: "과잉진료를 하진 않을까요?",
    answer:
      "꼭 필요한 진료만 안내드립니다. 진단 결과와 치료 계획, 비용은 치료 시작 전 모두 말씀드리고, 다른 선택지가 있다면 그것도 함께 설명드립니다. 결정은 언제나 환자분께 맡깁니다.",
  },
  {
    numeral: "셋.",
    question: "가서 실망하진 않을까요?",
    answer:
      "소개로 찾아주시는 분들이 저희에게는 가장 큰 답입니다. 첫 진료부터 마지막 확인까지 담당 원장이 직접 진행하며, 치료 후에도 궁금하신 점은 전화로 언제든 여쭤보실 수 있습니다.",
  },
];

export default function Concerns() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-28">
      <div className="mb-14 md:mb-16 max-w-2xl">
        <p className="section-eyebrow">망설이고 계신가요?</p>
        <h2 className="headline-tight text-3xl md:text-5xl font-light text-brand-text">
          혹시 <span className="font-semibold">이런 걱정</span>,
          <br />
          하고 계셨다면요.
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
              <span className="signature text-3xl md:text-4xl text-brand-accent shrink-0 mt-1">
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
