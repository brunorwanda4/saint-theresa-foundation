"use client";

import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import gsap from "gsap";
import { Calendar, MapPin } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

export default function ConferencesBioPage() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const conferencesSectionRef = useRef<HTMLElement>(null);
  const conferencesHeadingRef = useRef<HTMLHeadingElement>(null);
  const conferenceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const speakersSectionRef = useRef<HTMLElement>(null);
  const speakersHeadingRef = useRef<HTMLHeadingElement>(null);
  const speakerCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const advocacySectionRef = useRef<HTMLElement>(null);
  const advocacyHeadingRef = useRef<HTMLHeadingElement>(null);
  const advocacyTextRef = useRef<HTMLParagraphElement>(null);
  const advocacyButtonRef = useRef<HTMLAnchorElement>(null);

  const conferences = [
    {
      title: "Rwanda National Health Summit 2025",
      location: "Kigali Convention Centre",
      date: "March 2025",
      description:
        "Presented our digital community pharmacy system improving rural access to medicine.",
      image: "/images/image-1-a.jpg",
    },
    {
      title: "East African Faith & Health Forum",
      location: "Kigali, Rwanda",
      date: "July 2024",
      description:
        "Shared insights on how faith-based organizations enhance health equity in underserved areas.",
      image: "/images/nurse.jpg",
    },
    {
      title: "Global Digital Health Conference",
      location: "Kigali, Rwanda",
      date: "November 2023",
      description:
        "Showcased our telemedicine pilot in remote districts supported by our partners.",
      image: "/images/digital-health.jpg",
    },
  ];

  const speakers = [
    {
      name: "Dr. Marie Mukamana",
      role: "Medical Director",
      image: "/images/founder.jpg",
      bio: "Advocate for maternal health and faith-driven care, with 10+ years of experience in rural clinics.",
    },
    {
      name: "Fr. Emmanuel Habimana",
      role: "Spiritual Advisor",
      image: "/images/anita.webp",
      bio: "Keynote speaker on the moral dimensions of health and compassion-based service.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline
      const tl = gsap.timeline();

      // Header animation
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        );
      }

      // Conferences section
      if (conferencesHeadingRef.current) {
        tl.fromTo(
          conferencesHeadingRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3",
        );
      }

      // Conference cards animation
      const validConferenceCards = conferenceCardsRef.current.filter(
        Boolean,
      ) as HTMLDivElement[];
      if (validConferenceCards.length > 0) {
        tl.fromTo(
          validConferenceCards,
          {
            y: 60,
            opacity: 0,
            scale: 0.8,
            rotationY: 15,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            stagger: {
              amount: 0.6,
              from: "start",
            },
            ease: "back.out(1.5)",
          },
        );
      }

      // Speakers section
      if (speakersHeadingRef.current) {
        tl.fromTo(
          speakersHeadingRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.2",
        );
      }

      // Speaker cards animation
      const validSpeakerCards = speakerCardsRef.current.filter(
        Boolean,
      ) as HTMLDivElement[];
      if (validSpeakerCards.length > 0) {
        tl.fromTo(
          validSpeakerCards,
          {
            y: 50,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
          },
        );
      }

      // Advocacy section
      if (advocacyHeadingRef.current) {
        tl.fromTo(
          advocacyHeadingRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3",
        );
      }

      if (advocacyTextRef.current) {
        tl.fromTo(
          advocacyTextRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
      }

      if (advocacyButtonRef.current) {
        tl.fromTo(
          advocacyButtonRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.2",
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper functions for ref assignments
  const addToConferenceRefs = (el: HTMLDivElement | null, index: number) => {
    conferenceCardsRef.current[index] = el;
  };

  const addToSpeakerRefs = (el: HTMLDivElement | null, index: number) => {
    speakerCardsRef.current[index] = el;
  };

  return (
    <main ref={containerRef} className="min-h-screen py-8">
      {/* Header */}
      <div ref={headerRef} className="global-px mb-8 max-w-5xl">
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Conferences & Advocacy
        </h1>
        <p className="">
          We actively share our mission, research, and innovations in health
          forums across Rwanda and the globe. Our team contributes to shaping
          discussions on faith-based care, digital health, and sustainable
          community medicine.
        </p>
      </div>

      {/* Conferences Section */}
      <section
        ref={conferencesSectionRef}
        className="global-px text-primary-foreground items-center gap-10"
      >
        <h2
          ref={conferencesHeadingRef}
          className="text-primary-foreground mb-6 text-2xl font-semibold"
        >
          Major Conferences & Forums
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {conferences.map((conf, i) => (
            <div
              key={i}
              ref={(el) => addToConferenceRefs(el, i)}
              className="relative h-80 w-full duration-200 hover:scale-105"
            >
              <MyImage
                original
                loading="lazy"
                className="h-full w-full"
                src={conf.image}
              />
              <div className="absolute bottom-0 h-fit w-full space-y-1 bg-blue-950/70 px-4 py-2">
                <h3 className="text-primary-foreground text-lg font-bold">
                  {conf.title}
                </h3>
                <p className="flex items-center gap-2 text-sm">
                  <Calendar size={16} /> {conf.date}
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <MapPin size={16} /> {conf.location}
                </p>
                <p className="text-sm">{conf.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speaker Highlights */}
      <section ref={speakersSectionRef} className="global-px mt-20 max-w-6xl">
        <h2 ref={speakersHeadingRef} className="mb-6 text-2xl font-semibold">
          Our Speakers & Advocates
        </h2>
        <main className="grid gap-8 md:grid-cols-2">
          {speakers.map((sp, i) => (
            <div
              key={i}
              ref={(el) => addToSpeakerRefs(el, i)}
              className="relative h-96 w-full duration-200 hover:scale-105"
            >
              <MyImage
                original
                loading="lazy"
                className="h-full w-full"
                src={sp.image}
              />
              <div className="absolute bottom-0 h-fit w-full bg-blue-950/70 px-4 py-2">
                <h3 className="text-primary-foreground font-medium">
                  {sp.name}
                </h3>
                <p className="text-primary-foreground text-sm">{sp.role}</p>
                <p className="text-primary-foreground mt-1 text-sm">{sp.bio}</p>
              </div>
            </div>
          ))}
        </main>
      </section>

      {/* Advocacy Focus */}
      <section
        ref={advocacySectionRef}
        className="bg-foreground mt-20 py-8 text-center"
      >
        <h2
          ref={advocacyHeadingRef}
          className="text-primary-foreground mb-3 text-2xl font-semibold"
        >
          Advocacy for Change
        </h2>
        <p
          ref={advocacyTextRef}
          className="text-primary-foreground mx-auto max-w-3xl"
        >
          Our advocacy programs focus on empowering local leaders to champion
          community-driven health initiatives. Through workshops, radio
          discussions, and public health education, we influence health policy
          and inspire compassion-based service delivery.
        </p>
        <div className="mt-8 text-center">
          <SiteLink
            ref={advocacyButtonRef}
            className="text-primary-foreground mt-3 inline-block rounded-full px-8 py-3 font-semibold transition"
            link="/contact"
          >
            Join Our Next Conference
          </SiteLink>
        </div>
      </section>
    </main>
  );
}
