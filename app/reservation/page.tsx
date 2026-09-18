import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = { title: "예약하기" };

export default function ReservationPage() {
  return (
    <>
      <Header />
      <ComingSoon title="온라인 예약" blurb="원장과 시간을 직접 고르는 예약 페이지를 준비하고 있어요." />
      <Footer />
    </>
  );
}
