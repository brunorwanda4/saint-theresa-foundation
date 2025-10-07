"use client";
import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VolunteerPage() {
  // Refs for GSAP animations
  const headerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: -40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Text content animation
    if (textContentRef.current) {
      gsap.fromTo(
        textContentRef.current,
        {
          opacity: 0,
          x: -60,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Stagger animation for list items
      const listItems = textContentRef.current.querySelectorAll("li");
      gsap.fromTo(
        listItems,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          delay: 0.3,
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Image animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: 60,
          scale: 0.9,
          rotationY: 10,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Clean up ScrollTrigger instances
    return () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <section className="min-h-screen py-8">
      <div ref={headerRef} className="global-px mb-8 max-w-5xl">
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Join Our Volunteers
        </h1>
        <p className="">
          Become part of a network of compassionate volunteers transforming
          healthcare access in Rwanda.
        </p>
      </div>

      <div className="bg-foreground global-px text-primary-foreground grid items-center gap-10 py-8 md:grid-cols-2">
        <div ref={textContentRef} className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold">Why Volunteer with Us?</h2>
          <ul className="ml-5 list-disc space-y-2">
            <li>Gain experience in community health work</li>
            <li>Be part of outreach and digital health missions</li>
            <li>Share your skills and grow spiritually</li>
          </ul>
          <p className="mt-4">
            Whether you're a medical professional, a student, or simply
            passionate about helping others — there's a place for you.
          </p>
          <SiteLink
            className="text-primary-foreground mt-3 inline-block rounded-full px-8 py-3 font-semibold transition"
            link="/contact"
          >
            Apply Now
          </SiteLink>
        </div>

        <div ref={imageRef}>
          <MyImage
            src="/images/image-9-a.jpeg"
            alt="Volunteer Team"
            className="size-100 w-full shadow-md"
            original
            priority
          />
        </div>
      </div>
    </section>
  );
}
