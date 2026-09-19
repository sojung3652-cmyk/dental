import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DoctorPortrait from "../../components/DoctorPortrait";
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

function CredentialSection({ label, items }: { label: string; items: string[] }) {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-px bg-brand-accent"></span>
        <h3 className="text-sm font-semibold text-brand-primary-dark tracking-wider">{label}</h3>
      </div>
      <ul className="space-y-2 text-brand-text body-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-brand-text-muted mt-1.5 shrink-0">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
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
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-24">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <DoctorPortrait slug={doctor.slug} className="w-full h-full" />
                </div>

                <p
                  className={
                    doctor.title === "대표원장"
                      ? "text-xs text-brand-accent uppercase tracking-wider mt-6 mb-1"
                      : "text-xs text-brand-text-muted uppercase tracking-wider mt-6 mb-1"
                  }
                >
                  {doctor.title}
                </p>
                <h1 className="text-2xl font-semibold text-brand-text">
                  {doctor.name}
                  <span className="text-brand-text-sub font-normal"> 원장님</span>
                </h1>
                <div className="flex gap-1.5 mt-3 flex-wrap">
                  {doctor.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="text-xs text-brand-primary-dark bg-brand-sub-surface rounded-full px-2.5 py-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/reservation?doctor=${doctor.slug}`}
                  className="inline-flex items-center justify-center w-full mt-8 bg-brand-primary-dark hover:bg-brand-text text-white px-7 py-3.5 rounded-lg font-medium transition-colors"
                >
                  이 원장님으로 예약하기
                </Link>
              </div>
            </div>

            <div className="md:col-span-7">
              <p className="text-xl text-brand-text-sub body-relaxed">{doctor.intro}</p>

              <CredentialSection label="학력" items={doctor.education} />
              <CredentialSection label="경력" items={doctor.career} />
              <CredentialSection label="소속 학회" items={doctor.societies} />
              {doctor.certifications && (
                <CredentialSection label="자격" items={doctor.certifications} />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
