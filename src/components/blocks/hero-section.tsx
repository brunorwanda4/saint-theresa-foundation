"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const reduce = useReducedMotion();
  const [pageReady, setPageReady] = useState(false);
  const [imgReady, setImgReady] = useState(false);

  // Fire when the whole page (including images/fonts) is loaded
  useEffect(() => {
    const markReady = () => setPageReady(true);
    if (document.readyState === "complete") {
      markReady();
    } else {
      window.addEventListener("load", markReady, { once: true });
      return () => window.removeEventListener("load", markReady);
    }
  }, []);

  const ready = pageReady && imgReady;

  return (
    <section
      aria-label="Sainte Thérèse Foundation hero"
      className="relative isolate min-h-screen"
    >
      {/* Background (always present under the preloader) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          // Run a tiny de-zoom only after we're ready (so it won't stutter behind the preloader)
          initial={{ scale: 1 }}
          animate={ready && !reduce ? { scale: 1 } : { scale: 1 }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/assets/images/image-1.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transform-gpu"
            onLoadingComplete={() => setImgReady(true)}
          />
        </motion.div>
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      {/* Preloader overlay: blocks view until fully ready */}
      {!ready && (
        <div className="absolute inset-0 z-50 bg-slate-950 flex items-center justify-center">
          <div className="text-white/80 text-xs tracking-wider animate-pulse">
            Loading…
          </div>
        </div>
      )}

      {/* Content (render only when ready, then animate in) */}
      {ready && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="min-h-[70vh] md:min-h-[75vh] grid place-items-center">
            <div className="max-w-3xl text-center">
              {/* Eyebrow */}
              <motion.p
                initial={reduce ? false : { y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.28, ease: "easeOut", delay: 0.02 }}
                className="mb-3 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur"
              >
                Faith-driven access to healthcare
              </motion.p>

              {/* Title */}
              <motion.h1
                initial={reduce ? false : { y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.32, ease: "easeOut", delay: 0.06 }}
                className="text-3xl md:text-4xl font-bold tracking-tight text-white"
              >
                Bringing compassionate care closer to the most vulnerable
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={reduce ? false : { y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                className="mt-3 text-sm md:text-base text-gray-200/90 leading-relaxed"
              >
                An initiative of Sainte Thérèse Polyclinic to expand access through
                mobile clinics, affordable community pharmacies, digital health, and
                public health education.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={reduce ? false : { y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.26, ease: "easeOut", delay: 0.14 }}
                className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <motion.div whileHover={reduce ? {} : { y: -2, scale: 1.01 }} transition={{ duration: 0.15 }}>
                  <Button
                    asChild
                    className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-semibold"
                  >
                    <Link href="/donate">Support Our Work</Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={reduce ? {} : { y: -2, scale: 1.01 }} transition={{ duration: 0.15 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto border-white/70 text-black hover:bg-white hover:text-slate-900"
                  >
                    <Link href="/programs">Explore Programs</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Fine print */}
              <motion.p
                initial={reduce ? false : { y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.22, ease: "easeOut", delay: 0.18 }}
                className="mt-4 text-xs text-white/60"
              >
                Sainte Thérèse Foundation · 2013 — Present
              </motion.p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
