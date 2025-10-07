"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  { id: 1, src: "/images/hero1.jpg" },
  { id: 2, src: "/images/hero2.jpg" },
  { id: 3, src: "/images/hero3.jpg" },
  { id: 4, src: "/images/hero4.jpg" },
];

export default function HeroCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1); // start from middle
  const total = slides.length;

  // autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = gsap.utils.toArray<HTMLDivElement>(".slide-item");

    // animate active width
    items.forEach((item, i) => {
      const isActive = i === activeIndex;
      const targetWidth = isActive ? "50%" : "25%";
      gsap.to(item, {
        width: targetWidth,
        duration: 1.2,
        ease: "power3.inOut",
      });
    });

    // slide horizontal movement
    gsap.to(container, {
      xPercent: -100 * (activeIndex - 1) * 0.5, // control offset
      duration: 1.2,
      ease: "power3.inOut",
    });
  }, [activeIndex]);

  return (
    <section className="flex w-full justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="flex w-full transition-transform duration-700 ease-out"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className="slide-item relative flex-shrink-0 overflow-hidden"
            style={{
              width: i === activeIndex ? "50%" : "25%",
              height: "70vh",
              transition: "width 0.6s ease",
            }}
          >
            <Image
              src={slide.src}
              alt={`Slide ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
