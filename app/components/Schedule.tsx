import { DOCTOR_SCHEDULE, SCHEDULE_DAYS, SLOT_CLASS, SLOT_LABEL } from "@/data/schedule";

export default function Schedule() {
  return (
    <section id="schedule" className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-28">
      <div className="mb-12 md:mb-14 grid md:grid-cols-12 gap-6 items-end">
        <div className="md:col-span-7">
          <p className="section-eyebrow">진료 시간표</p>
          <h2 className="headline-tight text-3xl md:text-5xl font-light text-brand-text">
            원장별 진료 요일을
            <br />
            <span className="font-semibold">한눈에</span>.
          </h2>
        </div>
        <p className="md:col-span-5 body-relaxed text-brand-text-sub">
          이번 주 새 예약이 열린 시간대는{" "}
          <span className="inline-block w-2 h-2 rounded-full bg-brand-accent align-middle mx-1"></span>
          표시로 안내드립니다.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-6 text-xs text-brand-text-sub">
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 rounded slot-am"></span> 오전
        </span>
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 rounded slot-pm"></span> 오후
        </span>
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 rounded slot-full"></span> 종일
        </span>
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 rounded slot-off"></span> 휴진
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-accent"></span> 새 예약 가능
        </span>
      </div>

      <div className="bg-brand-surface rounded-2xl p-4 md:p-6 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="text-brand-text-sub">
              <th className="text-left font-medium py-3 pr-4 w-32">원장</th>
              {SCHEDULE_DAYS.map((day) => (
                <th key={day} className="font-medium py-3 px-2">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="align-middle">
            {DOCTOR_SCHEDULE.map((doctor) => (
              <tr key={doctor.name}>
                <td className="py-2 pr-4 font-medium text-brand-primary-dark">{doctor.name}</td>
                {doctor.slots.map((slot, i) => {
                  const dayLabel =
                    slot === "off"
                      ? `${doctor.name} · ${SCHEDULE_DAYS[i]}요일 휴진`
                      : `${doctor.name} · ${SCHEDULE_DAYS[i]}요일 ${SLOT_LABEL[slot]} 진료`;
                  return (
                    <td key={i} className="p-1">
                      <div
                        role="img"
                        aria-label={dayLabel}
                        title={dayLabel}
                        className={`${SLOT_CLASS[slot]} ${
                          i === doctor.highlight && slot !== "off" ? "slot-highlight" : ""
                        } rounded-lg h-11 flex items-center justify-center text-xs`}
                      >
                        {SLOT_LABEL[slot]}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-brand-text-muted">
        점심시간 13:00–14:00. 진료 시간은 사정에 따라 변경될 수 있으며, 방문 전 예약을
        권장드립니다.
      </p>
    </section>
  );
}
