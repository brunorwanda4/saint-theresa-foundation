"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-patterns";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[80vh] bg-slate-950 text-white overflow-hidden"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <GridPattern
          width={28}
          height={28}
          x={-1}
          y={-1}
          className={cn(
            "stroke-white/10 opacity-60",
            "inset-x-0 inset-y-[-30%] h-[200%] -skew-y-6",
            "[mask-image:radial-gradient(520px_circle_at_center,white,transparent)]"
          )}
        />
        {/* Soft vignette / gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-slate-950/90" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="min-h-[50vh] grid place-items-center">
          <div className="max-w-3xl text-center">
            <p className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
              Faith-driven access to healthcare
            </p>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Bringing compassionate care closer to the most vulnerable
            </h1>

            <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed">
              An initiative of Sainte Thérèse Polyclinic to expand access through
              mobile clinics, affordable community pharmacies, digital health, and
              public health education.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-white/70 text-white hover:bg-white hover:text-slate-900"
              >
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>

            <p className="mt-4 text-xs text-white/60">
              Sainte Thérèse Foundation · 2013 — Present
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
