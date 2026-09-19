import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DoctorCard from "../components/DoctorCard";
import { doctors } from "@/data/doctors";
import { CLINIC } from "@/data/clinic";

export const metadata: Metadata = { title: "의료진 전체 프로필" };

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl mb-14 md:mb-16">
            <p className="section-eyebrow">의료진 소개</p>
            <h1 className="headline-tight text-3xl md:text-5xl font-light text-brand-text">
              <span className="font-semibold">{CLINIC.nameKo}</span> 의료진
            </h1>
            <p className="body-relaxed text-brand-text-sub md:text-lg mt-6">
              각 진료 분야의 전문 원장이 진단부터 치료까지 직접 책임집니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
