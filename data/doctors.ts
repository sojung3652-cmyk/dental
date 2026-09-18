export const DOCTOR_GRADIENTS = [
  { id: "p1", from: "#E2E8F0", to: "#CBD5E1", toOpacity: 1 },
  { id: "p2", from: "#F1F5F9", to: "#D48A8A", toOpacity: 0.35 },
  { id: "p3", from: "#CBD5E1", to: "#94A3B8", toOpacity: 1 },
  { id: "p4", from: "#F1F5F9", to: "#CBD5E1", toOpacity: 1 },
  { id: "p5", from: "#E2E8F0", to: "#D48A8A", toOpacity: 0.25 },
] as const;

export const DOCTORS: {
  gradient: string;
  title: string;
  accent?: boolean;
  name: string;
  specialty: string;
  blurb: string;
}[] = [
  {
    gradient: "p1",
    title: "대표원장",
    accent: true,
    name: "이서준 원장",
    specialty: "임플란트 · 보철",
    blurb: "정밀한 진단으로 부담이 적은 임플란트를 계획합니다.",
  },
  {
    gradient: "p2",
    title: "진료원장",
    name: "박수민 원장",
    specialty: "교정 · 투명교정",
    blurb: "라이프스타일에 맞춘 교정 방식을 함께 찾습니다.",
  },
  {
    gradient: "p3",
    title: "진료원장",
    name: "정하윤 원장",
    specialty: "소아 · 가족 진료",
    blurb: "아이도, 부모님도 편안하게 다녀가시길 바랍니다.",
  },
  {
    gradient: "p4",
    title: "진료원장",
    name: "김도현 원장",
    specialty: "구강외과 · 사랑니",
    blurb: "어려운 위치의 사랑니도 안전하게 발치합니다.",
  },
  {
    gradient: "p5",
    title: "진료원장",
    name: "최유진 원장",
    specialty: "보존 · 심미 진료",
    blurb: "자연치아를 오래 쓰실 수 있도록 돕습니다.",
  },
];
