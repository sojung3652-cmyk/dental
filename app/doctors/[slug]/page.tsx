import { notFound, redirect } from "next/navigation";
import { doctors } from "@/data/doctors";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export default async function DoctorDetailRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) notFound();

  redirect(`/doctors?doctor=${slug}`);
}
