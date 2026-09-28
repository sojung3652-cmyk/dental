export type Notice = {
  id: string;
  title: string;
  category: "일반" | "휴진 안내" | "이벤트" | "진료 안내";
  date: string; // ISO YYYY-MM-DD
  body: string; // plain text with \n\n paragraph breaks
  pinned?: boolean;
};

export const NOTICE_CATEGORIES: Notice["category"][] = ["일반", "휴진 안내", "이벤트", "진료 안내"];

export function formatNoticeDate(dateStr: string): string {
  return dateStr.replaceAll("-", ".");
}

export const notices: Notice[] = [
  {
    id: "chuseok-2026",
    title: "2026 추석 연휴 휴진 안내",
    category: "휴진 안내",
    date: "2026-09-15",
    body: "추석 연휴 기간 동안 아래와 같이 진료 일정을 조정합니다.\n\n· 9월 28일 (월) ~ 9월 30일 (수): 정상 진료\n· 10월 1일 (목) ~ 10월 3일 (토): 휴진\n· 10월 5일 (월): 정상 진료 재개\n\n연휴 전 진료가 필요하신 분들은 미리 예약 부탁드립니다.",
    pinned: true,
  },
  {
    id: "scaling-campaign",
    title: "가을 정기 스케일링 캠페인 안내",
    category: "이벤트",
    date: "2026-09-10",
    body: "9월 한 달간 정기 스케일링 예약 시 구강 검진을 함께 진행해 드립니다.\n\n· 대상: 산뜻치과 방문 이력이 있으신 모든 환자\n· 기간: 2026년 9월 1일 ~ 9월 30일\n· 예약: 온라인 예약 또는 전화 문의",
  },
  {
    id: "saturday-hours",
    title: "토요일 진료 시간 조정 안내",
    category: "진료 안내",
    date: "2026-08-22",
    body: "10월부터 토요일 진료 시간이 다음과 같이 변경됩니다.\n\n· 변경 전: 09:30 ~ 14:00\n· 변경 후: 09:30 ~ 15:00\n\n토요일 방문이 잦으신 환자분들의 편의를 위해 진료 시간을 연장합니다.",
  },
  {
    id: "new-ct",
    title: "3D CT 장비 도입 안내",
    category: "진료 안내",
    date: "2026-08-05",
    body: "보다 정밀한 진단을 위해 최신 3D CT 장비를 도입했습니다.\n\n임플란트 상담과 사랑니 발치 진료 시 3D CT 촬영을 통해 안전하고 정확한 치료를 제공합니다. 촬영 후 담당 원장이 결과를 직접 설명드립니다.",
  },
  {
    id: "summer-vacation",
    title: "여름 휴가 안내",
    category: "휴진 안내",
    date: "2026-07-25",
    body: "여름 휴가 기간 동안 아래와 같이 휴진합니다.\n\n· 휴진 기간: 8월 10일 (월) ~ 8월 12일 (수)\n· 진료 재개: 8월 13일 (목)\n\n휴가 후 예약이 몰릴 수 있으니 미리 예약 부탁드립니다.",
  },
  {
    id: "kids-check",
    title: "어린이 정기 검진 안내",
    category: "진료 안내",
    date: "2026-07-08",
    body: "자녀의 건강한 치아 관리를 위해 정기 검진을 권장드립니다.\n\n· 만 3세 ~ 만 12세: 6개월마다 정기 검진\n· 정하윤 원장이 담당하며, 편안한 분위기에서 진행됩니다.",
  },
  {
    id: "reservation-app",
    title: "온라인 예약 시스템 오픈",
    category: "일반",
    date: "2026-06-20",
    body: "이제 산뜻치과 홈페이지에서 직접 예약하실 수 있습니다.\n\n진료 유형, 담당 선생님, 원하시는 시간을 선택하시면 손쉽게 예약이 완료됩니다. 예약 확정 문자로 다시 한 번 안내드립니다.",
  },
];
