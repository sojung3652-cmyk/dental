"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { doctors } from "@/data/doctors";

export default function DoctorAvatarButton({ slug, className }: { slug: string; className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) return null;

  return (
    <button
      type="button"
      onClick={() => router.push(`${pathname}?doctor=${slug}`, { scroll: false })}
      aria-label="원장님 프로필 보기"
      className={`cursor-pointer rounded-full overflow-hidden shrink-0 ${className ?? ""}`}
    >
      <Image
        src={doctor.image}
        alt={`${doctor.name} ${doctor.title} 프로필`}
        width={64}
        height={64}
        priority
        className="rounded-full object-cover w-full h-full"
      />
    </button>
  );
}
