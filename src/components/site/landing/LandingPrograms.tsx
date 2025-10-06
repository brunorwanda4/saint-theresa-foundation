"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Mobile Health Clinics",
    description:
      "Delivering essential healthcare directly to rural and underserved communities through mobile clinics.",
    image: "/images/mobile-clinic.jpg",
  },
  {
    id: 2,
    title: "Community Pharmacies",
    description:
      "Creating access to affordable, reliable medicine through locally managed pharmacies.",
    image: "/images/community-pharmacy.jpg",
  },
  {
    id: 3,
    title: "Digital Health Platform",
    description:
      "Connecting patients and doctors via telehealth, reducing travel time and improving accessibility.",
    image: "/images/digital-health.jpg",
  },
  {
    id: 4,
    title: "Youth Empowerment",
    description:
      "Training the next generation of healthcare leaders and community volunteers.",
    image: "/images/training.jpg",
  },
  {
    id: 5,
    title: "Public Health Education",
    description:
      "Raising awareness about nutrition, hygiene, and preventive healthcare practices.",
    image: "/images/public-health.jpeg",
  },
];

export default function LandingPrograms() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Duplicate slides for seamless infinite scroll illusion
  const extendedSlides = [...slides, ...slides];

  return (
    <section className="relative mx-auto mt-10 flex max-w-7xl justify-center overflow-hidden py-12">
      <motion.div
        className="flex"
        animate={{
          x: `-${index * 25}%`, // move 25% per step (since each visible portion = 25vw)
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        style={{
          width: `${extendedSlides.length * 25}%`, // each item takes 25% of total width
        }}
      >
        {extendedSlides.map((slide, i) => {
          // Determine which is center
          const relativeIndex = (i - index + slides.length) % slides.length;
          const isCenter = relativeIndex === 0;

          const width = isCenter ? "50vw" : "25vw";
          const scale = isCenter ? 1 : 0.9;
          const opacity = isCenter ? 1 : 0.7;

          return (
            <motion.div
              key={`${slide.id}-${i}`}
              className="relative flex-shrink-0 overflow-hidden"
              style={{
                width,
                scale,
                opacity,
                transition: "all 0.8s ease-in-out",
              }}
            >
              <div className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <h2 className="text-2xl font-semibold">{slide.title}</h2>
                  {isCenter && (
                    <p className="mt-2 text-sm opacity-90">
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
