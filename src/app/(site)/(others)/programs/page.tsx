"use client";
import { programs } from "@/lib/data/programs";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProgramsPage() {
  // Refs for GSAP animations
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Add to cards ref array
  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

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
            once: true,
          },
        },
      );
    }

    // Cards animation with staggered effect
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
            once: true,
          },
        },
      );
    });

    // Clean up ScrollTrigger instances
    return () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <main className="global-px min-h-screen py-8">
      <div
        ref={headerRef}
        className="global-px mx-auto mb-8 max-w-5xl items-center text-center"
      >
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Programs & Action Plan
        </h1>
        <p className="">
          Every project of the Sainte Thérèse Foundation aligns with a vision of
          sustainable healthcare, education, and community empowerment. Our plan
          ensures that faith-driven compassion translates into measurable,
          lasting impact.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={i}
            ref={addToCardsRef}
            whileHover={{ scale: 1.02 }}
            className="site-card"
          >
            <h2 className="mb-2 text-xl font-semibold">
              <Link href={p.href}>{p.title}</Link>
            </h2>
            <p className="mb-3">{p.desc}</p>
            <Link href={p.href} className="font-medium hover:underline">
              Learn more →
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
