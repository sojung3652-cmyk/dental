export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-brand-sub-surface py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="section-eyebrow">저희의 마음</p>
            <div className="quote-block pl-4">
              <p className="display-tight text-3xl md:text-4xl font-light text-brand-text">
                이분이 내 <span className="font-semibold">가족</span>이라면
                <br />
                어떻게 <span className="font-semibold">진료</span>할까?
              </p>
            </div>
            <p className="body-relaxed mt-8 text-brand-text-sub max-w-md">
              매일 아침 저희가 스스로에게 던지는 질문입니다. 이 질문에서 시작하는 진료가{" "}
              <span className="brand-emph text-brand-primary-dark">산뜻치과</span>의 방식입니다.
            </p>
          </div>

          <div className="md:col-span-7 bg-brand-surface rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-full">
                <defs>
                  <linearGradient id="grad-dir" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#CBD5E1" />
                    <stop offset="1" stopColor="#94A3B8" />
                  </linearGradient>
                </defs>
                <rect width="80" height="80" rx="40" fill="url(#grad-dir)" />
                <circle cx="40" cy="33" r="14" fill="#F1F5F9" opacity="0.9" />
                <ellipse cx="40" cy="70" rx="24" ry="14" fill="#F1F5F9" opacity="0.9" />
              </svg>
              <div>
                <p className="text-sm text-brand-text-sub">대표원장</p>
                <p className="text-lg font-semibold text-brand-primary-dark">이서준</p>
              </div>
            </div>

            <div className="body-relaxed text-brand-text space-y-4 text-[15px] md:text-base">
              <p>안녕하세요. 산뜻치과 대표원장 이서준입니다.</p>
              <p>
                치과는 늘 조금 무서운 곳이었습니다. 어릴 적 저도 그랬고, 지금 진료 의자에 앉는
                분들의 마음도 크게 다르지 않을 거라 생각합니다.
              </p>
              <p>
                그래서 저희 다섯 명의 원장은 매일 하나의 질문으로 하루를 시작합니다.{" "}
                <span className="brand-emph text-brand-primary-dark">
                  &ldquo;내 가족이 이 자리에 앉아 있다면, 나는 어떻게 진료할까?&rdquo;
                </span>
              </p>
              <p>
                그 답을 따라 저희는 아프지 않게, 오래 편안하게, 그리고 다시 오고 싶어지는 치과가
                되기 위해 노력합니다. 언제든 편안한 마음으로 찾아주세요.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-end justify-between">
              <p className="text-sm text-brand-text-sub">산뜻치과 대표원장</p>
              <p className="signature text-3xl text-brand-primary-dark">이서준</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
