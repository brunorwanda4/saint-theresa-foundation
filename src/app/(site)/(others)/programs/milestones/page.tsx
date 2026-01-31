"use client";

import MyImage from "@/components/common/images/MyImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, MapPin, Target, Users2 } from "lucide-react";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Milestone {
  title: string;
  year: string;
  desc: string;
  icon: React.ComponentType<any>;
}

export default function MilestonesPage() {
  const milestones: Milestone[] = [
    {
      title: "Community Outreach Launched",
      year: "2025",
      desc: "Over 3,000 rural residents reached through mobile clinic services.",
      icon: Users2,
    },
    {
      title: "Digital Health Pilot Success",
      year: "2026",
      desc: "Telemedicine consultations reduced travel time by 70%.",
      icon: Target,
    },
    {
      title: "Youth Training Initiative",
      year: "2026",
      desc: "50 young leaders trained as community health educators.",
      icon: Award,
    },
    {
      title: "Regional Expansion",
      year: "2027",
      desc: "Sainte Thérèse Foundation operational in 5 Rwandan districts.",
      icon: MapPin,
    },
  ];

  // Refs for animation elements
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const milestoneCardsRef = useRef<HTMLDivElement[]>([]);
  const highlightTitleRef = useRef<HTMLHeadingElement>(null);
  const highlightTextRef = useRef<HTMLDivElement>(null);
  const highlightImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Header animations
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Milestone cards animation
      milestoneCardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            x: index % 2 === 0 ? -30 : 30,
            scale: 0.9,
            rotationY: index % 2 === 0 ? -10 : 10,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -5,
            rotationY: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Highlight section animations
      gsap.fromTo(
        highlightTitleRef.current,
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: highlightTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        highlightTextRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: highlightTextRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        highlightImageRef.current,
        {
          opacity: 0,
          x: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: highlightImageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Function to add milestone cards to refs array
  const addMilestoneCardToRefs = (el: HTMLDivElement | null) => {
    if (el && !milestoneCardsRef.current.includes(el)) {
      milestoneCardsRef.current.push(el);
    }
  };

  return (
    <main className="min-h-screen py-16" ref={containerRef}>
      {/* Header */}
      <section className="mb-16">
        <h1
          ref={titleRef}
          className="text-foreground global-px text-4xl font-bold"
        >
          Our Milestones
        </h1>
        <p ref={descriptionRef} className="global-px mt-3 max-w-3xl">
          Each milestone represents progress toward our shared mission –
          advancing health, dignity, and hope for every community we serve.
        </p>
      </section>

      {/* Milestone Cards */}
      <section className="global-px bg-foreground grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {milestones.map((m, i) => {
          const IconComponent = m.icon;
          return (
            <div
              key={m.title}
              ref={addMilestoneCardToRefs}
              className="border-foreground bg-primary-foreground relative cursor-pointer overflow-hidden border p-6 shadow-md transition duration-200 hover:shadow-xl"
            >
              <div className="absolute inset-0 opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-2 flex items-center gap-3">
                  <IconComponent size={24} className="text-primary" />
                  <span className="text-primary text-sm font-semibold uppercase">
                    {m.year}
                  </span>
                </div>
                <h2 className="text-foreground text-xl font-semibold">
                  {m.title}
                </h2>
                <p className="mt-2">{m.desc}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Highlight Section */}
      <section className="global-px mx-auto mt-20 grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <h2
            ref={highlightTitleRef}
            className="text-foreground mb-3 text-3xl font-semibold"
          >
            Driven by Compassion and Results
          </h2>
          <div ref={highlightTextRef}>
            <p className="mb-4">
              Our team of volunteers, doctors, and community leaders continues
              to make a measurable difference. Together, we're building a
              foundation for better health and stronger futures.
            </p>
            <p className="">
              With your help, the next milestones will go even further –
              reaching more families and transforming lives.
            </p>
          </div>
        </div>
        <div ref={highlightImageRef}>
          <MyImage
            src="/images/community.jpg"
            alt="Foundation team"
            className="h-72 w-full object-cover shadow-md"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
