"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SERVICES } from "@/data/services";
import { DOCTORS } from "@/data/doctors";
import { formatFullDate, formatTimeKo } from "@/data/reservation";

const detailsSchema = z.object({
  name: z.string().min(2, "이름을 2자 이상 입력해주세요"),
  phone: z
    .string()
    .regex(/^010-\d{4}-\d{4}$/, "010-0000-0000 형식으로 입력해주세요"),
  memo: z.string().max(300, "300자 이내로 입력해주세요").optional(),
  consent: z.literal(true, {
    error: "개인정보 수집·이용에 동의해주세요",
  }),
});

export type ReservationDetails = z.infer<typeof detailsSchema>;

export default function StepDetails({
  serviceSlug,
  doctorSlug,
  isoSlot,
  onEditService,
  onEditSchedule,
  onSubmit,
}: {
  serviceSlug: string;
  doctorSlug: string;
  isoSlot: string;
  onEditService: () => void;
  onEditSchedule: () => void;
  onSubmit: (details: ReservationDetails) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReservationDetails>({
    resolver: zodResolver(detailsSchema),
    defaultValues: { name: "", phone: "", memo: "", consent: undefined },
  });

  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const doctor = DOCTORS.find((d) => d.slug === doctorSlug);
  const [datePart, time] = isoSlot.split("T");
  const slotDate = new Date(datePart);

  return (
    <div>
      <p className="text-sm font-medium text-brand-accent mb-2 text-center">마지막 한 단계만</p>
      <h1 className="headline-tight text-3xl md:text-4xl font-light text-brand-text text-center mb-12">
        거의 다 <span className="font-semibold">왔어요</span>
      </h1>

      <div className="grid md:grid-cols-[1fr_320px] gap-8 max-w-3xl mx-auto items-start">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-brand-surface rounded-2xl p-6 md:p-8 space-y-5 order-2 md:order-1"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-1.5">
              이름
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-primary"
              placeholder="홍길동"
            />
            {errors.name && (
              <p className="text-xs text-brand-accent mt-1.5">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-1.5">
              휴대폰
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-primary"
              placeholder="010-0000-0000"
            />
            {errors.phone && (
              <p className="text-xs text-brand-accent mt-1.5">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="memo" className="block text-sm font-medium text-brand-text mb-1.5">
              메모 <span className="text-brand-text-muted font-normal">(선택)</span>
            </label>
            <textarea
              id="memo"
              rows={3}
              maxLength={300}
              {...register("memo")}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-primary resize-none"
              placeholder="궁금하신 점이나 말씀하실 게 있다면 편하게 적어주세요"
            />
            {errors.memo && (
              <p className="text-xs text-brand-accent mt-1.5">{errors.memo.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-start gap-2 text-sm text-brand-text-sub">
              <input
                type="checkbox"
                {...register("consent")}
                className="mt-0.5 w-4 h-4 rounded border-slate-300 text-brand-primary-dark focus:ring-brand-primary"
              />
              개인정보 수집·이용에 동의합니다
            </label>
            {errors.consent && (
              <p className="text-xs text-brand-accent mt-1.5">{errors.consent.message}</p>
            )}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-brand-primary-dark hover:bg-brand-text text-white px-8 py-3.5 rounded-lg font-medium transition-colors disabled:opacity-60"
            >
              예약 확정하기
            </button>
          </div>
        </form>

        <div className="bg-brand-sub-surface rounded-2xl p-6 space-y-4 order-1 md:order-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs text-brand-text-muted mb-0.5">진료</p>
              <p className="text-sm font-medium text-brand-text">{service?.title}</p>
            </div>
            <button
              type="button"
              onClick={onEditService}
              className="text-xs text-brand-primary-dark hover:text-brand-text underline underline-offset-2 shrink-0"
            >
              수정
            </button>
          </div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs text-brand-text-muted mb-0.5">원장</p>
              <p className="text-sm font-medium text-brand-text">{doctor?.name}</p>
            </div>
            <button
              type="button"
              onClick={onEditSchedule}
              className="text-xs text-brand-primary-dark hover:text-brand-text underline underline-offset-2 shrink-0"
            >
              수정
            </button>
          </div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs text-brand-text-muted mb-0.5">일시</p>
              <p className="text-sm font-medium text-brand-text">
                {formatFullDate(slotDate)} {formatTimeKo(time)}
              </p>
            </div>
            <button
              type="button"
              onClick={onEditSchedule}
              className="text-xs text-brand-primary-dark hover:text-brand-text underline underline-offset-2 shrink-0"
            >
              수정
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
