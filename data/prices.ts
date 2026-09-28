export type PriceItem = {
  category: string;
  treatment: string; // 항목명
  detail?: string; // 세부 설명 (선택)
  priceKRW: string; // "80,000" or "1,200,000 ~ 1,800,000"
  unit?: string; // "1개당", "1회당" etc.
};

export const priceCategories = [
  { key: "implant", label: "임플란트" },
  { key: "ortho", label: "교정" },
  { key: "cosmetic", label: "심미보철" },
  { key: "prevention", label: "예방·기타" },
];

export const prices: PriceItem[] = [
  // 임플란트
  { category: "implant", treatment: "임플란트 (국산)", detail: "식립 + 지대주 + 크라운 포함", priceKRW: "1,200,000 ~ 1,500,000", unit: "1개당" },
  { category: "implant", treatment: "임플란트 (외산 프리미엄)", detail: "식립 + 지대주 + 크라운 포함", priceKRW: "1,800,000 ~ 2,500,000", unit: "1개당" },
  { category: "implant", treatment: "뼈이식 (자가골)", priceKRW: "300,000 ~ 500,000", unit: "1회당" },
  { category: "implant", treatment: "뼈이식 (합성골)", priceKRW: "400,000 ~ 700,000", unit: "1회당" },
  { category: "implant", treatment: "상악동 거상술", priceKRW: "500,000 ~ 800,000", unit: "1회당" },
  { category: "implant", treatment: "3D CT 촬영", priceKRW: "100,000", unit: "1회당" },

  // 교정
  { category: "ortho", treatment: "전체 금속 교정", priceKRW: "4,500,000 ~ 5,500,000" },
  { category: "ortho", treatment: "전체 세라믹 교정", priceKRW: "5,500,000 ~ 6,500,000" },
  { category: "ortho", treatment: "전체 투명교정 (인비절라인)", priceKRW: "7,000,000 ~ 9,000,000" },
  { category: "ortho", treatment: "부분 교정", priceKRW: "1,500,000 ~ 3,000,000" },
  { category: "ortho", treatment: "설측 교정", priceKRW: "8,000,000 ~ 12,000,000" },
  { category: "ortho", treatment: "리테이너 (교정 후 유지장치)", priceKRW: "200,000", unit: "1개당" },

  // 심미보철
  { category: "cosmetic", treatment: "올세라믹 크라운", priceKRW: "600,000 ~ 900,000", unit: "1개당" },
  { category: "cosmetic", treatment: "지르코니아 크라운", priceKRW: "500,000 ~ 800,000", unit: "1개당" },
  { category: "cosmetic", treatment: "라미네이트", priceKRW: "700,000 ~ 900,000", unit: "1개당" },
  { category: "cosmetic", treatment: "치아 미백 (전문가)", priceKRW: "400,000 ~ 600,000", unit: "1회당" },
  { category: "cosmetic", treatment: "치아 미백 (홈 케어 키트)", priceKRW: "250,000" },
  { category: "cosmetic", treatment: "레진 치료 (심미)", priceKRW: "100,000 ~ 250,000", unit: "1개당" },

  // 예방·기타
  { category: "prevention", treatment: "실란트 (치아 홈 메우기)", detail: "만 18세 이상", priceKRW: "30,000", unit: "1개당" },
  { category: "prevention", treatment: "불소 도포", priceKRW: "30,000", unit: "1회당" },
  { category: "prevention", treatment: "구취 검사", priceKRW: "50,000", unit: "1회당" },
  { category: "prevention", treatment: "수면진정 (사랑니 발치 시)", priceKRW: "200,000 ~ 300,000", unit: "1회당" },
  { category: "prevention", treatment: "진단서 발급", priceKRW: "20,000", unit: "1부" },
  { category: "prevention", treatment: "소견서 발급", priceKRW: "10,000", unit: "1부" },
];
