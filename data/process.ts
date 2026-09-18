export const PROCESS_STEPS = [
  {
    numeral: "01",
    title: "진료 접수",
    blurb: "데스크에서 간단히 접수해주세요. 처음이시면 문진표를 함께 작성합니다.",
  },
  { numeral: "02", title: "검사와 촬영", blurb: "X-ray와 구강 스캔으로 현재 상태를 확인합니다." },
  {
    numeral: "03",
    title: "원장 상담",
    blurb: "담당 원장이 결과를 화면으로 함께 보며 설명드립니다.",
  },
  {
    numeral: "04",
    title: "치료 계획",
    blurb: "필요한 진료와 비용을 미리 안내드리고, 결정은 환자분께 맡깁니다.",
  },
  { numeral: "05", title: "치료 진행", blurb: "담당 원장이 처음부터 끝까지 직접 진행합니다." },
] as const;
