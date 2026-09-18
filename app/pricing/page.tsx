import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = { title: "비급여 안내" };

export default function PricingPage() {
  return (
    <>
      <Header />
      <ComingSoon title="비급여 진료비 안내" blurb="임플란트, 교정 등 비급여 항목의 비용 기준을 정리하고 있어요." />
      <Footer />
    </>
  );
}
