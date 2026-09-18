import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-4 md:px-8 pt-16 md:pt-32 pb-20 md:pb-28">
      <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-end">
        <div className="md:col-span-8">
          <p className="signature text-2xl text-brand-accent mb-4">잘 다녀오면,</p>
          <h1 className="display-tight text-5xl md:text-7xl font-light text-brand-text">
            <span className="font-semibold">다시 오고 싶어지는</span>
            <br />
            치과이고 싶습니다.
          </h1>
          <p className="body-relaxed mt-8 text-lg md:text-xl text-brand-text-sub max-w-xl">
            한 번의 방문이 다음 방문의 이유가 되도록,{" "}
            <span className="brand-emph text-brand-primary-dark">산뜻치과</span>는 진료 흐름과
            안내를 하나씩 정돈합니다.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#reservation"
              className="inline-flex items-center gap-2 bg-brand-primary-dark hover:bg-brand-text text-white px-7 py-3.5 rounded-lg font-medium transition-colors"
            >
              예약하기
            </a>
            <a
              href="tel:000-0000-0000"
              className="inline-flex items-center gap-2 text-brand-primary-dark hover:text-brand-text px-4 py-3.5 font-medium"
            >
              <Phone size={18} strokeWidth={1.8} />
              전화로 상담
            </a>
          </div>
        </div>
        <div className="md:col-span-4 md:text-right">
          <div className="inline-block text-left border-l-2 border-brand-accent pl-5">
            <p className="text-sm text-brand-text-sub mb-1">이번 주 진료</p>
            <p className="text-2xl font-semibold text-brand-primary-dark">평일 09:30–19:00</p>
            <p className="text-sm text-brand-text-sub mt-1">토요일 09:30–14:00, 일요일 휴진</p>
          </div>
        </div>
      </div>
    </section>
  );
}
