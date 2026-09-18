export type Slot = "am" | "pm" | "full" | "off";

export const SLOT_LABEL: Record<Slot, string> = { am: "오전", pm: "오후", full: "종일", off: "휴진" };

export const SLOT_CLASS: Record<Slot, string> = {
  am: "slot-am",
  pm: "slot-pm",
  full: "slot-full",
  off: "slot-off border border-slate-200",
};

export const SCHEDULE_DAYS = ["월", "화", "수", "목", "금", "토"];

export const DOCTOR_SCHEDULE: { slug: string; name: string; slots: Slot[]; highlight: number }[] = [
  { slug: "lee", name: "이서준 원장", slots: ["full", "am", "full", "off", "full", "am"], highlight: 0 },
  { slug: "park", name: "박수민 원장", slots: ["am", "full", "off", "full", "pm", "off"], highlight: 1 },
  { slug: "jung", name: "정하윤 원장", slots: ["full", "pm", "full", "full", "off", "am"], highlight: 2 },
  { slug: "kim", name: "김도현 원장", slots: ["off", "full", "am", "full", "full", "off"], highlight: 3 },
  { slug: "choi", name: "최유진 원장", slots: ["pm", "off", "full", "am", "full", "am"], highlight: 4 },
];
