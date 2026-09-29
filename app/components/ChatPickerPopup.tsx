import { MessageCircle, FileText, Sparkles, ChevronRight, type LucideIcon } from "lucide-react";
import type { ChatChannel } from "./FloatingIcons";

const OPTIONS: {
  channel: ChatChannel;
  icon: LucideIcon;
  iconClassName: string;
  circleClassName: string;
  name: string;
  description: string;
}[] = [
  {
    channel: "kakao",
    icon: MessageCircle,
    iconClassName: "text-[#3C1E1E]",
    circleClassName: "bg-[#FEE500]",
    name: "카카오톡 상담",
    description: "카카오톡 채널로 빠르게 문의하세요",
  },
  {
    channel: "1on1",
    icon: FileText,
    iconClassName: "text-brand-primary-dark",
    circleClassName: "bg-brand-sub-surface",
    name: "1:1 문의",
    description: "자세한 상담 내용을 남겨주세요",
  },
  {
    channel: "ai",
    icon: Sparkles,
    iconClassName: "text-brand-accent",
    circleClassName: "bg-brand-accent/15",
    name: "AI 챗봇 상담",
    description: "24시간 궁금한 점을 물어보세요",
  },
];

export default function ChatPickerPopup({
  titleId,
  onSelect,
}: {
  titleId: string;
  onSelect: (channel: ChatChannel) => void;
}) {
  return (
    <div>
      <div className="w-14 h-14 rounded-full bg-brand-sub-surface flex items-center justify-center mx-auto">
        <MessageCircle size={24} strokeWidth={1.8} className="text-brand-primary-dark" />
      </div>

      <h2 id={titleId} className="mt-4 text-center text-lg font-semibold text-brand-primary-dark">
        상담 방법 선택
      </h2>
      <p className="mt-2 text-center text-sm text-brand-text-sub">편하신 방법으로 상담을 시작하세요.</p>

      <div className="mt-8 space-y-3">
        {OPTIONS.map(({ channel, icon: Icon, iconClassName, circleClassName, name, description }) => (
          <button
            key={channel}
            type="button"
            onClick={() => onSelect(channel)}
            className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-brand-primary hover:bg-brand-sub-surface transition-colors text-left"
          >
            <span className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${circleClassName}`}>
              <Icon size={20} strokeWidth={1.8} className={iconClassName} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-semibold text-brand-text">{name}</span>
              <span className="block text-xs text-brand-text-muted mt-0.5">{description}</span>
            </span>
            <ChevronRight size={18} strokeWidth={1.8} className="text-brand-text-muted shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
}
