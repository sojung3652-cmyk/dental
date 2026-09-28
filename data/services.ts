import { Stethoscope, Syringe, Sparkles, CircleDot, AlignCenter, type LucideIcon } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  blurb: string;
  duration: string;
  prepNote: string;
  heroDescription: string;
  freeBadge: string;
  recommendedDoctorSlugs: string[];
  whenToConsider: string[];
  aftercare: string[];
  faq: FaqItem[];
  relatedServices: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "general",
    icon: Stethoscope,
    title: "일반 진료",
    blurb: "충치나 잇몸이 신경 쓰이실 때",
    duration: "30분 정도",
    prepNote: "특별한 준비 없이 편하게 오세요",
    heroDescription:
      "충치, 시린 이, 잇몸 통증처럼 일상에서 흔히 겪는 불편함을 정확히 진단하고 치료합니다. 작은 증상도 놓치지 않고 꼼꼼히 살펴드립니다.",
    freeBadge: "구강 검진은 무료로 진행됩니다",
    recommendedDoctorSlugs: ["choi", "jung"],
    whenToConsider: [
      "이가 시리거나 찬 음식에 민감할 때",
      "잇몸이 붓거나 피가 날 때",
      "충치가 의심되는 부위가 있을 때",
      "마지막 검진 후 6개월이 지났을 때",
    ],
    aftercare: [
      "치료 부위는 2~3일간 자극적인 음식을 피해주세요.",
      "시린 증상이 있다면 미온수로 헹궈주세요.",
      "다음 정기 검진은 6개월 후를 권장드립니다.",
    ],
    faq: [
      {
        question: "통증이 없어도 검진이 필요한가요?",
        answer: "충치는 초기에 통증이 없는 경우가 많습니다. 정기 검진으로 조기에 발견하면 치료 범위를 최소화할 수 있습니다.",
      },
      {
        question: "당일 진료도 가능한가요?",
        answer: "온라인 예약 또는 전화 문의를 통해 당일 진료 가능 여부를 안내드립니다.",
      },
      {
        question: "보험 적용이 되나요?",
        answer: "일반 진료는 대부분 건강보험이 적용됩니다. 자세한 사항은 접수 시 안내드립니다.",
      },
    ],
    relatedServices: ["scaling", "wisdom"],
  },
  {
    slug: "wisdom",
    icon: Syringe,
    title: "사랑니 발치",
    blurb: "정밀 검사 후 편안하게",
    duration: "45분 정도",
    prepNote: "당일은 가벼운 식사 후 방문해주세요",
    heroDescription:
      "매복 사랑니부터 단순 발치까지, 정밀 검사를 통해 안전하고 편안하게 발치를 진행합니다. 구강외과 전문의가 직접 담당합니다.",
    freeBadge: "상담·정밀 진단은 무료",
    recommendedDoctorSlugs: ["kim"],
    whenToConsider: [
      "사랑니 주변 잇몸이 반복적으로 붓고 아플 때",
      "인접한 치아를 사랑니가 압박하고 있을 때",
      "양치가 잘 되지 않아 충치가 우려될 때",
      "교정 치료를 앞두고 발치가 필요할 때",
    ],
    aftercare: [
      "발치 후 30분간 거즈를 꽉 물어주세요.",
      "당일은 빨대 사용과 흡연, 음주를 피해주세요.",
      "찬 찜질로 붓기를 완화할 수 있습니다.",
      "처방된 약은 정해진 기간 동안 모두 복용해주세요.",
    ],
    faq: [
      {
        question: "발치 시 아픈가요?",
        answer: "국소마취를 통해 발치 중 통증은 거의 느끼지 않습니다. 발치 후 통증은 처방약으로 충분히 관리 가능합니다.",
      },
      {
        question: "매복 사랑니도 당일 발치가 가능한가요?",
        answer: "3D CT 촬영 후 신경과의 거리를 확인하여 당일 발치 가능 여부를 판단합니다.",
      },
      {
        question: "발치 후 며칠이나 쉬어야 하나요?",
        answer: "통상 1~2일 정도 편안한 일정을 권장드리며, 개인차가 있을 수 있습니다.",
      },
    ],
    relatedServices: ["general", "implant"],
  },
  {
    slug: "scaling",
    icon: Sparkles,
    title: "스케일링",
    blurb: "6개월에 한 번 정기적으로",
    duration: "30분 정도",
    prepNote: "직전 식사만 피해주시면 됩니다",
    heroDescription:
      "치석과 착색을 제거해 잇몸 건강을 지키는 기본 관리입니다. 6개월에 한 번, 정기적인 스케일링을 권장드립니다.",
    freeBadge: "구강 검진 동시 진행",
    recommendedDoctorSlugs: ["jung", "choi"],
    whenToConsider: [
      "마지막 스케일링 후 6개월이 지났을 때",
      "양치 시 잇몸에서 피가 날 때",
      "치아 사이 치석이 신경 쓰일 때",
      "입냄새가 계속 신경 쓰일 때",
    ],
    aftercare: [
      "시술 후 1시간 정도는 음식물 섭취를 피해주세요.",
      "당일은 착색이 강한 음식(커피, 홍차 등)을 피해주세요.",
      "일시적으로 시린 증상이 있을 수 있으나 대부분 자연히 줄어듭니다.",
    ],
    faq: [
      {
        question: "스케일링이 치아를 깎아내나요?",
        answer: "스케일링은 치아 표면의 치석만 제거하며, 치아 자체를 깎지 않습니다.",
      },
      {
        question: "건강보험이 적용되나요?",
        answer: "연 1회 건강보험 급여 스케일링이 적용됩니다. 횟수 초과 시 비급여로 안내드립니다.",
      },
      {
        question: "시린 증상이 오래 가나요?",
        answer: "대부분 며칠 내로 가라앉으며, 지속될 경우 내원 부탁드립니다.",
      },
    ],
    relatedServices: ["general"],
  },
  {
    slug: "implant",
    icon: CircleDot,
    title: "임플란트 상담",
    blurb: "3D CT 정밀 진단 포함",
    duration: "60분 정도",
    prepNote: "이전 진료 기록이 있다면 함께 가져와주세요",
    heroDescription:
      "3D CT 정밀 진단을 기반으로 안전하고 정확한 임플란트 진료를 제공합니다. 식립부터 보철까지 담당 원장이 처음부터 끝까지 책임집니다.",
    freeBadge: "상담·정밀 진단은 무료",
    recommendedDoctorSlugs: ["lee"],
    whenToConsider: [
      "치아가 빠진 지 오래되어 씹기 불편할 때",
      "틀니나 브릿지가 불편하게 느껴질 때",
      "인접 치아까지 흔들리는 것이 걱정될 때",
      "자연스러운 저작 기능을 되찾고 싶을 때",
      "이전에 다른 곳에서 발치 진단을 받았을 때",
    ],
    aftercare: [
      "식립 직후 2~3일은 딱딱하거나 질긴 음식을 피해주세요.",
      "흡연은 골유착에 영향을 줄 수 있어 치료 기간 동안 자제해주세요.",
      "정기적인 방문으로 임플란트 주위염을 예방해주세요.",
      "보철물 장착 후에도 6개월마다 정기 검진을 권장드립니다.",
      "부드러운 칫솔과 치간칫솔로 꼼꼼히 관리해주세요.",
    ],
    faq: [
      {
        question: "임플란트 수명은 얼마나 되나요?",
        answer: "관리 상태에 따라 다르지만, 정기 검진과 올바른 관리 시 10년 이상 사용하시는 경우가 많습니다.",
      },
      {
        question: "뼈가 부족해도 가능한가요?",
        answer: "뼈이식이나 상악동 거상술을 통해 뼈 상태를 보강한 후 식립이 가능한 경우가 많습니다. 3D CT로 정확히 확인합니다.",
      },
      {
        question: "전체 치료 기간은 얼마나 걸리나요?",
        answer: "평균 3~6개월 정도 소요되며, 골유착 상태에 따라 달라질 수 있습니다.",
      },
      {
        question: "통증이 심한가요?",
        answer: "국소마취 하에 진행되어 시술 중 통증은 거의 없으며, 이후 통증은 처방약으로 관리됩니다.",
      },
    ],
    relatedServices: ["wisdom", "ortho"],
  },
  {
    slug: "ortho",
    icon: AlignCenter,
    title: "교정 상담",
    blurb: "투명·부분·전체 교정 안내",
    duration: "45분 정도",
    prepNote: "현재 착용 중인 장치가 있다면 알려주세요",
    heroDescription:
      "투명교정부터 전체·부분 교정까지, 환자분의 치아 상태와 라이프스타일에 맞는 교정 계획을 제안합니다.",
    freeBadge: "상담·모형 검사는 무료",
    recommendedDoctorSlugs: ["park"],
    whenToConsider: [
      "치아 배열이 고르지 않아 신경 쓰일 때",
      "부정교합으로 씹기가 불편할 때",
      "교정 장치 없이 투명교정을 원할 때",
      "성인이 되어 다시 교정을 고민하고 있을 때",
    ],
    aftercare: [
      "장치 착용 초기에는 부드러운 음식 위주로 드세요.",
      "투명교정 장치는 하루 20시간 이상 착용을 권장드립니다.",
      "정기적인 내원으로 치아 이동 상태를 확인해주세요.",
      "교정 후에는 유지장치를 꾸준히 착용해주세요.",
    ],
    faq: [
      {
        question: "성인도 교정이 가능한가요?",
        answer: "네, 나이 제한 없이 잇몸과 뼈 상태가 건강하다면 성인 교정이 가능합니다.",
      },
      {
        question: "투명교정과 일반 교정의 차이는 무엇인가요?",
        answer: "투명교정은 탈부착이 가능하고 눈에 잘 띄지 않지만, 케이스에 따라 일반 교정이 더 적합할 수 있습니다. 상담을 통해 결정합니다.",
      },
      {
        question: "교정 기간은 얼마나 걸리나요?",
        answer: "케이스에 따라 다르지만 평균 1.5~2년 정도 소요됩니다.",
      },
    ],
    relatedServices: ["implant", "general"],
  },
];
