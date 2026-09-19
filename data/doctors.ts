export type Doctor = {
  slug: string;
  name: string;
  title: string; // 대표원장 / 진료원장
  specialties: string[]; // for pill tags
  image: string;
  intro: string; // one-sentence positioning line, professional not warm-fuzzy
  education: string[]; // 학력
  career: string[]; // 경력
  societies: string[]; // 소속 학회
  certifications?: string[]; // optional
};

export const doctors: Doctor[] = [
  {
    slug: "lee",
    name: "이서준",
    title: "대표원장",
    specialties: ["임플란트", "보철"],
    image: "/images/doctors/lee.jpg",
    intro: "3D CT 정밀 진단 기반의 임플란트 및 보철 진료를 담당합니다.",
    education: [
      "서울대학교 치의학전문대학원 졸업",
      "서울대학교 치과병원 보철과 수련",
      "서울대학교 대학원 치의학 박사",
    ],
    career: [
      "전) 서울대학교 치과병원 보철과 임상강사",
      "전) 강남 OO치과 대표원장",
      "현) 산뜻치과 대표원장",
    ],
    societies: [
      "대한치과보철학회 정회원",
      "대한구강악안면임플란트학회 정회원",
      "국제구강임플란트학회(ICOI) Fellow",
    ],
    certifications: ["보건복지부 인증 통합치의학과 전문의"],
  },
  {
    slug: "park",
    name: "박수민",
    title: "진료원장",
    specialties: ["교정", "투명교정"],
    image: "/images/doctors/park.jpg",
    intro: "성인 교정과 투명교정 진료를 전담합니다.",
    education: [
      "연세대학교 치과대학 졸업",
      "연세대학교 치과병원 교정과 수련",
      "연세대학교 대학원 치의학 석사",
    ],
    career: [
      "전) 연세대학교 치과병원 교정과 임상강사",
      "전) 분당 OO교정치과 진료원장",
      "현) 산뜻치과 진료원장",
    ],
    societies: [
      "대한치과교정학회 인정의",
      "대한투명교정학회 정회원",
      "세계교정학회(WFO) 정회원",
    ],
  },
  {
    slug: "jung",
    name: "정하윤",
    title: "진료원장",
    specialties: ["소아치과", "예방치과"],
    image: "/images/doctors/jung.jpg",
    intro: "어린이 및 청소년 진료와 가족 단위 정기 검진을 담당합니다.",
    education: [
      "경희대학교 치과대학 졸업",
      "경희대학교 치과병원 소아치과 수련",
      "경희대학교 대학원 치의학 석사",
    ],
    career: [
      "전) 경희대학교 치과병원 소아치과 임상강사",
      "전) 서울 OO아동치과 진료원장",
      "현) 산뜻치과 진료원장",
    ],
    societies: [
      "대한소아치과학회 인정의",
      "대한예방치과·구강보건학회 정회원",
    ],
  },
  {
    slug: "kim",
    name: "김도현",
    title: "진료원장",
    specialties: ["구강외과", "사랑니 발치"],
    image: "/images/doctors/kim.jpg",
    intro: "난이도 높은 매복 사랑니 발치와 구강외과 시술을 담당합니다.",
    education: [
      "고려대학교 치과대학 졸업",
      "고려대학교 안암병원 구강악안면외과 수련",
      "고려대학교 대학원 치의학 석사",
    ],
    career: [
      "전) 고려대학교 안암병원 구강악안면외과 임상강사",
      "전) 강북 OO구강외과 진료원장",
      "현) 산뜻치과 진료원장",
    ],
    societies: [
      "대한구강악안면외과학회 정회원",
      "대한악안면성형재건외과학회 정회원",
    ],
    certifications: ["보건복지부 인증 구강악안면외과 전문의"],
  },
  {
    slug: "choi",
    name: "최유진",
    title: "진료원장",
    specialties: ["보존치과", "심미치료"],
    image: "/images/doctors/choi.jpg",
    intro: "충치 치료와 자연치아 보존, 심미 수복 진료를 담당합니다.",
    education: [
      "가톨릭대학교 의과대학 치의학과 졸업",
      "가톨릭대학교 서울성모병원 보존과 수련",
      "가톨릭대학교 대학원 치의학 석사",
    ],
    career: [
      "전) 서울성모병원 치과 보존과 임상강사",
      "전) 강남 OO치과 진료원장",
      "현) 산뜻치과 진료원장",
    ],
    societies: ["대한치과보존학회 정회원", "대한심미치과학회 정회원"],
  },
];

// Placeholder portrait gradients — no real photo assets exist yet, so
// DoctorPortrait renders these instead of `image`. Swap in real photos by
// pointing DoctorPortrait at `doctor.image` once assets are available.
export const DOCTOR_GRADIENTS = [
  { id: "p1", from: "#E2E8F0", to: "#CBD5E1", toOpacity: 1 },
  { id: "p2", from: "#F1F5F9", to: "#D48A8A", toOpacity: 0.35 },
  { id: "p3", from: "#CBD5E1", to: "#94A3B8", toOpacity: 1 },
  { id: "p4", from: "#F1F5F9", to: "#CBD5E1", toOpacity: 1 },
  { id: "p5", from: "#E2E8F0", to: "#D48A8A", toOpacity: 0.25 },
] as const;

const GRADIENT_ID_BY_SLUG: Record<string, (typeof DOCTOR_GRADIENTS)[number]["id"]> = {
  lee: "p1",
  park: "p2",
  jung: "p3",
  kim: "p4",
  choi: "p5",
};

export function gradientForSlug(slug: string) {
  const id = GRADIENT_ID_BY_SLUG[slug] ?? "p1";
  return DOCTOR_GRADIENTS.find((g) => g.id === id)!;
}
