"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function BudgetChartSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const budgetCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const chartSectionRef = useRef<HTMLElement>(null);
  const chartTextRef = useRef<HTMLDivElement>(null);
  const chartTitleRef = useRef<HTMLHeadingElement>(null);
  const chartDescriptionRef = useRef<HTMLParagraphElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const data = [
    {
      category: "Mobile Clinics & Medical Equipment",
      amount: 150000,
      description:
        "Funds allocated for purchasing, maintaining, and operating mobile clinics that deliver essential healthcare services to underserved communities, including diagnostic tools and outreach kits.",
      color: "oklch(0.54 0.15 240)", // Primary color - darkest shade
    },
    {
      category: "Community Pharmacies & Local Access",
      amount: 80000,
      description:
        "Support for establishing and maintaining community-based pharmacies to ensure continuous access to affordable medication and healthcare supplies in rural areas.",
      color: "oklch(0.62 0.13 240)", // Slightly lighter
    },
    {
      category: "Digital Health Platform & Technology",
      amount: 50000,
      description:
        "Investment in building and maintaining our telemedicine platform, data systems, and digital literacy training to expand remote health services and data-driven decisions.",
      color: "oklch(0.68 0.11 240)", // Medium shade
    },
    {
      category: "Training, Empowerment & Capacity Building",
      amount: 60000,
      description:
        "Workshops and leadership programs for healthcare workers, volunteers, and youth — strengthening long-term community capacity for independent growth and sustainable impact.",
      color: "oklch(0.74 0.09 240)", // Lighter shade
    },
    {
      category: "Public Health Education & Awareness",
      amount: 30000,
      description:
        "Outreach campaigns and educational materials to promote hygiene, nutrition, and preventive healthcare — reaching families and schools across local communities.",
      color: "oklch(0.80 0.07 240)", // Lightest shade
    },
  ];

  const total = data.reduce((sum, d) => sum + d.amount, 0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline
      const tl = gsap.timeline();

      // Main heading animation
      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          {
            opacity: 0,
            y: -40,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
          },
        );
      }

      // Description paragraph
      if (descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
            rotationX: 5,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5",
        );
      }

      // Budget cards staggered animation
      const validBudgetCards = budgetCardsRef.current.filter(
        Boolean,
      ) as HTMLDivElement[];
      if (validBudgetCards.length > 0) {
        tl.fromTo(
          validBudgetCards,
          {
            y: 60,
            opacity: 0,
            scale: 0.9,
            rotationX: 10,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: {
              amount: 0.8,
              from: "start",
            },
            ease: "back.out(1.4)",
          },
          "-=0.3",
        );

        // Progress bars animation
        const validProgressBars = progressBarsRef.current.filter(
          Boolean,
        ) as HTMLDivElement[];
        validProgressBars.forEach((bar, index) => {
          const percentage = (data[index].amount / total) * 100;
          gsap.fromTo(
            bar,
            { width: 0 },
            {
              width: `${percentage}%`,
              duration: 1.5,
              delay: 0.5 + index * 0.1,
              ease: "power2.out",
            },
          );
        });

        // Add hover effects to cards
        validBudgetCards.forEach((card, index) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });

            // Highlight corresponding chart segment (simulated)
            const progressBar = progressBarsRef.current[index];
            if (progressBar) {
              gsap.to(progressBar, {
                filter: "brightness(1.3)",
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });

            const progressBar = progressBarsRef.current[index];
            if (progressBar) {
              gsap.to(progressBar, {
                filter: "brightness(1)",
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });
        });
      }

      // Chart section
      if (chartSectionRef.current) {
        tl.fromTo(
          chartSectionRef.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        );
      }

      // Chart text content
      if (chartTextRef.current) {
        tl.fromTo(
          chartTextRef.current,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.6",
        );
      }

      if (chartTitleRef.current) {
        tl.fromTo(
          chartTitleRef.current,
          {
            y: -20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5",
        );
      }

      if (chartDescriptionRef.current) {
        tl.fromTo(
          chartDescriptionRef.current,
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        );
      }

      // Chart container animation
      if (chartContainerRef.current) {
        tl.fromTo(
          chartContainerRef.current,
          {
            scale: 0.8,
            opacity: 0,
            rotationY: 15,
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 1,
            ease: "back.out(1.5)",
          },
          "-=0.3",
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [total]);

  // Helper functions for ref assignments
  const addToBudgetCardsRefs = (el: HTMLDivElement | null, index: number) => {
    budgetCardsRef.current[index] = el;
  };

  const addToProgressBarsRefs = (el: HTMLDivElement | null, index: number) => {
    progressBarsRef.current[index] = el;
  };

  return (
    <main ref={containerRef} className="min-h-screen py-16">
      <h1
        ref={headingRef}
        className="text-foreground global-px text-4xl font-bold"
      >
        Budget Allocation Overview (2025–2027)
      </h1>
      <p ref={descriptionRef} className="global-px mt-3 max-w-3xl">
        Our financial distribution reflects our mission — combining healthcare
        innovation, education, and local empowerment to create sustainable
        community well-being.
      </p>

      <section className="global-px bg-foreground mt-8 grid grid-cols-1 gap-6 py-8 md:grid-cols-2">
        {/* Description List */}
        {data.map((item, i) => (
          <div
            key={item.category}
            ref={(el) => addToBudgetCardsRefs(el, i)}
            className="border-foreground bg-primary-foreground cursor-pointer rounded-lg border p-6 shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="flex justify-between text-lg font-semibold">
              {item.category}
              <span className="text-foreground font-bold">
                ${item.amount.toLocaleString()}
              </span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-300">
              <div
                ref={(el) => addToProgressBarsRefs(el, i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: item.color,
                  width: "0%", // Will be animated by GSAP
                }}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Chart Section */}
      <section
        ref={chartSectionRef}
        className="global-px mt-12 flex flex-col items-center gap-12 md:flex-row"
      >
        {/* Chart Title + Description */}
        <div
          ref={chartTextRef}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2
            ref={chartTitleRef}
            className="text-foreground text-3xl font-bold"
          >
            Financial Distribution Overview
          </h2>
          <p ref={chartDescriptionRef} className="max-w-2xl leading-relaxed">
            The chart below provides a clear visualization of how the
            foundation's resources are distributed across our five main
            operational pillars. Each segment represents a key area of
            investment — ensuring that our impact reaches both immediate
            healthcare needs and long-term community development goals.
          </p>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-600">
            This breakdown helps our donors and partners understand where their
            contributions go. It emphasizes our commitment to transparency —
            ensuring that every dollar is used responsibly to improve access to
            healthcare, education, and sustainable livelihoods.
          </p>
        </div>

        <div ref={chartContainerRef} className="flex-1">
          <ChartContainer
            config={{
              amount: {
                label: "Amount (USD)",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[420px] w-full p-4"
          >
            <ResponsiveContainer>
              <PieChart>
                <ChartTooltip
                  content={<ChartTooltipContent title="Funding Breakdown" />}
                />
                <Pie
                  data={data}
                  dataKey="amount"
                  nameKey="category"
                  innerRadius={90}
                  outerRadius={140}
                  paddingAngle={5}
                  label
                >
                  {data.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </section>
    </main>
  );
}
