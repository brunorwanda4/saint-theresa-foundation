"use client";

import MyImage from "@/components/common/images/MyImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TrainingPage = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const contentSectionRef = useRef<HTMLElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const focusHeadingRef = useRef<HTMLHeadingElement>(null);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Main heading with scroll trigger
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: -50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Introduction paragraph
      if (introRef.current) {
        gsap.fromTo(
          introRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Content section container
      if (contentSectionRef.current) {
        gsap.fromTo(
          contentSectionRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Text content
      if (textContentRef.current) {
        gsap.fromTo(
          textContentRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textContentRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Focus areas heading
      if (focusHeadingRef.current) {
        gsap.fromTo(
          focusHeadingRef.current,
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: focusHeadingRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // List items
      const validListItems = listItemsRef.current.filter(
        Boolean,
      ) as HTMLLIElement[];
      if (validListItems.length > 0) {
        gsap.fromTo(
          validListItems,
          { x: -30, opacity: 0, scale: 0.9 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: validListItems[0],
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Image with scroll trigger
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { x: 100, opacity: 0, scale: 0.8 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );

        // Continuous floating animation
        gsap.to(imageRef.current, {
          y: -15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToListItemsRefs = (el: HTMLLIElement | null, index: number) => {
    listItemsRef.current[index] = el;
  };

  return (
    <main ref={containerRef} className="min-h-screen py-16">
      <h1
        ref={headingRef}
        className="text-foreground global-px text-4xl font-bold"
      >
        Training & Empowerment
      </h1>
      <section
        ref={contentSectionRef}
        className="bg-foreground text-primary-foreground global-px mt-4 space-y-8 py-6"
      >
        <div className="space-y-8">
          <p ref={introRef} className="">
            Building local capacity through professional training for health
            workers and community leaders.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row">
          <div ref={textContentRef} className="flex-1 space-y-4">
            <h2
              ref={focusHeadingRef}
              className="text-primary-foreground text-2xl font-semibold"
            >
              Key Focus Areas
            </h2>
            <ul className="text-primary-content space-y-3">
              <li
                ref={(el) => addToListItemsRefs(el, 0)}
                className="cursor-pointer rounded-lg p-3 transition-all duration-300 hover:bg-white/10"
              >
                📚 Workshops on basic healthcare and disease prevention
              </li>
              <li
                ref={(el) => addToListItemsRefs(el, 1)}
                className="cursor-pointer rounded-lg p-3 transition-all duration-300 hover:bg-white/10"
              >
                🎯 Leadership and community mobilization skills
              </li>
              <li
                ref={(el) => addToListItemsRefs(el, 2)}
                className="cursor-pointer rounded-lg p-3 transition-all duration-300 hover:bg-white/10"
              >
                🌟 Continuous mentorship and certification programs
              </li>
            </ul>
          </div>
          <MyImage
            ref={imageRef}
            src="/images/training.jpg"
            alt="Training"
            className="h-80 w-full cursor-pointer object-cover shadow-md transition-transform duration-500 hover:scale-105 md:w-96"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default TrainingPage;
