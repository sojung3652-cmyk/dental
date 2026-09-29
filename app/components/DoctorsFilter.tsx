"use client";

import { useState } from "react";
import type { Doctor } from "@/data/doctors";
import DoctorsGrid from "./DoctorsGrid";

const FILTER_CHIPS = ["전체", "임플란트", "교정", "소아치과", "구강외과", "보존치과"];

export default function DoctorsFilter({ doctors }: { doctors: Doctor[] }) {
  const [filter, setFilter] = useState("전체");

  const filtered =
    filter === "전체" ? doctors : doctors.filter((d) => d.specialties.includes(filter));

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto snap-x pb-2 md:flex-wrap md:overflow-visible">
        {FILTER_CHIPS.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => setFilter(chip)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap snap-start ${
              filter === chip
                ? "bg-brand-primary-dark text-white"
                : "bg-brand-sub-surface text-brand-text-sub hover:bg-slate-200"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {filtered.length > 0 ? (
          <DoctorsGrid
            doctors={filtered}
            className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
          />
        ) : (
          <p className="text-center text-brand-text-muted py-16">해당 진료 분야의 원장님이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
