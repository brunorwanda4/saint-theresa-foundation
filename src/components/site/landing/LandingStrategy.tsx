"use client";

import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LandingStrategy = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLSpanElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (textContainerRef.current) {
        gsap.fromTo(
          textContainerRef.current,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (mainHeadingRef.current) {
        gsap.fromTo(
          mainHeadingRef.current,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: mainHeadingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (subHeadingRef.current) {
        gsap.fromTo(
          subHeadingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: subHeadingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Link
      if (linkRef.current) {
        gsap.fromTo(
          linkRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.8)",
            scrollTrigger: {
              trigger: linkRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Image container
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          { opacity: 0, x: 100, scale: 0.7 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Image with floating animation
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );

        // Continuous floating animation
        gsap.to(imageRef.current, {
          y: -15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="global-px from-primary flex items-center justify-between overflow-hidden bg-gradient-to-r to-cyan-500 py-8"
    >
      <div ref={textContainerRef}>
        <h2
          ref={mainHeadingRef}
          className="text-primary-foreground text-5xl font-bold"
        >
          Strategy 2025 - 2027
        </h2>
        <span
          ref={subHeadingRef}
          className="text-primary-foreground mt-2 block text-5xl font-semibold"
        >
          Resilient Peace
        </span>
        <div className="mt-4">
          <SiteLink
            ref={linkRef}
            className="font-semibold transition-transform duration-200 hover:scale-105"
            link="/programs/timeline"
          >
            Learn More
          </SiteLink>
        </div>
      </div>
      <div ref={imageContainerRef} className="mr-16">
        <div ref={imageRef}>
          <MyImage
            src="/images/portada.webp"
            className="h-72 w-52 cursor-pointer transition-transform duration-500 hover:scale-110"
            classname="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingStrategy;
