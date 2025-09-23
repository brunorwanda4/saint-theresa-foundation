"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      aria-label="Sainte Thérèse Foundation hero"
      className="relative isolate min-h-screen"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/image-1.jpeg" // replace with your own asset
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="min-h-[70vh] md:min-h-[75vh] grid place-items-center">
          <div className="max-w-3xl text-center">
            {/* Eyebrow */}
            <p className="mb-3 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
              Faith-driven access to healthcare
            </p>

            {/* Title (smaller & tighter) */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Bringing compassionate care closer to the most vulnerable
            </h1>

            {/* Subtitle (smaller) */}
            <p className="mt-3 text-sm md:text-base text-gray-200/90 leading-relaxed">
              An initiative of Sainte Thérèse Polyclinic to expand access through
              mobile clinics, affordable community pharmacies, digital health, and
              public health education.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-semibold"
              >
                <Link href="/donate">Support Our Work</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-white/70 text-black hover:bg-white hover:text-slate-900"
              >
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>

            {/* Fine print */}
            <p className="mt-4 text-xs text-white/60">
              Sainte Thérèse Foundation · 2013 — Present
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
