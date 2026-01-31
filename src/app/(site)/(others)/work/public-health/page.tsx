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

interface EducationProgram {
  title: string;
  description: string;
  img: string;
}

interface Stat {
  label: string;
  value: string;
}

interface Testimonial {
  name: string;
  quote: string;
  role: string;
  img: string;
}

const PublicHealthPage = () => {
  const educationPrograms: EducationProgram[] = [
    {
      title: "Nutrition Awareness",
      description:
        "Teaching families how balanced diets improve growth, immunity, and child development through local produce.",
      img: "/images/nutrition.jpg",
    },
    {
      title: "Hygiene Campaigns",
      description:
        "Organizing hygiene drives to promote handwashing, sanitation, and disease prevention in rural communities.",
      img: "/images/hygiene.jpg",
    },
    {
      title: "School Health Programs",
      description:
        "Engaging students and teachers with workshops on hygiene, nutrition, and menstrual health education.",
      img: "/images/school-health.jpg",
    },
  ];

  const stats: Stat[] = [
    { label: "Communities Reached", value: "120+" },
    { label: "Workshops Conducted", value: "450+" },
    { label: "Students Educated", value: "10,000+" },
    { label: "Health Volunteers", value: "200+" },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Marie U.",
      quote:
        "Before the hygiene program came to our village, many children suffered from preventable diseases.",
      role: "Community Leader, Nyamagabe",
      img: "/images/image-6.jpeg",
    },
    {
      name: "Jean Pierre N.",
      quote:
        "The nutrition workshops helped me start a small vegetable garden for my family. My children are healthier and happier.",
      role: "Parent, Rwamagana",
      img: "/images/image-3.jpeg",
    },
  ];

  // Refs for animation elements
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const programsTitleRef = useRef<HTMLHeadingElement>(null);
  const programCardsRef = useRef<HTMLDivElement[]>([]);
  const statsSectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const testimonialsTitleRef = useRef<HTMLHeadingElement>(null);
  const testimonialCardsRef = useRef<HTMLDivElement[]>([]);
  const ctaSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        heroImageRef.current,
        {
          scale: 1.2,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        heroContentRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
        },
      );

      // Programs section animations
      gsap.fromTo(
        programsTitleRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: programsTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      programCardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            rotationY: 15,
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // Hover animation for program cards
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -5,
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

      // Stats section background reveal
      gsap.fromTo(
        statsSectionRef.current,
        {
          backgroundColor: "transparent",
          color: "transparent",
        },
        {
          backgroundColor: "var(--foreground)",
          color: "var(--primary-foreground)",
          duration: 1,
          scrollTrigger: {
            trigger: statsSectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Stats counter animation
      statsRef.current.forEach((stat, index) => {
        if (!stat) return;

        gsap.fromTo(
          stat,
          {
            opacity: 0,
            scale: 0.8,
            y: 30,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Testimonials section
      gsap.fromTo(
        testimonialsTitleRef.current,
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: testimonialsTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      testimonialCardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: index % 2 === 0 ? -60 : 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // Hover animation for testimonial cards
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // CTA section animation
      gsap.fromTo(
        ctaSectionRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Ref collection functions
  const addProgramCardToRefs = (el: HTMLDivElement | null) => {
    if (el && !programCardsRef.current.includes(el)) {
      programCardsRef.current.push(el);
    }
  };

  const addStatToRefs = (el: HTMLDivElement | null) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  const addTestimonialCardToRefs = (el: HTMLDivElement | null) => {
    if (el && !testimonialCardsRef.current.includes(el)) {
      testimonialCardsRef.current.push(el);
    }
  };

  return (
    <main className="min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
        <div ref={heroImageRef}>
          <MyImage
            src="/images/image-2.jpeg"
            alt="Public Health Education"
            original
            className="h-full w-full object-cover brightness-75"
          />
        </div>
        <div className="bg-foreground/80 absolute top-0 z-10 h-full w-full" />
        <div ref={heroContentRef} className="absolute z-20 px-6 text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Public Health Education
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            Empowering communities with knowledge to prevent diseases,
            strengthen hygiene, and build lasting well-being.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="global-px mx-auto max-w-7xl py-20">
        <h2
          ref={programsTitleRef}
          className="text-foreground mb-12 text-3xl font-bold"
        >
          Our Education Initiatives
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {educationPrograms.map((item, i) => (
            <div
              key={i}
              ref={addProgramCardToRefs}
              className="relative h-80 w-full cursor-pointer duration-200"
            >
              <MyImage
                src={item.img}
                original
                loading="lazy"
                className="h-full w-full"
              />
              <div className="absolute bottom-0 h-30 w-full bg-blue-950/70 px-4 py-2">
                <h4 className="text-primary-foreground font-medium">
                  {item.title}
                </h4>
                <p className="text-primary-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section ref={statsSectionRef} className="bg-foreground py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-primary-foreground mb-8 text-3xl font-bold">
            Our Impact So Far
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                ref={addStatToRefs}
                className="bg-white p-6 shadow-md transition hover:shadow-lg"
              >
                <p className="text-foreground mb-1 text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2
          ref={testimonialsTitleRef}
          className="text-foreground mb-12 text-3xl font-bold"
        >
          Community Voices
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={addTestimonialCardToRefs}
              className="relative h-80 w-full cursor-pointer duration-200"
            >
              <MyImage
                src={t.img}
                original
                loading="lazy"
                className="h-full w-full"
              />
              <div className="absolute bottom-0 h-30 w-full bg-blue-950/70 px-4 py-2">
                <div className="text-primary-foreground">
                  <h3 className="text-primary-foreground font-semibold">
                    {t.name}
                  </h3>
                  <p className="text-primary-foreground text-sm">{t.role}</p>
                  <p className="text-primary-foreground italic">"{t.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaSectionRef}
        className="bg-foreground text-primary-foreground px-6 py-16 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold">
          Join Us in Promoting Public Health
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-200">
          Your support helps us train local volunteers, expand our health
          outreach, and reach more communities with life-saving education.
        </p>
        <SiteLink
          className="text-primary-foreground inline-block rounded-full px-8 py-3 font-semibold transition"
          link="/get-involved/volunteer"
        >
          Get Involved
        </SiteLink>
      </section>
    </main>
  );
};

export default PublicHealthPage;
