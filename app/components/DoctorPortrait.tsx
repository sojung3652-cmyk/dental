import { gradientForSlug } from "@/data/doctors";

export default function DoctorPortrait({
  slug,
  shape = "card",
  className = "",
}: {
  slug: string;
  shape?: "card" | "circle";
  className?: string;
}) {
  const gradient = gradientForSlug(slug);
  const gradientId = `doctor-grad-${slug}`;

  if (shape === "circle") {
    return (
      <svg viewBox="0 0 40 40" className={className} role="img" aria-label="원장 사진">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={gradient.from} />
            <stop offset="1" stopColor={gradient.to} stopOpacity={gradient.toOpacity} />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="20" fill={`url(#${gradientId})`} />
        <circle cx="20" cy="16" r="7" fill="#F8FAFC" opacity="0.9" />
        <ellipse cx="20" cy="38" rx="13" ry="9" fill="#F8FAFC" opacity="0.9" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 250"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="원장 사진"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={gradient.from} />
          <stop offset="1" stopColor={gradient.to} stopOpacity={gradient.toOpacity} />
        </linearGradient>
      </defs>
      <rect width="200" height="250" fill={`url(#${gradientId})`} />
      <circle cx="100" cy="115" r="42" fill="#F8FAFC" opacity="0.9" />
      <ellipse cx="100" cy="220" rx="72" ry="38" fill="#F8FAFC" opacity="0.9" />
    </svg>
  );
}
