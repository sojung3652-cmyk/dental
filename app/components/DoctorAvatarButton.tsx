"use client";

import { usePathname, useRouter } from "next/navigation";
import DoctorPortrait from "./DoctorPortrait";

export default function DoctorAvatarButton({ slug, className }: { slug: string; className?: string }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      type="button"
      onClick={() => router.push(`${pathname}?doctor=${slug}`, { scroll: false })}
      aria-label="원장님 프로필 보기"
      className={`cursor-pointer rounded-full ${className ?? ""}`}
    >
      <DoctorPortrait slug={slug} shape="circle" className="w-full h-full rounded-full" />
    </button>
  );
}
