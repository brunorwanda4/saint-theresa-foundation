"use client";
import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import SiteTitle from "@/components/common/site/site-title";
import { biography } from "@/lib/const/biographies-const";
import { formatDate } from "@/lib/utils/formatDate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LandingBiography = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const linkRef = useRef<HTMLDivElement>(null);

  // Add to cards ref array
  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Section animation
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Cards animation
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
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Link animation
    if (linkRef.current) {
      gsap.fromTo(
        linkRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: linkRef.current,
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
    <section ref={sectionRef} className="global-px">
      <SiteTitle ref={titleRef}>Biography</SiteTitle>
      <main className="mt-8 grid grid-cols-3 gap-4">
        {biography.map((item, i) => (
          <div
            key={i}
            ref={addToCardsRef}
            className="relative h-80 w-full duration-200 hover:scale-105"
          >
            <MyImage
              src={item.image}
              original
              loading="lazy"
              className="h-full w-full"
            />
            <div className="absolute bottom-0 h-30 w-full bg-blue-950/70 px-4 py-2">
              <h4 className="text-primary-foreground font-medium">
                <Link href={`/resource/${item.id}`}>{item.title}</Link>
              </h4>
              <span className="text-primary-foreground text-sm">
                {formatDate(item.publishedAt)}
              </span>
            </div>
          </div>
        ))}
      </main>
      <div ref={linkRef} className="mt-8 flex items-center justify-center">
        <SiteLink link="/biography/outreach">Read more</SiteLink>
      </div>
    </section>
  );
};

export default LandingBiography;
