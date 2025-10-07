"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function PressBioPage() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const pressReleasesRef = useRef<(HTMLDivElement | null)[]>([]);

  const releases = [
    { title: "Launch of Mobile Clinics Phase II", date: "July 2025" },
    { title: "Partnership with Diocesan Health Services", date: "May 2025" },
    {
      title: "Training Program for Digital Health Volunteers",
      date: "March 2025",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline
      const tl = gsap.timeline();

      // Header animations
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: -40 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.5",
        );
      }

      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
      }

      // Press releases with typewriter effect simulation
      const validPressReleases = pressReleasesRef.current.filter(
        Boolean,
      ) as HTMLDivElement[];
      if (validPressReleases.length > 0) {
        tl.fromTo(
          validPressReleases,
          {
            x: -60,
            opacity: 0,
            scale: 0.9,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: {
              amount: 1,
              from: "start",
              ease: "power2.out",
            },
            ease: "power2.out",
          },
        );

        // Add hover animations for each press release
        validPressReleases.forEach((card, index) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              x: 10,
              borderLeftWidth: "6px",
              borderLeftColor: "#3b82f6",
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              x: 0,
              borderLeftWidth: "4px",
              borderLeftColor: "#9ca3af",
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToPressReleasesRefs = (el: HTMLDivElement | null, index: number) => {
    pressReleasesRef.current[index] = el;
  };

  return (
    <section ref={containerRef} className="global-px min-h-screen py-8">
      <div ref={headerRef} className="mb-10 max-w-4xl text-center">
        <h1 ref={headingRef} className="mb-3 text-4xl font-bold">
          Press Releases
        </h1>
        <p ref={paragraphRef} className="text-lg">
          Official communications from the Sainte Thérèse Foundation.
        </p>
      </div>

      <div className="max-w-3xl space-y-6">
        {releases.map((r, i) => (
          <div
            key={r.title}
            ref={(el) => addToPressReleasesRefs(el, i)}
            className="cursor-pointer rounded-lg border-l-4 border-gray-400 bg-white py-4 pl-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <h2 className="mb-2 text-xl font-semibold">{r.title}</h2>
            <p className="text-sm text-gray-500">{r.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
