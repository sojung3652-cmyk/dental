import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = { title: "오시는 길 상세" };

export default function LocationPage() {
  return (
    <>
      <Header />
      <ComingSoon title="5층 오시는 길" blurb="건물 안내도와 층별 이동 경로를 자세히 정리하고 있어요." />
      <Footer />
    </>
  );
}
