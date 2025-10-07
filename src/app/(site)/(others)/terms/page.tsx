"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TermsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const sectionHeadingsRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const sectionParagraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const updatedDateRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Main heading with scroll trigger
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: -40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Introduction paragraph
      if (introRef.current) {
        gsap.fromTo(
          introRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Section headings with scroll triggers
      const validSectionHeadings = sectionHeadingsRef.current.filter(
        Boolean,
      ) as HTMLHeadingElement[];
      validSectionHeadings.forEach((heading, index) => {
        if (heading) {
          gsap.fromTo(
            heading,
            { x: -50, opacity: 0, scale: 0.95 },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });

      // Section paragraphs with scroll triggers
      const validSectionParagraphs = sectionParagraphsRef.current.filter(
        Boolean,
      ) as HTMLParagraphElement[];
      validSectionParagraphs.forEach((paragraph, index) => {
        if (paragraph) {
          gsap.fromTo(
            paragraph,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: paragraph,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });

      // Last updated date
      if (updatedDateRef.current) {
        gsap.fromTo(
          updatedDateRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: updatedDateRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper functions remain the same
  const addToSectionHeadingsRefs = (
    el: HTMLHeadingElement | null,
    index: number,
  ) => {
    sectionHeadingsRef.current[index] = el;
  };

  const addToSectionParagraphsRefs = (
    el: HTMLParagraphElement | null,
    index: number,
  ) => {
    sectionParagraphsRef.current[index] = el;
  };

  return (
    <div ref={containerRef} className="global-px min-h-screen py-16">
      <div className="mx-auto max-w-4xl">
        <h1 ref={headingRef} className="mb-6 text-4xl font-bold">
          Terms & Conditions
        </h1>
        <p ref={introRef} className="mb-4">
          By accessing and using the Sainte Thérèse Foundation website, you
          agree to the following terms and conditions.
        </p>

        <h2
          ref={(el) => addToSectionHeadingsRefs(el, 0)}
          className="mt-8 mb-2 cursor-pointer text-2xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600"
        >
          1. Use of Website
        </h2>
        <p
          ref={(el) => addToSectionParagraphsRefs(el, 0)}
          className="text-gray-600 transition-colors duration-300 hover:text-gray-800"
        >
          The content on this site is for informational purposes only. You may
          not use any material for commercial purposes without written consent
          from the Foundation.
        </p>

        <h2
          ref={(el) => addToSectionHeadingsRefs(el, 1)}
          className="mt-8 mb-2 cursor-pointer text-2xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600"
        >
          2. Donations
        </h2>
        <p
          ref={(el) => addToSectionParagraphsRefs(el, 1)}
          className="text-gray-600 transition-colors duration-300 hover:text-gray-800"
        >
          All donations are voluntary and non-refundable. Funds are used solely
          to advance our mission of improving healthcare access.
        </p>

        <h2
          ref={(el) => addToSectionHeadingsRefs(el, 2)}
          className="mt-8 mb-2 cursor-pointer text-2xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600"
        >
          3. Privacy
        </h2>
        <p
          ref={(el) => addToSectionParagraphsRefs(el, 2)}
          className="text-gray-600 transition-colors duration-300 hover:text-gray-800"
        >
          We respect your privacy. Any personal information shared with us will
          be handled according to our privacy policy.
        </p>

        <h2
          ref={(el) => addToSectionHeadingsRefs(el, 3)}
          className="mt-8 mb-2 cursor-pointer text-2xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600"
        >
          4. Limitation of Liability
        </h2>
        <p
          ref={(el) => addToSectionParagraphsRefs(el, 3)}
          className="text-gray-600 transition-colors duration-300 hover:text-gray-800"
        >
          Sainte Thérèse Foundation is not responsible for any damages resulting
          from the use or inability to use this site or its materials.
        </p>

        <p ref={updatedDateRef} className="mt-10 text-gray-600">
          Last updated: October 2025
        </p>
      </div>
    </div>
  );
}
