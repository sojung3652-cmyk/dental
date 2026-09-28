"use client";

import { useState } from "react";
import Link from "next/link";
import { Pin } from "lucide-react";
import { NOTICE_CATEGORIES, formatNoticeDate, type Notice } from "@/data/notices";

export default function NoticeList({ notices }: { notices: Notice[] }) {
  const [filter, setFilter] = useState<Notice["category"] | "전체">("전체");

  const filtered = notices.filter((n) => filter === "전체" || n.category === filter);
  const pinned = filtered.filter((n) => n.pinned).sort((a, b) => b.date.localeCompare(a.date));
  const rest = filtered.filter((n) => !n.pinned).sort((a, b) => b.date.localeCompare(a.date));
  const ordered = [...pinned, ...rest];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mt-10">
        {(["전체", ...NOTICE_CATEGORIES] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-brand-primary-dark text-white"
                : "bg-brand-sub-surface text-brand-text-sub hover:bg-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-3">
        {ordered.map((notice) => (
          <Link
            key={notice.id}
            href={`/community/notice/${notice.id}`}
            className="bg-brand-surface rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer flex items-start gap-4"
          >
            <span className="text-xs px-2.5 py-1 rounded-full bg-brand-sub-surface text-brand-primary-dark shrink-0">
              {notice.category}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="text-base md:text-lg font-semibold text-brand-text flex items-center gap-1.5">
                {notice.pinned && <Pin size={14} className="text-brand-accent shrink-0" />}
                {notice.title}
              </h3>
              <p className="text-sm text-brand-text-sub mt-1.5 line-clamp-2">{notice.body}</p>
            </div>
            <span className="text-xs text-brand-text-muted shrink-0">{formatNoticeDate(notice.date)}</span>
          </Link>
        ))}

        {ordered.length === 0 && (
          <p className="text-sm text-brand-text-muted text-center py-16">해당 카테고리의 공지사항이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
