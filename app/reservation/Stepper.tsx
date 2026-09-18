const STEPS = [
  { index: 1, label: "진료" },
  { index: 2, label: "일정" },
  { index: 3, label: "확인" },
];

export default function Stepper({
  current,
  onJump,
}: {
  current: 1 | 2 | 3;
  onJump: (step: 1 | 2) => void;
}) {
  return (
    <ol className="flex items-start max-w-sm mx-auto mb-14 md:mb-16">
      {STEPS.map((step, i) => {
        const completed = step.index < current;
        const isCurrent = step.index === current;
        const clickable = completed;

        return (
          <li key={step.index} className="flex-1 flex flex-col items-center">
            <div className="flex items-center w-full">
              <div className="flex-1">
                {i > 0 && (
                  <div
                    className={`h-px w-full ${
                      step.index - 1 < current ? "bg-brand-primary-dark" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
              <button
                type="button"
                disabled={!clickable}
                onClick={() => clickable && onJump(step.index as 1 | 2)}
                aria-current={isCurrent ? "step" : undefined}
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  completed || isCurrent
                    ? "bg-brand-primary-dark text-white"
                    : "border border-slate-200 text-brand-text-muted"
                } ${clickable ? "cursor-pointer hover:bg-brand-text" : "cursor-default"}`}
              >
                {step.index}
              </button>
              <div className="flex-1">
                {i < STEPS.length - 1 && (
                  <div
                    className={`h-px w-full ${
                      step.index < current ? "bg-brand-primary-dark" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            </div>
            <span
              className={`mt-2 text-xs ${
                isCurrent ? "text-brand-primary-dark font-medium" : "text-brand-text-muted"
              }`}
            >
              {step.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
