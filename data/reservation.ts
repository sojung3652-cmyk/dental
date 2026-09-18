import { DOCTOR_SCHEDULE, type Slot as DaySlot } from "./schedule";

export const TIME_SLOTS = [
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
] as const;

// Which doctor to nudge patients toward for a given service — shown as a
// "추천" hint in Step 2, never used to hide the other four doctors.
export const SERVICE_DOCTOR_MATCH: Record<string, string[]> = {
  wisdom: ["kim"],
  implant: ["lee"],
  ortho: ["park"],
};

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return h;
}

function pad2(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

export function toDateStr(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

/** Monday of the week containing `d`. */
export function mondayOf(d: Date): Date {
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const day = date.getDay(); // 0 = Sunday
  const diff = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + diff);
  return date;
}

export function addDays(d: Date, days: number): Date {
  const date = new Date(d);
  date.setDate(date.getDate() + days);
  return date;
}

export function addWeeks(d: Date, weeks: number): Date {
  return addDays(d, weeks * 7);
}

export function weekDates(monday: Date): Date[] {
  return Array.from({ length: 6 }, (_, i) => addDays(monday, i));
}

export function formatDayLabel(d: Date): string {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return `${d.getMonth() + 1}/${d.getDate()}(${days[d.getDay()]})`;
}

export function formatFullDate(d: Date): string {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return `${d.getMonth() + 1}월 ${d.getDate()}일(${days[d.getDay()]})`;
}

export function formatTimeKo(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const period = h < 12 ? "오전" : "오후";
  const hour12 = h > 12 ? h - 12 : h;
  return m === 0 ? `${period} ${hour12}시` : `${period} ${hour12}:${pad2(m)}`;
}

type SlotStatus = "available" | "unavailable" | "past";

/** Weekly recurring pattern (am/pm/full/off) + a deterministic ~20% "booked"
 * scatter, seeded per doctor+date+time so the same URL always renders the
 * same fake availability. Past dates/times are also unavailable. */
export function slotStatus(doctorSlug: string, date: Date, time: string): SlotStatus {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (date < startOfToday) return "past";

  const dayIndex = (date.getDay() + 6) % 7; // 0 = Monday
  if (dayIndex > 5) return "unavailable"; // Sunday: clinic closed

  const doctorRow = DOCTOR_SCHEDULE.find((d) => d.slug === doctorSlug);
  const pattern: DaySlot = doctorRow ? doctorRow.slots[dayIndex] : "off";
  if (pattern === "off") return "unavailable";

  const hour = Number(time.split(":")[0]);
  if (pattern === "am" && hour >= 12) return "unavailable";
  if (pattern === "pm" && hour < 14) return "unavailable";

  if (date.getTime() === startOfToday.getTime()) {
    const [h, m] = time.split(":").map(Number);
    const slotTime = new Date(date);
    slotTime.setHours(h, m, 0, 0);
    if (slotTime <= now) return "past";
  }

  const bookedRoll = hashStr(`${doctorSlug}|${toDateStr(date)}|${time}`) % 5;
  if (bookedRoll === 0) return "unavailable";

  return "available";
}

export function generateReservationRef(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `ST-${code}`;
}

export function maskPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 8) return phone;
  const last4 = digits.slice(-4);
  return `010-****-${last4}`;
}
