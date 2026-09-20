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
      "산뜻대학교 치의학전문대학원 졸업",
      "산뜻대학교 치과병원 보철과 수련",
      "산뜻대학교 대학원 치의학 박사",
    ],
    career: [
      "전) 산뜻대학교 치과병원 보철과 임상강사",
      "전) OO치과 대표원장",
      "현) 산뜻치과 대표원장",
    ],
    societies: [
      "한국임상치과학회 정회원",
      "한국임플란트치의학회 정회원",
      "대한종합치의학회 이사",
    ],
    certifications: ["통합치의학과 전문의"],
  },
  {
    slug: "park",
    name: "박수민",
    title: "진료원장",
    specialties: ["교정", "투명교정"],
    image: "/images/doctors/park.jpg",
    intro: "성인 교정과 투명교정 진료를 전담합니다.",
    education: [
      "편안대학교 치과대학 졸업",
      "편안대학교 치과병원 교정과 수련",
      "편안대학교 대학원 치의학 석사",
    ],
    career: [
      "전) 편안대학교 치과병원 교정과 임상강사",
      "전) OO교정치과 진료원장",
      "현) 산뜻치과 진료원장",
    ],
    societies: [
      "대한교정치의학회 인정의",
      "한국투명교정연구회 정회원",
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
      "정림대학교 치과대학 졸업",
      "정림대학교 치과병원 소아치과 수련",
      "정림대학교 대학원 치의학 석사",
    ],
    career: [
      "전) 정림대학교 치과병원 소아치과 임상강사",
      "전) OO아동치과 진료원장",
      "현) 산뜻치과 진료원장",
    ],
    societies: [
      "대한소아치의학연구회 인정의",
      "한국임상치과학회 정회원",
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
      "한들대학교 치의학전문대학원 졸업",
      "한들대학교 치과병원 구강악안면외과 수련",
      "한들대학교 대학원 치의학 석사",
    ],
    career: [
      "전) 한들대학교 치과병원 구강악안면외과 임상강사",
      "전) OO구강외과 진료원장",
      "현) 산뜻치과 진료원장",
    ],
    societies: [
      "한국구강외과연구회 정회원",
      "대한종합치의학회 정회원",
    ],
    certifications: ["구강악안면외과 전문의"],
  },
  {
    slug: "choi",
    name: "최유진",
    title: "진료원장",
    specialties: ["보존치과", "심미치료"],
    image: "/images/doctors/choi.jpg",
    intro: "충치 치료와 자연치아 보존, 심미 수복 진료를 담당합니다.",
    education: [
      "새봄대학교 치과대학 졸업",
      "새봄대학교 치과병원 보존과 수련",
      "새봄대학교 대학원 치의학 석사",
    ],
    career: [
      "전) 새봄대학교 치과병원 보존과 임상강사",
      "전) OO치과 진료원장",
      "현) 산뜻치과 진료원장",
    ],
    societies: ["대한보존치의학회 정회원", "한국심미치의학회 정회원"],
  },
];
