import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DoctorProfileContent from "../../components/DoctorProfileContent";
import { doctors } from "@/data/doctors";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  return { title: doctor ? `${doctor.name} ${doctor.title}` : "의료진" };
}

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <DoctorProfileContent doctor={doctor} titleAs="h1" sticky />
        </div>
      </main>
      <Footer />
    </>
  );
}
