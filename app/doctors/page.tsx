import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = { title: "의료진 전체 프로필" };

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <ComingSoon title="의료진 전체 프로필" blurb="다섯 원장님의 이력과 진료 철학을 자세히 소개할 페이지예요." />
      <Footer />
    </>
  );
}
