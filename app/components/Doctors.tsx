import Link from "next/link";
import { doctors } from "@/data/doctors";
import DoctorsGrid from "./DoctorsGrid";

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
          <div className="md:col-span-6">
            <p className="body-relaxed text-brand-text-sub md:text-lg">
              진료마다 담당 원장이 정해져 있어, 처음 뵙는 분부터 정기 방문하시는 분까지 같은
              손길로 진료받으실 수 있습니다.
            </p>
            <Link
              href="/doctors"
              className="inline-block mt-4 text-sm text-brand-primary-dark hover:text-brand-text underline underline-offset-2"
            >
              전체 프로필 보기
            </Link>
          </div>
        </div>

        <DoctorsGrid doctors={doctors} />
      </div>
    </section>
  );
}
