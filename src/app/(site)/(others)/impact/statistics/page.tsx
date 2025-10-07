"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Metadata } from "next";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const metaData: Metadata = {
  title: "Statistics - saint theresa foundation",
};

export default function StatisticsPage() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const statCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const chartSectionRef = useRef<HTMLDivElement>(null);
  const chartHeadingRef = useRef<HTMLHeadingElement>(null);
  const chartDescriptionRef = useRef<HTMLParagraphElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const highlightsSectionRef = useRef<HTMLDivElement>(null);
  const highlightsHeadingRef = useRef<HTMLHeadingElement>(null);
  const highlightCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const testimonialsSectionRef = useRef<HTMLDivElement>(null);
  const testimonialsHeadingRef = useRef<HTMLHeadingElement>(null);
  const testimonialCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const stats = [
    {
      label: "Patients Served",
      value: 24500,
      color: "from-primary to-secondary bg-gradient-to-br",
    },
    {
      label: "Medicines Delivered",
      value: 80000,
      color: "to-primary from-secondary bg-gradient-to-br",
    },
    {
      label: "Communities Reached",
      value: 35,
      color: "from-primary to-secondary bg-gradient-to-tr",
    },
    {
      label: "Volunteers Engaged",
      value: 120,
      color: "from-primary to-secondary bg-gradient-to-tl",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((c, i) => Math.min(c + stats[i].value / 50, stats[i].value)),
      );
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const yearlyGrowth = [
    { year: "2021", patients: 6000 },
    { year: "2022", patients: 11000 },
    { year: "2023", patients: 18000 },
    { year: "2024", patients: 21000 },
    { year: "2025", patients: 24500 },
  ];

  const impactHighlights = [
    {
      title: "Maternal Health Access",
      desc: "Over 2,000 mothers received prenatal and postnatal care through our mobile clinics.",
      icon: "🩺",
    },
    {
      title: "Youth Health Programs",
      desc: "Health education sessions conducted in 25+ schools empowering 7,500 students.",
      icon: "🎓",
    },
    {
      title: "Digital Consultations",
      desc: "Our telehealth platform has supported over 4,000 consultations remotely.",
      icon: "💻",
    },
  ];

  const testimonials = [
    {
      name: "Marie, Community Nurse",
      quote:
        "I've seen how our small efforts make a big difference — the statistics remind us that hope grows with every life touched.",
    },
    {
      name: "Joseph, Program Manager",
      quote:
        "Each number here isn't just data — it's a child, a parent, a family who now has a chance at a healthier future.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline
      const tl = gsap.timeline();

      // Header animations
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.5",
        );
      }

      if (descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
      }

      // Stats container
      if (statsContainerRef.current) {
        tl.fromTo(
          statsContainerRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.2",
        );
      }

      // Stat cards with staggered animation
      const validStatCards = statCardsRef.current.filter(
        Boolean,
      ) as HTMLDivElement[];
      if (validStatCards.length > 0) {
        tl.fromTo(
          validStatCards,
          {
            scale: 0.5,
            opacity: 0,
            rotationY: 90,
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            stagger: {
              amount: 0.8,
              from: "center",
            },
            ease: "back.out(1.5)",
          },
          "-=0.3",
        );
      }

      // Chart section
      if (chartSectionRef.current) {
        tl.fromTo(
          chartSectionRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4",
        );
      }

      if (chartHeadingRef.current) {
        tl.fromTo(
          chartHeadingRef.current,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.5",
        );
      }

      if (chartDescriptionRef.current) {
        tl.fromTo(
          chartDescriptionRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        );
      }

      // Chart animation
      if (chartRef.current) {
        tl.fromTo(
          chartRef.current,
          {
            scale: 0.9,
            opacity: 0,
            y: 20,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.2",
        );
      }

      // Highlights section
      if (highlightsSectionRef.current) {
        tl.fromTo(
          highlightsSectionRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.3",
        );
      }

      if (highlightsHeadingRef.current) {
        tl.fromTo(
          highlightsHeadingRef.current,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
      }

      // Highlight cards
      const validHighlightCards = highlightCardsRef.current.filter(
        Boolean,
      ) as HTMLDivElement[];
      if (validHighlightCards.length > 0) {
        tl.fromTo(
          validHighlightCards,
          {
            y: 50,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.4)",
          },
          "-=0.2",
        );
      }

      // Testimonials section
      if (testimonialsSectionRef.current) {
        tl.fromTo(
          testimonialsSectionRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.3",
        );
      }

      if (testimonialsHeadingRef.current) {
        tl.fromTo(
          testimonialsHeadingRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
      }

      // Testimonial cards
      const validTestimonialCards = testimonialCardsRef.current.filter(
        Boolean,
      ) as HTMLDivElement[];
      if (validTestimonialCards.length > 0) {
        tl.fromTo(
          validTestimonialCards,
          {
            x: -60,
            opacity: 0,
            scale: 0.95,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.2",
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper functions for ref assignments
  const addToStatCardsRefs = (el: HTMLDivElement | null, index: number) => {
    statCardsRef.current[index] = el;
  };

  const addToHighlightCardsRefs = (
    el: HTMLDivElement | null,
    index: number,
  ) => {
    highlightCardsRef.current[index] = el;
  };

  const addToTestimonialCardsRefs = (
    el: HTMLDivElement | null,
    index: number,
  ) => {
    testimonialCardsRef.current[index] = el;
  };

  return (
    <section ref={containerRef} className="min-h-screen py-20">
      {/* Header */}
      <div ref={headerRef} className="global-px mb-8 max-w-5xl">
        <h1
          ref={headingRef}
          className="text-foreground mb-2 text-4xl font-bold"
        >
          Impact in Numbers
        </h1>
        <p ref={descriptionRef} className="">
          Every number represents a story — a healed patient, a supported
          family, a stronger community.
        </p>
      </div>

      <div className="global-px bg-foreground py-8">
        <div
          ref={statsContainerRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              ref={(el) => addToStatCardsRefs(el, i)}
              className={`${item.color} p-8 text-center font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105`}
            >
              <p className="text-5xl font-bold">
                {Math.round(counts[i]).toLocaleString()}+
              </p>
              <p className="mt-2 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart Section */}
        <div ref={chartSectionRef} className="mt-8 max-w-4xl">
          <h2 ref={chartHeadingRef} className="mb-2 text-2xl font-bold">
            Growth Over the Years
          </h2>
          <p ref={chartDescriptionRef} className="text-primary-foreground mb-8">
            Our outreach and impact continue to expand each year, touching more
            lives and communities.
          </p>

          <div ref={chartRef}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearlyGrowth}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="patients"
                  stroke="#0076bc"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div ref={highlightsSectionRef} className="global-px mt-24 max-w-6xl">
        <h2
          ref={highlightsHeadingRef}
          className="text-foreground mb-8 text-2xl font-bold"
        >
          Program Highlights
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {impactHighlights.map((item, i) => (
            <motion.div
              key={i}
              ref={(el) => addToHighlightCardsRefs(el, i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border-foreground hover:border-primary bg-primary-foreground border p-6 shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-3 text-4xl">{item.icon}</div>
              <h3 className="text-primary text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div
        ref={testimonialsSectionRef}
        className="bg-foreground mt-24 px-6 py-12 text-center"
      >
        <h2
          ref={testimonialsHeadingRef}
          className="text-primary-foreground mb-8 text-2xl font-bold"
        >
          Voices Behind the Numbers
        </h2>
        <div className="flex flex-col justify-center gap-8 md:flex-row">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={(el) => addToTestimonialCardsRefs(el, i)}
              className="border-foreground hover:border-primary bg-primary-foreground max-w-md border p-6 shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <p className="mb-3 italic">"{t.quote}"</p>
              <p className="text-primary font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
