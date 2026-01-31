"use client";
import MyImage from "@/components/common/images/MyImage";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const DigitalHealthPage = () => {
  // Create refs for animated elements
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  // Add section to refs array
  const addToSectionRefs = (el: HTMLElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  // Add list item to refs array
  const addToListItemsRef = (el: HTMLLIElement | null, index: number) => {
    listItemsRef.current[index] = el;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create animation timeline
      const tl = gsap.timeline();

      // Animate hero section
      tl.from(heroImageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          heroTitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5",
        )
        // Animate sections with stagger
        .from(
          sectionRefs.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.3",
        )
        // Animate list items with smaller stagger
        .from(
          listItemsRef.current,
          {
            x: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power1.out",
          },
          "-=0.4",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="mx-auto max-w-7xl space-y-16 px-6 py-16 md:px-12"
    >
      <section
        ref={heroImageRef}
        className="relative h-64 overflow-hidden rounded-lg"
      >
        <MyImage
          src="/images/digital-health.jpg"
          alt="Digital Health"
          className="h-full w-full object-cover"
          useSkeleton
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1
            ref={heroTitleRef}
            className="text-3xl font-bold text-white md:text-4xl"
          >
            Digital Health
          </h1>
        </div>
      </section>

      <section ref={(el) => addToSectionRefs(el, 0)} className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Technology for Better Healthcare
        </h2>
        <p className="text-foreground">
          Sainte Thérèse Foundation leverages digital tools to connect patients
          and doctors remotely. Our e-health solutions make consultations,
          follow-ups, and prescriptions accessible even in areas without
          physical clinics.
        </p>
      </section>

      <section ref={(el) => addToSectionRefs(el, 1)} className="space-y-4">
        <h3 className="text-xl font-semibold">Digital Solutions Include</h3>
        <ul className="text-foreground list-inside list-disc space-y-2">
          <li ref={(el) => addToListItemsRef(el, 0)}>
            Telemedicine consultations
          </li>
          <li ref={(el) => addToListItemsRef(el, 1)}>
            Digital health records and follow-up systems
          </li>
          <li ref={(el) => addToListItemsRef(el, 2)}>
            SMS and mobile app health education programs
          </li>
        </ul>
      </section>

      <section ref={(el) => addToSectionRefs(el, 2)}>
        <h3 className="mb-2 text-xl font-semibold">Why It Matters</h3>
        <p className="text-foreground">
          Our digital health initiatives close the gap between rural communities
          and quality healthcare, improving efficiency and continuity of care.
        </p>
      </section>
    </main>
  );
};

export default DigitalHealthPage;
