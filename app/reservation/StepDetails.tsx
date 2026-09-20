"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SERVICES } from "@/data/services";
import { doctors } from "@/data/doctors";
import { formatFullDate, formatPhoneInput, formatTimeKo } from "@/data/reservation";

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

  const phoneField = register("phone");

  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const doctor = doctors.find((d) => d.slug === doctorSlug);
  const [datePart, time] = isoSlot.split("T");
  const slotDate = new Date(datePart);

  return (
    <div>
      <p className="text-sm text-brand-text-muted mb-2 text-center">3단계 · 정보 입력</p>
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
            <label htmlFor="name" className="block text-sm font-medium text-brand-text-sub mb-2">
              이름 <span className="text-brand-accent">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="w-full h-12 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 px-4 text-sm outline-none"
              placeholder="홍길동"
            />
            {errors.name && (
              <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-text-sub mb-2">
              휴대폰 <span className="text-brand-accent">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              {...phoneField}
              onChange={(e) => {
                e.target.value = formatPhoneInput(e.target.value);
                phoneField.onChange(e);
              }}
              className="w-full h-12 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 px-4 text-sm outline-none"
              placeholder="010-0000-0000"
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="memo" className="block text-sm font-medium text-brand-text-sub mb-2">
              메모 <span className="text-brand-text-muted font-normal">(선택)</span>
            </label>
            <textarea
              id="memo"
              rows={3}
              maxLength={300}
              {...register("memo")}
              className="w-full rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 px-4 py-3 text-sm outline-none resize-none"
              placeholder="궁금하신 점이나 요청사항이 있다면 편하게 적어주세요"
            />
            {errors.memo && (
              <p className="text-xs text-red-600 mt-1">{errors.memo.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-start gap-2 text-sm text-brand-text-sub">
              <input
                type="checkbox"
                {...register("consent")}
                className="mt-0.5 w-4 h-4 rounded border-slate-300 text-brand-primary-dark focus:ring-brand-primary"
              />
              개인정보 수집·이용 동의 <span className="text-brand-accent">*</span>
            </label>
            {errors.consent && (
              <p className="text-xs text-red-600 mt-1">{errors.consent.message}</p>
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

        <div className="bg-brand-sub-surface rounded-2xl p-6 space-y-4 order-1 md:order-2 md:sticky md:top-24">
          <h2 className="text-sm font-semibold text-brand-text">예약 정보</h2>
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs text-brand-text-muted mb-0.5">진료 유형</p>
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
              <p className="text-xs text-brand-text-muted mb-0.5">담당 선생님</p>
              <p className="text-sm font-medium text-brand-text">{doctor?.name} 선생님</p>
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
          <p className="text-xs text-brand-text-muted pt-2 border-t border-slate-200">
            선택하신 내용을 확인 후 정보를 입력해주세요
          </p>
        </div>
      </div>
    </div>
  );
}
