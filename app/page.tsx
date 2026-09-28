import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Concerns from "./components/Concerns";
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import ReservationCta from "./components/ReservationCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Philosophy />
        <Concerns />
        <Doctors />
        <Services />
        <Process />
        <Gallery />
        <Schedule />
        <Location />
        <ReservationCta />
      </main>

      <Footer />
    </>
  );
}
