import type { Metadata } from "next";
import { Info } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { priceCategories, prices } from "@/data/prices";

export const metadata: Metadata = { title: "비급여수가표" };

export default function PricesPage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <p className="section-eyebrow">커뮤니티</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-brand-text">비급여 진료비용 안내</h1>
          <p className="text-brand-text-sub mt-3">
            산뜻치과의 비급여 진료 항목과 비용을 안내드립니다. 실제 비용은 환자분의 구강 상태와 치료
            계획에 따라 달라질 수 있습니다.
          </p>

          <div className="mt-6 bg-brand-sub-surface rounded-lg p-4 border-l-4 border-brand-accent flex items-start gap-3">
            <Info size={16} className="text-brand-accent shrink-0 mt-0.5" />
            <p className="text-sm text-brand-text-sub">
              본 비용은 보건복지부 고시에 따라 공개되는 비급여 진료비용입니다. 자세한 비용은 상담 시
              재확인해주세요.
            </p>
          </div>

          {priceCategories.map((category) => {
            const items = prices.filter((p) => p.category === category.key);
            if (items.length === 0) return null;

            return (
              <section key={category.key} className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-brand-accent" />
                  <h2 className="text-xl font-semibold text-brand-primary-dark">{category.label}</h2>
                </div>

                <div className="bg-brand-surface rounded-2xl overflow-hidden">
                  <div className="md:hidden">
                    {items.map((item) => (
                      <div key={item.treatment} className="border-t border-slate-100 first:border-t-0 px-6 py-4">
                        <div className="text-brand-text font-medium">{item.treatment}</div>
                        {item.detail && (
                          <div className="text-xs text-brand-text-muted mt-1">{item.detail}</div>
                        )}
                        <div className="mt-2 flex items-baseline gap-1">
                          <span className="text-brand-primary-dark font-semibold">{item.priceKRW}원</span>
                          {item.unit && <span className="text-xs text-brand-text-muted">/ {item.unit}</span>}
                        </div>
                      </div>
                    ))}
                  </div>

                  <table className="hidden md:table w-full">
                    <thead className="bg-brand-sub-surface">
                      <tr>
                        <th className="text-left text-xs font-medium text-brand-text-sub px-6 py-3">항목</th>
                        <th className="text-right text-xs font-medium text-brand-text-sub px-6 py-3 w-48 md:w-64">
                          비용 (원)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.treatment} className="border-t border-slate-100">
                          <td className="px-6 py-4">
                            <div className="text-brand-text font-medium">{item.treatment}</div>
                            {item.detail && (
                              <div className="text-xs text-brand-text-muted mt-1">{item.detail}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className="text-brand-primary-dark font-semibold">{item.priceKRW}</span>
                            {item.unit && (
                              <span className="text-xs text-brand-text-muted ml-1">/ {item.unit}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          })}

          <div className="text-xs text-brand-text-muted mt-12 space-y-1">
            <p>상기 비급여 진료비용은 병원 사정에 따라 변경될 수 있으며, 정확한 비용은 진료 상담 시 안내드립니다.</p>
            <p>비급여 진료는 건강보험 급여 대상에서 제외되어 진료비 전액을 환자가 부담합니다.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
