"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CLINIC_PHOTOS } from "@/data/clinicPhotos";

const HERO_PHOTOS = CLINIC_PHOTOS.map((photo) => ({ src: photo.src, alt: "" }));

const ROTATION_INTERVAL = 6000; // ms per photo
const FADE_DURATION = 1500; // ms cross-fade

export default function HeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return; // stay on first photo, no rotation

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_PHOTOS.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {HERO_PHOTOS.map((photo, idx) => (
        <div
          key={photo.src}
          className="absolute inset-0 transition-opacity ease-in-out"
          style={{
            opacity: idx === activeIndex ? 0.25 : 0,
            transitionDuration: `${FADE_DURATION}ms`,
          }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            priority={idx === 0}
            className="object-cover object-center"
          />
        </div>
      ))}
      {/* Subtle gradient overlay to boost text legibility, bottom-heavy */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-transparent to-brand-bg/60" />
    </div>
  );
}
