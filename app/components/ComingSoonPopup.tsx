import { Clock } from "lucide-react";

export default function ComingSoonPopup({
  titleId,
  message,
  onConfirm,
}: {
  titleId: string;
  message: string;
  onConfirm: () => void;
}) {
  return (
    <div>
      <div className="w-14 h-14 rounded-full bg-brand-sub-surface flex items-center justify-center mx-auto">
        <Clock size={24} strokeWidth={1.8} className="text-brand-primary-dark" />
      </div>

      <h2 id={titleId} className="mt-4 text-center text-lg font-semibold text-brand-primary-dark">
        준비 중입니다
      </h2>
      <p className="mt-3 text-center text-sm text-brand-text-sub body-relaxed whitespace-pre-line">
        {message}
      </p>

      <button
        type="button"
        onClick={onConfirm}
        className="mt-6 w-full bg-brand-primary-dark hover:bg-brand-text text-white py-3.5 rounded-lg font-medium transition-colors"
      >
        확인
      </button>
    </div>
  );
}
