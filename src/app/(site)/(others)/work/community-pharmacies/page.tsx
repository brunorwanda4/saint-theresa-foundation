"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CommunityPharmaciesPage = () => {
  // Refs for animation elements
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
          x: -30,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Section background reveal animation
      gsap.fromTo(
        sectionRef.current,
        {
          backgroundColor: "transparent",
          color: "transparent",
        },
        {
          backgroundColor: "var(--foreground)",
          color: "var(--primary-foreground)",
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Text content animation
      gsap.fromTo(
        textContentRef.current,
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // List items animation with stagger
      if (listRef.current) {
        const listItems = listRef.current.children;
        gsap.fromTo(
          listItems,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.2,
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Image animation
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: 40,
          scale: 0.9,
          rotationY: 10,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotationY: 0,
          duration: 1,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen py-16" ref={containerRef}>
      <h1
        ref={titleRef}
        className="text-foreground global-px text-4xl font-bold"
      >
        Community Pharmacies
      </h1>

      <section
        ref={sectionRef}
        className="bg-foreground text-primary-foreground global-px mt-4 space-y-8 py-6"
      >
        <div className="flex flex-col gap-10 md:flex-row">
          <div ref={textContentRef} className="flex-1">
            <p className="">
              The Sainte Thérèse Foundation establishes community-based
              pharmacies that ensure affordable and reliable access to essential
              medicines in rural areas.
            </p>
            <ul
              ref={listRef}
              className="text-primary-content mt-4 list-inside list-disc space-y-1"
            >
              <li>Locally managed with professional supervision</li>
              <li>Affordable essential medicines</li>
              <li>Pharmacist training and community education</li>
            </ul>
          </div>

          <img
            ref={imageRef}
            src="/images/pharmacy.jpg"
            alt="Community Pharmacy"
            className="h-72 w-full object-cover shadow-lg md:w-1/2"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default CommunityPharmaciesPage;
