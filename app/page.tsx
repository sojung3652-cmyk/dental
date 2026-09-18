import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Concerns from "./components/Concerns";
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import Process from "./components/Process";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import ReservationCta from "./components/ReservationCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brand-primary-dark focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        메인 콘텐츠로 건너뛰기
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Philosophy />
        <Concerns />
        <Doctors />
        <Services />
        <Process />
        <Schedule />
        <Location />
        <ReservationCta />
      </main>

      <Footer />
    </>
  );
}
