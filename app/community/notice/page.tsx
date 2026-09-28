import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NoticeList from "../../components/NoticeList";
import { notices } from "@/data/notices";

export const metadata: Metadata = { title: "공지사항" };

export default function NoticePage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <p className="section-eyebrow">커뮤니티</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-brand-text">공지사항</h1>
          <p className="text-brand-text-sub mt-3">산뜻치과 소식과 진료 안내를 확인하실 수 있습니다.</p>

          <NoticeList notices={notices} />
        </div>
      </main>
      <Footer />
    </>
  );
}
