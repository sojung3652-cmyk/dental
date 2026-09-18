import Link from "next/link";

export default function ComingSoon({ title, blurb }: { title: string; blurb: string }) {
  return (
    <main className="flex-1 flex items-center">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-32 text-center w-full">
        <p className="signature text-2xl text-brand-accent mb-4">준비 중입니다,</p>
        <h1 className="display-tight text-4xl md:text-6xl font-light text-brand-text mb-6">
          <span className="font-semibold">{title}</span>
        </h1>
        <p className="body-relaxed text-brand-text-sub max-w-md mx-auto mb-10">{blurb} 곧 만나요.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brand-primary-dark hover:bg-brand-text text-white px-7 py-3.5 rounded-lg font-medium transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
