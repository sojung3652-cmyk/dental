import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = { title: "개인정보처리방침" };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <ComingSoon title="개인정보처리방침" blurb="정식 개인정보처리방침 문서를 준비하고 있어요." />
      <Footer />
    </>
  );
}
