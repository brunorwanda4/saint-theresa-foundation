"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  const titles = useMemo(
    () => ["Mobile Clinics", "Community Pharmacies", "Digital Health", "Health Education"],
    []
  );
  const [titleIndex, setTitleIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setTitleIndex((i) => (i + 1) % titles.length), 2000);
    return () => clearInterval(id);
  }, []);

  const PHONE = "+250796105514";

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-screen bg-white overflow-hidden"
    >
      {/* Background image with darker overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/assets/images/nurse.jpg"
          alt="Healthcare background with medical equipment and caring hands"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Darker overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid min-h-[100svh] place-items-center">
        <div className="max-w-3xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
            Faith-driven healthcare • Rwanda
          </span>

          {/* Title (smaller) with rotating focus */}
          <h1 id="hero-heading" className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Expanding{" "}
            <span className="relative inline-flex w-full justify-center overflow-hidden text-center align-baseline md:pb-2 md:pt-0.5">
              &nbsp;
              {titles.map((title, i) => (
                <motion.span
                  key={i}
                  className="absolute font-bold"
                  initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                  animate={
                    titleIndex === i ? { y: 0, opacity: 1 } : { y: titleIndex > i ? -140 : 140, opacity: 0 }
                  }
                  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 70, damping: 16 }}
                  aria-hidden={titleIndex !== i}
                >
                  {title}
                </motion.span>
              ))}
              <span className="sr-only" aria-live="polite">
                {titles[titleIndex]}
              </span>
            </span>{" "}
            across Rwanda
          </h1>

          <p className="mt-3 text-white md:text-lg leading-relaxed">
            Sainte Theresa Foundation brings compassionate care closer—through mobile clinics,
            affordable medicines, digital consultations, and community health education.
          </p>

          {/* Actions (rise-on-hover) */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto gap-3 bg-yellow-500 text-slate-900 hover:bg-yellow-600 transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:hover:-translate-y-1"
            >
              <Link href="/contact">
                Get in touch <MoveRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-3 border-slate-300 text-black hover:bg-slate-100 transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:hover:-translate-y-1"
            >
              <a href={`tel:${PHONE}`} aria-label={`Call us at ${PHONE}`}>
                Call Us <PhoneCall className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-slate-300">Sainte Theresa Foundation · 2013 — Present</p>
        </div>
      </div>
    </section>
  );
}