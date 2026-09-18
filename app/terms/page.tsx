import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = { title: "이용약관" };

export default function TermsPage() {
  return (
    <>
      <Header />
      <ComingSoon title="이용약관" blurb="정식 이용약관 문서를 준비하고 있어요." />
      <Footer />
    </>
  );
}
