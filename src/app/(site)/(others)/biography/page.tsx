"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface BioLink {
  title: string;
  desc: string;
  href: string;
}

export default function BiographyPage() {
  const bioLinks: BioLink[] = [
    {
      title: "Community Outreach",
      desc: "Updates from rural outreach missions and mobile clinics bringing care to the most remote areas.",
      href: "/biography/outreach",
    },
    {
      title: "Workshops & Training",
      desc: "Highlights from our ongoing workshops for healthcare and nutrition education.",
      href: "/biography/training",
    },
    {
      title: "Conferences & Advocacy",
      desc: "Where we've represented our mission nationally and internationally to share our vision of faith-driven care.",
      href: "/biography/conferences",
    },
    {
      title: "Press Releases",
      desc: "Official announcements, media coverage, and publications featuring our initiatives.",
      href: "/biography/press",
    },
  ];

  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Add to cards ref array with proper typing
  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animation for title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Animation for cards
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
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
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
    <main className="min-h-screen py-8">
      <div
        ref={titleRef}
        className="global-px mx-auto mb-8 max-w-5xl items-center text-center"
      >
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Biography & Events
        </h1>
        <p className="text-gray-700">
          The Sainte Thérèse Foundation continues to grow through faith,
          leadership, and community engagement. Explore how our work extends
          beyond clinics – through outreach, advocacy, and the sharing of hope.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6">
        {bioLinks.map((item, i) => (
          <motion.div
            key={i}
            ref={addToCardsRef}
            whileHover={{ scale: 1.02 }}
            className="site-card"
          >
            <h2 className="mb-2 text-xl font-semibold">
              <Link href={item.href}>{item.title}</Link>
            </h2>
            <p className="mb-3">{item.desc}</p>
            <Link href={item.href} className="font-medium hover:underline">
              Explore ?
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
