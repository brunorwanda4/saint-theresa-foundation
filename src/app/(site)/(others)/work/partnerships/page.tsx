"use client";

import SiteLink from "@/components/common/site/site-link";
import gsap from "gsap";
import {
  Building2,
  Globe,
  GraduationCap,
  Handshake,
  HeartPulse,
  Users,
} from "lucide-react";
import { useLayoutEffect, useRef } from "react";

const PartnershipsPage = () => {
  const partners = [
    {
      name: "Ministry of Health",
      desc: "Collaborating to improve access to rural healthcare through clinics and immunization campaigns.",
      icon: HeartPulse,
    },
    {
      name: "Faith-Based Organizations",
      desc: "Partnering with local churches and dioceses to deliver hope and healthcare to remote communities.",
      icon: Users,
    },
    {
      name: "International NGOs",
      desc: "Working with global organizations to exchange knowledge, technical assistance, and best practices.",
      icon: Globe,
    },
    {
      name: "Universities & Medical Schools",
      desc: "Engaging students and researchers in rural health programs and hands-on training initiatives.",
      icon: GraduationCap,
    },
    {
      name: "UN Agencies",
      desc: "Supporting SDG 3: Good Health and Well-Being through coordinated initiatives and shared goals.",
      icon: Building2,
    },
    {
      name: "Private Sector Partners",
      desc: "Collaborating with pharmaceutical companies and logistics firms for sustainable supply chains.",
      icon: Handshake,
    },
  ];

  const testimonials = [
    {
      quote:
        "Our partnership with Sainte Thérèse Foundation has strengthened local healthcare delivery in Rwanda.",
      author: "Dr. Marie Mukamana, Ministry of Health",
    },
    {
      quote:
        "Through collaboration, we've reached communities that were once completely off the map.",
      author: "Fr. Emmanuel Habimana, Parish Health Program",
    },
  ];

  // Create refs for animated elements
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const partnerCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const testimonialsTitleRef = useRef<HTMLHeadingElement>(null);
  const testimonialCardsRef = useRef<(HTMLQuoteElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Add partner card to refs array
  const addToPartnerCardsRef = (el: HTMLDivElement | null, index: number) => {
    partnerCardsRef.current[index] = el;
  };

  // Add testimonial card to refs array
  const addToTestimonialCardsRef = (
    el: HTMLQuoteElement | null,
    index: number,
  ) => {
    testimonialCardsRef.current[index] = el;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create animation timeline
      const tl = gsap.timeline();

      // Animate title and intro
      tl.from(titleRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          introRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
        // Animate partner cards with stagger
        .from(
          partnerCardsRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3",
        )
        // Animate testimonials title
        .from(
          testimonialsTitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2",
        )
        // Animate testimonial cards with stagger
        .from(
          testimonialCardsRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3",
        )
        // Animate CTA section
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "back.out(1.4)",
          },
          "-=0.4",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Hover animations for partner cards
  const handlePartnerCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -5,
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handlePartnerCardHoverOut = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Hover animations for testimonial cards
  const handleTestimonialHover = (e: React.MouseEvent<HTMLQuoteElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleTestimonialHoverOut = (e: React.MouseEvent<HTMLQuoteElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <main ref={containerRef} className="min-h-screen py-16">
      <h1
        ref={titleRef}
        className="text-foreground global-px text-4xl font-bold"
      >
        Partnerships & Collaborations
      </h1>
      <section className="bg-foreground text-primary-foreground global-px mt-4 space-y-8 py-8">
        <p ref={introRef} className="">
          Collaboration lies at the heart of our mission. Together with our
          partners, we expand healthcare access, empower communities, and create
          lasting impact.
        </p>

        {/* Partner Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => (
            <div
              key={i}
              ref={(el) => addToPartnerCardsRef(el, i)}
              onMouseEnter={handlePartnerCardHover}
              onMouseLeave={handlePartnerCardHoverOut}
              className="cursor-pointer rounded-lg bg-white p-6 shadow-md hover:shadow-xl"
            >
              <div className="mb-3 flex justify-center">
                <p.icon className="text-primary" size={43} />
              </div>
              <h3 className="text-foreground text-center text-lg font-semibold">
                {p.name}
              </h3>
              <p className="mt-2 text-center text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <div className="global-px mt-16 space-y-8">
        <h2
          ref={testimonialsTitleRef}
          className="text-foreground text-center text-2xl font-semibold"
        >
          Voices from Our Partners
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              ref={(el) => addToTestimonialCardsRef(el, i)}
              onMouseEnter={handleTestimonialHover}
              onMouseLeave={handleTestimonialHoverOut}
              className="bg-primary-foreground border-foreground hover:border-primary cursor-pointer rounded-lg border p-6 italic shadow-md duration-300"
            >
              "{t.quote}"
              <footer className="text-primary mt-3 text-sm font-semibold not-italic">
                — {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div ref={ctaRef} className="mt-20 text-center">
        <h3 className="text-foreground text-2xl font-semibold">
          Want to Partner with Us?
        </h3>
        <p className="mt-2 text-gray-700">
          Join our growing network of partners committed to improving health and
          dignity across Africa.
        </p>
        <SiteLink
          className="text-primary-foreground mt-3 inline-block rounded-full px-8 py-3 font-semibold transition"
          link="/contact"
        >
          Become a Partner
        </SiteLink>
      </div>
    </main>
  );
};

export default PartnershipsPage;
