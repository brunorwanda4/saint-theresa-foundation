"use client";
import MyImage from "@/components/common/images/MyImage";
import { works } from "@/lib/data/works";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const workCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Header container animation
      gsap.fromTo(
        headerRef.current,
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
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Description animation
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
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Work cards animation with masonry-like stagger
      workCardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Calculate row and column for different entrance effects
        const row = Math.floor(index / 3);
        const col = index % 3;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            scale: 0.85,
            rotationY: col === 0 ? -15 : col === 2 ? 15 : 0,
            x: col === 0 ? -40 : col === 2 ? 40 : 0,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            x: 0,
            duration: 0.8,
            delay: row * 0.1 + col * 0.15,
            ease: "back.out(1.3)",
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
            y: -8,
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Function to add work cards to refs array
  const addWorkCardToRefs = (el: HTMLDivElement | null) => {
    if (el && !workCardsRef.current.includes(el)) {
      workCardsRef.current.push(el);
    }
  };

  return (
    <main className="min-h-screen py-8" ref={containerRef}>
      <div ref={headerRef} className="global-px mb-8 max-w-5xl">
        <h1 ref={titleRef} className="text-foreground mb-2 text-4xl font-bold">
          Our Work
        </h1>
        <p ref={descriptionRef} className="max-w-2xl leading-relaxed">
          The Sainte Thérèse Foundation is a faith-inspired health organization
          dedicated to transforming lives through compassionate care, education,
          and empowerment. From humble beginnings, we've grown into a movement
          of service across Rwanda.
        </p>
      </div>

      <div className="global-px mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
        {works.map((item, i) => (
          <div
            key={i}
            ref={addWorkCardToRefs}
            className="relative h-96 w-full cursor-pointer overflow-hidden rounded-lg shadow-lg duration-200"
          >
            <MyImage
              original
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300"
              src={item.img}
              alt={item.title}
            />
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h2 className="text-primary-foreground text-xl font-semibold">
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-blue-200"
                >
                  {item.title}
                </Link>
              </h2>
              <p className="text-primary-foreground mb-2">{item.desc}</p>
              <Link
                href={item.href}
                className="text-primary-foreground font-medium transition-colors duration-200 hover:text-blue-200 hover:underline"
              >
                Explore →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
