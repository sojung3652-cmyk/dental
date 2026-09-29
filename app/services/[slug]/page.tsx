import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronDown, Phone } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DoctorPortrait from "../../components/DoctorPortrait";
import PhoneCtaButton from "../../components/PhoneCtaButton";
import { SERVICES } from "@/data/services";
import { doctors } from "@/data/doctors";
import { PROCESS_STEPS } from "@/data/process";
import { CLINIC } from "@/data/clinic";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} · ${CLINIC.nameKo}`,
    description: service.heroDescription,
  };
}

function toEstimatePill(duration: string): string {
  return `약 ${duration.replace("정도", "").trim()}`;
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const recommendedDoctors = service.recommendedDoctorSlugs
    .map((s) => doctors.find((d) => d.slug === s))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  const relatedServices = service.relatedServices
    .map((s) => SERVICES.find((sv) => sv.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          {/* Breadcrumb */}
          <p className="text-xs text-brand-text-muted mb-8">
            <Link href="/" className="hover:text-brand-primary-dark transition-colors">
              홈
            </Link>
            <span className="text-brand-text-muted mx-2">/</span>
            <Link href="/services" className="hover:text-brand-primary-dark transition-colors">
              진료 안내
            </Link>
            <span className="text-brand-text-muted mx-2">/</span>
            {service.title}
          </p>

          {/* Hero */}
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="section-eyebrow">진료 안내</p>
              <h1 className="text-4xl md:text-5xl font-semibold text-brand-text">{service.title}</h1>
              <p className="text-lg text-brand-text-sub body-relaxed mt-6 max-w-2xl">
                {service.heroDescription}
              </p>
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="text-xs px-2.5 py-1 rounded-full bg-brand-sub-surface text-brand-primary-dark">
                  {toEstimatePill(service.duration)}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-brand-sub-surface text-brand-primary-dark">
                  {service.freeBadge}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link
                  href={`/reservation?service=${service.slug}`}
                  className="inline-flex items-center gap-2 bg-brand-primary-dark hover:bg-brand-text text-white px-7 py-3.5 rounded-lg font-medium transition-colors"
                >
                  예약하기
                </Link>
                <PhoneCtaButton className="inline-flex items-center gap-2 text-brand-primary-dark hover:text-brand-text px-4 py-3.5 font-medium">
                  <Phone size={18} strokeWidth={1.8} />
                  전화 문의
                </PhoneCtaButton>
              </div>
            </div>

            {recommendedDoctors.length > 0 && (
              <div className="md:col-span-4">
                <div className="bg-brand-sub-surface rounded-2xl p-6">
                  <p className="text-sm text-brand-text-sub mb-4">이 진료 담당 선생님</p>
                  <div className="space-y-3">
                    {recommendedDoctors.map((doctor) => (
                      <Link
                        key={doctor.slug}
                        href={`/doctors?doctor=${doctor.slug}`}
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                      >
                        <DoctorPortrait slug={doctor.slug} shape="circle" className="w-10 h-10 rounded-full shrink-0" />
                        <div className="min-w-0">
                          <p className="font-semibold text-brand-text text-sm truncate">{doctor.name} 원장</p>
                          <p className="text-xs text-brand-text-muted truncate">
                            {doctor.specialties.join(" · ")}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 이런 경우 방문해주세요 */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brand-accent" />
              <h2 className="text-xl font-semibold text-brand-primary-dark">이런 경우 방문해주세요</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {service.whenToConsider.map((item) => (
                <div key={item} className="bg-brand-surface rounded-xl p-5 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={2.5} className="text-brand-accent" />
                  </span>
                  <p className="text-brand-text text-sm body-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 진료 절차 */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brand-accent" />
              <h2 className="text-xl font-semibold text-brand-primary-dark">진료 절차</h2>
            </div>
            <ol className="grid md:grid-cols-5 gap-6 md:gap-4">
              {PROCESS_STEPS.map((step) => (
                <li key={step.numeral}>
                  <div className="text-3xl font-light tracking-tight text-brand-accent mb-3">
                    {step.numeral}
                  </div>
                  <h3 className="font-semibold text-brand-text mb-1.5">{step.title}</h3>
                  <p className="text-sm text-brand-text-sub body-relaxed">{step.blurb}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* 진료 후 관리 */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brand-accent" />
              <h2 className="text-xl font-semibold text-brand-primary-dark">진료 후 관리</h2>
            </div>
            <div className="bg-brand-sub-surface rounded-2xl p-8">
              <ul className="text-brand-text body-relaxed space-y-3">
                {service.aftercare.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-brand-primary-dark shrink-0 mt-1">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brand-accent" />
              <h2 className="text-xl font-semibold text-brand-primary-dark">자주 묻는 질문</h2>
            </div>
            <div>
              {service.faq.map((item) => (
                <details key={item.question} className="group bg-brand-surface rounded-2xl overflow-hidden mb-2">
                  <summary className="p-6 cursor-pointer list-none flex items-center justify-between gap-4 font-medium text-brand-primary-dark">
                    {item.question}
                    <ChevronDown
                      size={18}
                      strokeWidth={1.8}
                      className="shrink-0 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="p-6 pt-0 text-brand-text-sub body-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* 관련 진료 */}
          {relatedServices.length > 0 && (
            <section className="mt-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-brand-accent" />
                <h2 className="text-xl font-semibold text-brand-primary-dark">관련 진료</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedServices.map(({ slug: relSlug, icon: Icon, title, blurb }) => (
                  <Link
                    key={relSlug}
                    href={`/services/${relSlug}`}
                    className="bg-brand-surface rounded-xl p-5 hover:shadow-md transition-shadow flex items-center gap-4"
                  >
                    <span className="w-11 h-11 rounded-full bg-brand-sub-surface flex items-center justify-center shrink-0">
                      <Icon size={20} strokeWidth={1.6} color="#334155" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-brand-text">{title}</p>
                      <p className="text-xs text-brand-text-sub truncate">{blurb}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* CTA band */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mt-20 pb-16 md:pb-20">
          <div className="bg-brand-primary-dark rounded-3xl px-8 md:px-16 py-16 md:py-24 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-accent/20" />
            <div className="absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-brand-accent/10" />
            <div className="relative max-w-2xl">
              <p className="text-sm font-medium text-brand-accent mb-3">예약 안내</p>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                지금 {service.title.endsWith("상담") ? service.title : `${service.title} 상담`}
                을 <span className="font-semibold">예약하세요</span>.
              </h2>
              <p className="body-relaxed text-slate-300 mb-10 md:text-lg">
                {service.title} 진료를 담당하는 선생님과 직접 상담하실 수 있습니다.
              </p>
              <Link
                href={`/reservation?service=${service.slug}`}
                className="inline-flex items-center bg-white hover:bg-slate-100 text-brand-primary-dark px-8 py-4 rounded-lg font-medium transition-colors"
              >
                {service.title} 예약하기
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
