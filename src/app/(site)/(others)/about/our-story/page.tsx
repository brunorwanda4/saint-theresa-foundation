"use client";

import MyImage from "@/components/common/images/MyImage";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const OurStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
      );

      // Overlay fade in
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5", // Overlap with previous animation
      );

      // Content container slide in from left
      tl.fromTo(
        contentRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.3",
      );

      // Heading animation
      tl.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      );

      // Paragraphs staggered animation
      tl.fromTo(
        paragraphRefs.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToParagraphRefs = (
    el: HTMLParagraphElement | null,
    index: number,
  ) => {
    paragraphRefs.current[index] = el;
  };

  return (
    <div ref={containerRef} className="relative h-[70vh]">
      <div ref={imageRef}>
        <MyImage
          src="/images/nurse.jpg"
          className="z-0 h-full w-full"
          original
        />
      </div>

      <div
        ref={overlayRef}
        className="from-primary-foreground via-primary-foreground/80 absolute top-0 z-10 h-full w-full bg-gradient-to-r to-transparent"
      />

      <section
        ref={contentRef}
        id="our-story"
        className="global-px absolute top-0 z-20 py-8"
      >
        <h1
          ref={headingRef}
          className="text-foreground mb-4 text-4xl font-bold"
        >
          Our Story
        </h1>

        <p
          ref={(el) => addToParagraphRefs(el, 0)}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          The Sainte Thérèse Foundation is a faith-driven, nonprofit initiative
          founded by AHAYO Anita together with seasoned humanitarian
          professionals. It was created as an extension of the impactful work of
          Sainte Thérèse Polyclinic, aiming to bring healthcare closer to poor
          and vulnerable communities in rural Rwanda.
        </p>

        <p
          ref={(el) => addToParagraphRefs(el, 1)}
          className="text-muted-foreground mt-4 text-lg leading-relaxed"
        >
          Through mobile clinics, digital health services, community pharmacies,
          and public health education, we seek to reduce the burden of disease
          and promote preventive care in alignment with Christian values of
          compassion, dignity, and solidarity.
        </p>
      </section>
    </div>
  );
};

export default OurStory;
