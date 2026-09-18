import { Stethoscope, Syringe, Sparkles, CircleDot, AlignCenter, type LucideIcon } from "lucide-react";

export const SERVICES: { icon: LucideIcon; title: string; blurb: string }[] = [
  { icon: Stethoscope, title: "일반 진료", blurb: "충치와 잇몸을 오래 지켜봅니다" },
  { icon: Syringe, title: "사랑니 발치", blurb: "정밀 검사 후 편안하게" },
  { icon: Sparkles, title: "스케일링", blurb: "6개월 정기 방문 권장" },
  { icon: CircleDot, title: "임플란트", blurb: "상담과 정밀 진단은 무료" },
  { icon: AlignCenter, title: "교정", blurb: "투명, 부분, 전체 교정" },
];
