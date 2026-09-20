import Image from "next/image";
import { doctors } from "@/data/doctors";

export default function DoctorPortrait({
  slug,
  shape = "card",
  className = "",
  sizes,
  priority = false,
}: {
  slug: string;
  shape?: "card" | "circle";
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) return null;

  return (
    <div className={`relative overflow-hidden ${shape === "circle" ? "rounded-full" : ""} ${className}`}>
      <Image
        src={doctor.image}
        alt={`${doctor.name} ${doctor.title} 프로필`}
        fill
        sizes={sizes ?? (shape === "circle" ? "64px" : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw")}
        priority={priority}
        className="object-cover object-center"
      />
    </div>
  );
}
