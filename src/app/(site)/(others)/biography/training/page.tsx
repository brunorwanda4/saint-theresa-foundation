"use client";
import MyImage from "@/components/common/images/MyImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function TrainingBioPage() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const textContentRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header animation (plays immediately)
      const tl = gsap.timeline();
      tl.from(titleRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
      }).from(
        descriptionRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      );

      // Content animations trigger on scroll
      gsap.from(textContentRef.current, {
        scrollTrigger: {
          trigger: textContentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen py-8">
      <div className="global-px mb-8 max-w-5xl">
        <h1 ref={titleRef} className="text-foreground mb-2 text-4xl font-bold">
          Workshops & Training
        </h1>
        <p ref={descriptionRef} className="max-w-2xl leading-relaxed">
          Empowering local health workers and youth leaders to sustain community
          care.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div ref={textContentRef} className="text-gray-700">
          <p>
            Our workshops equip local volunteers, nurses, and health promoters
            with the skills to manage digital tools, hygiene awareness, and
            first-aid techniques.
          </p>
          <p className="mt-3">
            Over 200 workers have been trained under our "Healthy Villages"
            initiative between 2023–2025.
          </p>
        </div>
        <div ref={imageRef}>
          <MyImage
            src="/images/image-2.jpeg"
            alt="Training session"
            className="h-96 w-full shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
