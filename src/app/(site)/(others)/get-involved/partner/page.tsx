"use client";
import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import {
  opportunities,
  partners,
  stats,
  testimonials,
} from "@/lib/data/partner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PartnerPage() {
  // Refs for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null);
  const opportunitiesTitleRef = useRef<HTMLHeadingElement>(null);
  const opportunitiesRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const partnersTitleRef = useRef<HTMLHeadingElement>(null);
  const partnersRef = useRef<HTMLDivElement[]>([]);
  const testimonialsTitleRef = useRef<HTMLHeadingElement>(null);
  const testimonialsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Add to ref arrays
  const addToOpportunitiesRef = (el: HTMLDivElement | null) => {
    if (el && !opportunitiesRef.current.includes(el)) {
      opportunitiesRef.current.push(el);
    }
  };

  const addToStatsRef = (el: HTMLDivElement | null) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  const addToPartnersRef = (el: HTMLDivElement | null) => {
    if (el && !partnersRef.current.includes(el)) {
      partnersRef.current.push(el);
    }
  };

  const addToTestimonialsRef = (el: HTMLDivElement | null) => {
    if (el && !testimonialsRef.current.includes(el)) {
      testimonialsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      const children = heroRef.current.children;
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Opportunities title animation
    if (opportunitiesTitleRef.current) {
      gsap.fromTo(
        opportunitiesTitleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: opportunitiesTitleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Opportunities cards animation
    opportunitiesRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotationX: 10,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 0.9,
          delay: index * 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Stats animation
    statsRef.current.forEach((stat, index) => {
      gsap.fromTo(
        stat,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Partners title animation
    if (partnersTitleRef.current) {
      gsap.fromTo(
        partnersTitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: partnersTitleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Partners logo animation
    partnersRef.current.forEach((partner, index) => {
      gsap.fromTo(
        partner,
        {
          opacity: 0,
          scale: 0.7,
          rotationY: 20,
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: partner,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Testimonials title animation
    if (testimonialsTitleRef.current) {
      gsap.fromTo(
        testimonialsTitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: testimonialsTitleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Testimonials animation
    testimonialsRef.current.forEach((testimonial, index) => {
      gsap.fromTo(
        testimonial,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: testimonial,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // CTA section animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
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
    <main className="min-h-screen">
      <section ref={heroRef} className="global-px py-8">
        <h1 className="mb-4 text-4xl font-bold">Partner With Us</h1>
        <p className="max-w-3xl text-lg">
          Join hands with the <strong>Sainte Thérèse Foundation</strong> to
          build a future where every person – regardless of background – has
          access to compassionate healthcare and hope.
        </p>
      </section>

      <section className="global-px py-10">
        <h2 ref={opportunitiesTitleRef} className="mb-6 text-3xl font-bold">
          Partnership Opportunities
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((item, index) => (
            <div
              key={item.title}
              ref={addToOpportunitiesRef}
              className="bg-primary-foreground border-foreground hover:border-primary border p-6 shadow-md transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-primary text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-primary-foreground py-14">
        <div className="mx-auto grid max-w-6xl gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} ref={addToStatsRef}>
              <h3 className="text-4xl font-bold">{stat.number}</h3>
              <p className="mt-1 text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 ref={partnersTitleRef} className="mb-6 text-3xl font-bold">
          Our Current Partners
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-gray-600">
          We are honored to collaborate with esteemed organizations, faith-based
          institutions, and educational partners committed to shared values of
          service, love, and impact.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((p) => (
            <div
              key={p.name}
              ref={addToPartnersRef}
              className="border-foreground hover:border-primary bg-primary-foreground border p-4 shadow-md"
            >
              <MyImage
                src={p.logo}
                alt={p.name}
                className="mx-auto size-52"
                classname=" object-contain"
              />
              <p className="mt-3 text-sm font-medium text-gray-700">{p.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 ref={testimonialsTitleRef} className="mb-10 text-3xl font-bold">
            What Our Partners Say
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                ref={addToTestimonialsRef}
                className="bg-primary-foreground border-foreground hover:border-primary border p-8 shadow-lg duration-200"
              >
                <p className="italic">"{t.quote}"</p>
                <div className="mt-4">
                  <p className="text-primary font-semibold">{t.name}</p>
                  <p className="text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        className="bg-foreground text-primary-foreground px-6 py-14 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold">
          Let's Build a Healthier Tomorrow Together
        </h2>
        <p className="text-primary-foreground mx-auto mb-8 max-w-2xl">
          Partner with Sainte Thérèse Foundation and help us extend care,
          education, and faith-based healing across Rwanda and beyond.
        </p>
        <SiteLink
          className="text-primary-foreground mt-3 inline-block rounded-full px-8 py-3 font-semibold transition"
          link="/contact"
        >
          Become a Partner
        </SiteLink>
      </section>
    </main>
  );
}
