"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import DoctorPortrait from "../components/DoctorPortrait";
import {
  SERVICE_DOCTOR_MATCH,
  TIME_SLOTS,
  WEEKS_AHEAD,
  addWeeks,
  formatDayLabel,
  formatFullDate,
  formatMonthDay,
  formatTimeKo,
  mondayOf,
  slotStatus,
  toDateStr,
  weekDates,
} from "@/data/reservation";

export default function StepSchedule({
  serviceSlug,
  doctorSlug,
  initialSlot,
  onPickDoctor,
  onPickSlot,
}: {
  serviceSlug?: string;
  doctorSlug?: string;
  initialSlot?: string;
  onPickDoctor: (slug: string) => void;
  onPickSlot: (doctorSlug: string, isoSlot: string) => void;
}) {
  const today = useMemo(() => new Date(), []);
  const currentMonday = useMemo(() => mondayOf(today), [today]);

  // If today is Sunday (clinic closed, hidden from the grid), the week
  // containing "today" has no bookable days left — default to next week
  // instead of showing an all-past, all-struck-through grid.
  const minWeekOffset = useMemo(() => {
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const saturday = weekDates(currentMonday)[5];
    return saturday < startOfToday ? 1 : 0;
  }, [currentMonday, today]);

  const initialWeekOffset = useMemo(() => {
    if (!initialSlot) return minWeekOffset;
    const [datePart] = initialSlot.split("T");
    const d = new Date(datePart);
    if (Number.isNaN(d.getTime())) return minWeekOffset;
    const diffDays = Math.round((mondayOf(d).getTime() - currentMonday.getTime()) / 86400000);
    return Math.max(minWeekOffset, Math.round(diffDays / 7));
  }, [initialSlot, currentMonday, minWeekOffset]);

  const maxWeekOffset = minWeekOffset + WEEKS_AHEAD - 1;

  const [weekOffset, setWeekOffset] = useState(initialWeekOffset);
  const [pendingSlot, setPendingSlot] = useState<{ date: Date; time: string } | null>(null);

  useEffect(() => {
    setWeekOffset(initialWeekOffset);
  }, [initialWeekOffset]);

  const monday = useMemo(() => addWeeks(currentMonday, weekOffset), [currentMonday, weekOffset]);
  const days = useMemo(() => weekDates(monday), [monday]);

  const recommended = serviceSlug ? SERVICE_DOCTOR_MATCH[serviceSlug] ?? [] : [];
  const selectedDoctor = doctors.find((d) => d.slug === doctorSlug);

  function handleSlotClick(date: Date, time: string) {
    if (!doctorSlug) return;
    setPendingSlot({ date, time });
  }

  function advanceNow() {
    if (!doctorSlug || !pendingSlot) return;
    const iso = `${toDateStr(pendingSlot.date)}T${pendingSlot.time}`;
    onPickSlot(doctorSlug, iso);
  }

  useEffect(() => {
    if (!pendingSlot || !doctorSlug) return;
    const iso = `${toDateStr(pendingSlot.date)}T${pendingSlot.time}`;
    const timer = window.setTimeout(() => onPickSlot(doctorSlug, iso), 600);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingSlot, doctorSlug]);

  return (
    <div>
      <p className="text-sm text-brand-text-muted mb-2 text-center">2단계 · 의료진 및 일정</p>
      <h1 className="headline-tight text-3xl md:text-4xl font-light text-brand-text text-center mb-12">
        언제, 어느 <span className="font-semibold">선생님과 함께할까요</span>?
      </h1>

      <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
        {/* Doctor picker */}
        <div className="min-w-0 flex md:flex-col gap-2 overflow-x-auto snap-x snap-mandatory md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {doctors.map((doctor) => {
            const active = doctor.slug === doctorSlug;
            const isRecommended = recommended.includes(doctor.slug);

            return (
              <button
                key={doctor.slug}
                type="button"
                onClick={() => onPickDoctor(doctor.slug)}
                className={`snap-start shrink-0 md:w-full text-left flex items-center gap-3 p-3 rounded-xl transition-colors ${
                  active ? "bg-brand-primary-dark text-white" : "bg-brand-surface hover:bg-brand-sub-surface"
                }`}
              >
                <DoctorPortrait slug={doctor.slug} shape="circle" className="w-10 h-10 rounded-full shrink-0" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold text-sm truncate ${active ? "text-white" : "text-brand-text"}`}>
                      {doctor.name} 원장
                    </span>
                    {isRecommended && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                          active ? "bg-white/20 text-white" : "bg-brand-accent/15 text-brand-accent"
                        }`}
                      >
                        추천
                      </span>
                    )}
                  </div>
                  <p className={`text-xs truncate ${active ? "text-white/80" : "text-brand-text-muted"}`}>
                    {doctor.specialties.join(" · ")}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Calendar */}
        <div className="min-w-0 bg-brand-surface rounded-2xl p-4 md:p-6 relative">
          {!doctorSlug && (
            <div className="absolute inset-0 bg-brand-surface/80 backdrop-blur-[1px] rounded-2xl z-10 flex items-center justify-center text-center px-6">
              <p className="text-brand-text-sub text-sm">
                왼쪽에서 선생님을 먼저 선택해주세요
              </p>
            </div>
          )}

          <div className="sticky top-16 md:static z-30 bg-brand-surface md:bg-transparent -mx-4 md:mx-0 px-4 md:px-0 pb-3 md:pb-4 flex items-center justify-between">
            <button
              type="button"
              disabled={weekOffset <= minWeekOffset}
              onClick={() => setWeekOffset((w) => Math.max(minWeekOffset, w - 1))}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-brand-sub-surface disabled:opacity-30 disabled:hover:bg-transparent"
              aria-label="이전 주"
            >
              <ChevronLeft size={18} strokeWidth={1.8} />
            </button>
            <p className="text-sm font-medium text-brand-primary-dark">
              {formatMonthDay(days[0])} – {formatMonthDay(days[5])}
            </p>
            <button
              type="button"
              disabled={weekOffset >= maxWeekOffset}
              onClick={() => setWeekOffset((w) => Math.min(maxWeekOffset, w + 1))}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-brand-sub-surface disabled:opacity-30 disabled:hover:bg-transparent"
              aria-label="다음 주"
            >
              <ChevronRight size={18} strokeWidth={1.8} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[560px]">
              <div className="grid grid-cols-[60px_repeat(6,1fr)] gap-1 mb-1">
                <div />
                {days.map((d) => (
                  <div key={d.toISOString()} className="text-center text-xs text-brand-text-sub py-1">
                    {formatDayLabel(d)}
                  </div>
                ))}
              </div>

              {TIME_SLOTS.map((time) => (
                <div key={time} className="grid grid-cols-[60px_repeat(6,1fr)] gap-1 mb-1">
                  <div className="text-xs text-brand-text-muted flex items-center justify-end pr-2">
                    {time}
                  </div>
                  {days.map((date) => {
                    const status = doctorSlug ? slotStatus(doctorSlug, date, time) : "off";
                    const isPending =
                      pendingSlot &&
                      toDateStr(pendingSlot.date) === toDateStr(date) &&
                      pendingSlot.time === time;

                    if (isPending) {
                      return (
                        <div
                          key={time + date.toISOString()}
                          className="relative rounded-md h-10 md:h-11 min-w-[3rem] flex items-center justify-center text-xs bg-brand-primary-dark text-white"
                        >
                          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-brand-accent" />
                          {time}
                        </div>
                      );
                    }

                    if (status === "off") {
                      return (
                        <div
                          key={time + date.toISOString()}
                          className="rounded-md h-10 md:h-11 min-w-[3rem] bg-transparent border border-slate-200 text-brand-text-muted text-xs flex items-center justify-center"
                        >
                          휴진
                        </div>
                      );
                    }

                    if (status !== "available") {
                      return (
                        <div
                          key={time + date.toISOString()}
                          className="rounded-md h-10 md:h-11 min-w-[3rem] flex items-center justify-center text-xs text-brand-text-muted line-through opacity-40 cursor-not-allowed"
                        >
                          {time}
                        </div>
                      );
                    }

                    return (
                      <button
                        key={time + date.toISOString()}
                        type="button"
                        onClick={() => handleSlotClick(date, time)}
                        className="rounded-md h-10 md:h-11 min-w-[3rem] flex items-center justify-center text-xs bg-brand-sub-surface hover:bg-brand-primary hover:text-white transition-colors text-brand-text"
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedDoctor && pendingSlot && (
        <div className="fixed md:static bottom-0 left-0 right-0 z-20 bg-brand-surface shadow-xl p-4 md:static md:mt-6 md:shadow-none md:rounded-xl md:bg-brand-sub-surface flex items-center justify-between gap-4">
          <p className="text-sm text-brand-text">
            {selectedDoctor.name} 선생님과 {formatFullDate(pendingSlot.date)} {formatTimeKo(pendingSlot.time)} 예약
          </p>
          <button
            type="button"
            onClick={advanceNow}
            className="shrink-0 bg-brand-primary-dark hover:bg-brand-text text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            다음 단계로
          </button>
        </div>
      )}
    </div>
  );
}
