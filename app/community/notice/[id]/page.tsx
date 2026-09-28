import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { notices, formatNoticeDate } from "@/data/notices";

export function generateStaticParams() {
  return notices.map((n) => ({ id: n.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const notice = notices.find((n) => n.id === id);
  return { title: notice ? notice.title : "공지사항" };
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const index = notices.findIndex((n) => n.id === id);
  if (index === -1) notFound();

  const notice = notices[index];
  const prev = notices[index - 1];
  const next = notices[index + 1];

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <Link
            href="/community/notice"
            className="text-sm text-brand-text-sub hover:text-brand-primary-dark transition-colors"
          >
            ← 공지사항 목록으로
          </Link>

          <div className="flex items-center justify-between mt-8">
            <span className="text-xs px-2.5 py-1 rounded-full bg-brand-sub-surface text-brand-primary-dark">
              {notice.category}
            </span>
            <span className="text-xs text-brand-text-muted">{formatNoticeDate(notice.date)}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-brand-text mt-4">{notice.title}</h1>

          <div className="border-t border-slate-200 mt-8 mb-8" />

          <p className="body-relaxed text-brand-text whitespace-pre-wrap">{notice.body}</p>

          <div className="mt-14 pt-6 border-t border-slate-200 flex items-center justify-between text-sm">
            {prev ? (
              <Link
                href={`/community/notice/${prev.id}`}
                className="text-brand-text-sub hover:text-brand-primary-dark transition-colors truncate max-w-[45%]"
              >
                ← 이전 글
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/community/notice/${next.id}`}
                className="text-brand-text-sub hover:text-brand-primary-dark transition-colors truncate max-w-[45%] text-right"
              >
                다음 글 →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
