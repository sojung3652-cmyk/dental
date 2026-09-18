import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReservationFlow from "./ReservationFlow";

export const metadata: Metadata = { title: "예약하기" };

export default function ReservationPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Suspense fallback={null}>
          <ReservationFlow />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
