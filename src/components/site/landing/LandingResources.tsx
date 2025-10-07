"use client";

import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import SiteTitle from "@/components/common/site/site-title";
import { resources } from "@/lib/const/resources-const";
import { formatDate } from "@/lib/utils/formatDate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LandingResources = () => {
  // Refs for animation elements
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const resourceCardsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Resource cards animation
      resourceCardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // Hover animation
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

      // CTA button animation
      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Function to add resource cards to refs array
  const addResourceCardToRefs = (el: HTMLDivElement | null) => {
    if (el && !resourceCardsRef.current.includes(el)) {
      resourceCardsRef.current.push(el);
    }
  };

  return (
    <section className="global-px" ref={containerRef}>
      <SiteTitle ref={titleRef}>Resources</SiteTitle>
      <main className="mt-8 grid w-full grid-cols-3 gap-4">
        {resources.map((item, i) => (
          <div
            key={i}
            ref={addResourceCardToRefs}
            className="relative h-80 w-full cursor-pointer duration-200"
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
                {formatDate(item.uploadedAt)}
              </span>
            </div>
          </div>
        ))}
      </main>
      <div ref={ctaRef} className="mt-8 flex items-center justify-center">
        <SiteLink link="/impact/stories">Read more</SiteLink>
      </div>
    </section>
  );
};

export default LandingResources;
