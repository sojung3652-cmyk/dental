import { Phone, CalendarCheck, MessageCircle, PenLine, Camera, type LucideIcon } from "lucide-react";
import { CLINIC } from "@/data/clinic";

const ICONS: { icon: LucideIcon; label: string; href: string }[] = [
  { icon: Phone, label: "전화", href: `tel:${CLINIC.phone}` },
  { icon: CalendarCheck, label: "온라인 예약", href: "/reservation" },
  { icon: MessageCircle, label: "카카오톡 상담", href: "#" },
  { icon: PenLine, label: "블로그", href: "#" },
  { icon: Camera, label: "인스타그램", href: "#" },
];

export default function FloatingIcons() {
  return (
    <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-3">
      {ICONS.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          title={label}
          aria-label={label}
          className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-brand-primary-dark transition-shadow"
        >
          <Icon size={20} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
}
