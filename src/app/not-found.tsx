"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-patterns";
import { cn } from "@/lib/utils";
import { Home, Heart, Stethoscope } from "lucide-react";

export default function NotFound() {
  return (
    <section
      aria-labelledby="nf-title"
      className="relative isolate min-h-[100svh] bg-white text-slate-900 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <GridPattern
          width={32}
          height={32}
          x={0}
          y={0}
          className={cn(
            "stroke-slate-200 opacity-35",
            "inset-0 h-full -skew-y-2",
            "[mask-image:radial-gradient(800px_800px_at_center,white_35%,transparent_85%)]"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      {/* Centered content */}
      <div className="mx-auto grid min-h-[100svh] max-w-7xl place-items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center">
          {/* Big code */}
          <div className="mb-3 text-6xl font-extrabold tracking-tighter text-slate-900">
            404
          </div>

          <h1 id="nf-title" className="text-2xl md:text-3xl font-semibold">
            We can’t find that page
          </h1>

          <p className="mt-3 text-sm md:text-base text-slate-600">
            The link may be broken or the page may have moved. Meanwhile, you can
            continue supporting compassionate healthcare across Rwanda.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="w-full sm:w-auto gap-2 bg-yellow-500 text-slate-900 hover:bg-yellow-600 transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:hover:-translate-y-1"
            >
              <Link href="/"><Home className="h-4 w-4" /> Go home</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto gap-2 border-slate-300 text-slate-800 hover:bg-slate-100 transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:hover:-translate-y-1"
            >
              <Link href="/programs"><Stethoscope className="h-4 w-4" /> Explore programs</Link>
            </Button>

          </div>

          <p className="mt-4 text-xs text-slate-500">
            Sainte Theresa Foundation · 2013 — Present
          </p>
        </div>
      </div>
    </section>
  );
}
