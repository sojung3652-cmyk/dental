import Image from "next/image";
import { CLINIC_PHOTOS } from "@/data/clinicPhotos";

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-28">
      <div className="mb-14 md:mb-16 grid md:grid-cols-12 gap-6 items-end">
        <div className="md:col-span-6">
          <p className="section-eyebrow">병원 둘러보기</p>
          <h2 className="headline-tight text-3xl md:text-5xl font-light text-brand-text">
            편안한 공간에서
            <br />
            <span className="font-semibold">진료받으세요</span>.
          </h2>
        </div>
        <p className="md:col-span-6 body-relaxed text-brand-text-sub md:text-lg">
          산뜻치과는 환자분의 편안함을 위해 밝고 정돈된 진료 공간을 유지합니다.
        </p>
      </div>

      <div className="hidden md:grid grid-cols-2 gap-4">
        {CLINIC_PHOTOS.map((photo) => (
          <figure key={photo.src} className="relative aspect-[3/2] rounded-2xl overflow-hidden group">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 80vw, 50vw"
              className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            />
            <figcaption className="absolute bottom-4 left-4 bg-brand-bg/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium text-brand-primary-dark">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
        {CLINIC_PHOTOS.map((photo) => (
          <figure
            key={photo.src}
            className="relative min-w-[80vw] aspect-[3/2] snap-start rounded-2xl overflow-hidden group shrink-0"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 80vw, 50vw"
              className="object-cover object-center"
            />
            <figcaption className="absolute bottom-4 left-4 bg-brand-bg/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium text-brand-primary-dark">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
