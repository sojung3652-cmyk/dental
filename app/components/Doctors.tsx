import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import DoctorGrid from "./DoctorGrid";

export default function Doctors() {
  return (
    <section id="doctors" className="bg-brand-sub-surface py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-14 md:mb-16 grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-6">
            <p className="section-eyebrow">의료진 소개</p>
            <h2 className="headline-tight text-3xl md:text-5xl font-light text-brand-text">
              다섯 명의 원장,
              <br />
              <span className="font-semibold">각자의 전문 분야</span>로.
            </h2>
          </div>
          <p className="md:col-span-6 body-relaxed text-brand-text-sub md:text-lg">
            진료마다 담당 원장이 정해져 있어, 처음 뵙는 분부터 정기 방문하시는 분까지 같은
            손길로 진료받으실 수 있습니다.
          </p>
        </div>

        <DoctorGrid
          doctors={doctors}
          trailing={
            <Link
              href="/doctors"
              className="rounded-2xl border border-dashed border-slate-300 hover:border-brand-primary hover:bg-brand-surface p-6 flex flex-col justify-center items-start transition-colors"
            >
              <span className="text-sm text-brand-text-sub mb-2">전체 프로필</span>
              <span className="text-lg font-semibold text-brand-primary-dark">
                의료진 자세히 보기
              </span>
              <span className="mt-6 text-brand-accent">
                <ArrowRight size={28} strokeWidth={1.4} />
              </span>
            </Link>
          }
        />
      </div>
    </section>
  );
}
