"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import DoctorPortrait from "../components/DoctorPortrait";
import {
  SERVICE_DOCTOR_MATCH,
  TIME_SLOTS,
  addWeeks,
  formatDayLabel,
  formatFullDate,
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

  const initialWeekOffset = useMemo(() => {
    if (!initialSlot) return 0;
    const [datePart] = initialSlot.split("T");
    const d = new Date(datePart);
    if (Number.isNaN(d.getTime())) return 0;
    const diffDays = Math.round((mondayOf(d).getTime() - currentMonday.getTime()) / 86400000);
    return Math.max(0, Math.round(diffDays / 7));
  }, [initialSlot, currentMonday]);

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
    const iso = `${toDateStr(date)}T${time}`;
    window.setTimeout(() => onPickSlot(doctorSlug, iso), 350);
  }

  return (
    <div>
      <p className="text-sm font-medium text-brand-accent mb-2 text-center">편하신 시간으로</p>
      <h1 className="headline-tight text-3xl md:text-4xl font-light text-brand-text text-center mb-12">
        언제, 어느 <span className="font-semibold">선생님과 함께할까요</span>?
      </h1>

      <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
        {/* Doctor picker */}
        <div className="space-y-2">
          {doctors.map((doctor) => {
            const active = doctor.slug === doctorSlug;
            const isRecommended = recommended.includes(doctor.slug);

            return (
              <button
                key={doctor.slug}
                type="button"
                onClick={() => onPickDoctor(doctor.slug)}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                  active
                    ? "border-brand-primary-dark bg-brand-sub-surface"
                    : "border-slate-200 hover:bg-brand-sub-surface"
                }`}
              >
                <DoctorPortrait slug={doctor.slug} shape="circle" className="w-10 h-10 rounded-full shrink-0" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-brand-text text-sm truncate">
                      {doctor.name} 원장님
                    </span>
                    {isRecommended && (
                      <span className="text-[11px] text-brand-accent border border-brand-accent/40 rounded-full px-1.5 py-0.5 shrink-0">
                        추천
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {doctor.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="text-[11px] text-brand-text-sub bg-white border border-slate-200 rounded-full px-2 py-0.5"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Calendar */}
        <div className="bg-brand-surface rounded-2xl p-4 md:p-6 relative">
          {!doctorSlug && (
            <div className="absolute inset-0 bg-brand-surface/80 backdrop-blur-[1px] rounded-2xl z-10 flex items-center justify-center text-center px-6">
              <p className="text-brand-text-sub text-sm">
                왼쪽에서 선생님을 먼저 선택해주세요
              </p>
            </div>
          )}

          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              disabled={weekOffset === 0}
              onClick={() => setWeekOffset((w) => Math.max(0, w - 1))}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-brand-sub-surface disabled:opacity-30 disabled:hover:bg-transparent"
              aria-label="이전 주"
            >
              <ChevronLeft size={18} strokeWidth={1.8} />
            </button>
            <p className="text-sm font-medium text-brand-primary-dark">
              {formatDayLabel(days[0])} – {formatDayLabel(days[5])}
            </p>
            <button
              type="button"
              onClick={() => setWeekOffset((w) => w + 1)}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-brand-sub-surface"
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
                    const status = doctorSlug ? slotStatus(doctorSlug, date, time) : "unavailable";
                    const isPending =
                      pendingSlot &&
                      toDateStr(pendingSlot.date) === toDateStr(date) &&
                      pendingSlot.time === time;

                    if (isPending) {
                      return (
                        <div
                          key={time + date.toISOString()}
                          className="relative rounded-md h-9 flex items-center justify-center text-xs bg-brand-primary-dark text-white"
                        >
                          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-brand-accent" />
                          {time}
                        </div>
                      );
                    }

                    if (status !== "available") {
                      return (
                        <div
                          key={time + date.toISOString()}
                          className="rounded-md h-9 flex items-center justify-center text-xs text-brand-text-muted line-through"
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
                        className="rounded-md h-9 flex items-center justify-center text-xs bg-brand-sub-surface hover:bg-brand-primary hover:text-white transition-colors"
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

      {selectedDoctor && (
        <div className="fixed md:static bottom-0 left-0 right-0 md:mt-8 bg-brand-primary-dark md:bg-brand-sub-surface text-white md:text-brand-text p-4 md:p-4 md:rounded-xl md:max-w-md md:mx-auto text-center z-20 shadow-lg md:shadow-none">
          <p className="text-sm">
            {selectedDoctor.name} 원장님 ·{" "}
            {pendingSlot
              ? `${formatFullDate(pendingSlot.date)} ${formatTimeKo(pendingSlot.time)}`
              : "시간을 선택해주세요"}
          </p>
        </div>
      )}
    </div>
  );
}
