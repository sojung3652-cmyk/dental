import { Stethoscope, Syringe, Sparkles, CircleDot, AlignCenter, type LucideIcon } from "lucide-react";

export const SERVICES: {
  slug: string;
  icon: LucideIcon;
  title: string;
  blurb: string;
  duration: string;
  prepNote: string;
}[] = [
  {
    slug: "general",
    icon: Stethoscope,
    title: "일반 진료",
    blurb: "충치나 잇몸이 신경 쓰이실 때",
    duration: "30분 정도",
    prepNote: "특별한 준비 없이 편하게 오세요",
  },
  {
    slug: "wisdom",
    icon: Syringe,
    title: "사랑니 발치",
    blurb: "정밀 검사 후 편안하게",
    duration: "45분 정도",
    prepNote: "당일은 가벼운 식사 후 방문해주세요",
  },
  {
    slug: "scaling",
    icon: Sparkles,
    title: "스케일링",
    blurb: "6개월에 한 번 정기적으로",
    duration: "30분 정도",
    prepNote: "직전 식사만 피해주시면 됩니다",
  },
  {
    slug: "implant",
    icon: CircleDot,
    title: "임플란트 상담",
    blurb: "3D CT 정밀 진단 포함",
    duration: "60분 정도",
    prepNote: "이전 진료 기록이 있다면 함께 가져와주세요",
  },
  {
    slug: "ortho",
    icon: AlignCenter,
    title: "교정 상담",
    blurb: "투명·부분·전체 교정 안내",
    duration: "45분 정도",
    prepNote: "현재 착용 중인 장치가 있다면 알려주세요",
  },
];
