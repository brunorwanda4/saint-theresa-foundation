"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function PrivacyPolicyPage() {
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef(null);

  const addToSectionRefs = (el: HTMLDivElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  const addToListItemsRef = (el: HTMLLIElement | null, index: number) => {
    listItemsRef.current[index] = el;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate title and introduction
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          introRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3",
        )
        // Animate sections
        .from(
          sectionRefs.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.2",
        )
        // Animate list items with smaller stagger
        .from(
          listItemsRef.current,
          {
            x: -20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power1.out",
          },
          "-=0.3",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="global-px min-h-screen py-16">
      <div className="mx-auto max-w-4xl">
        <h1 ref={titleRef} className="mb-6 text-4xl font-bold">
          Privacy Policy
        </h1>
        <p ref={introRef} className="mb-6">
          Sainte Thérèse Foundation values your privacy. This policy outlines
          how we collect, use, and protect your information.
        </p>

        <div ref={(el) => addToSectionRefs(el, 0)}>
          <h2 className="mt-8 mb-2 text-2xl font-semibold">
            Information We Collect
          </h2>
          <ul className="list-inside list-disc text-gray-600">
            <li ref={(el) => addToListItemsRef(el, 0)}>
              Personal information you provide (name, email, donation data)
            </li>
            <li ref={(el) => addToListItemsRef(el, 1)}>
              Non-personal data such as browser type and usage statistics
            </li>
          </ul>
        </div>

        <div ref={(el) => addToSectionRefs(el, 1)}>
          <h2 className="mt-8 mb-2 text-2xl font-semibold">
            How We Use Information
          </h2>
          <p className="text-gray-600">
            We use your information to communicate updates, process donations,
            and improve our website. Your data will not be shared with third
            parties without your consent.
          </p>
        </div>

        <div ref={(el) => addToSectionRefs(el, 2)}>
          <h2 className="mt-8 mb-2 text-2xl font-semibold">Security</h2>
          <p className="text-gray-600">
            We employ appropriate technical and organizational measures to
            protect personal data against unauthorized access or misuse.
          </p>
        </div>

        <div ref={(el) => addToSectionRefs(el, 3)}>
          <h2 className="mt-8 mb-2 text-2xl font-semibold">Your Rights</h2>
          <p className="text-gray-600">
            You may request to access, correct, or delete your data at any time
            by contacting us at info@sainte-therese.org.
          </p>
        </div>

        <div ref={(el) => addToSectionRefs(el, 4)}>
          <p className="mt-10 text-gray-600">Last updated: October 2025</p>
        </div>
      </div>
    </div>
  );
}
