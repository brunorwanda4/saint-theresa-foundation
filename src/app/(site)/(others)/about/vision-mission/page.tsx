"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const AboutVisionMissionPage = () => {
  // Create refs for all animated elements
  const titleRef = useRef(null);
  const mandateRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const principlesRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for sequenced animations
      const tl = gsap.timeline();

      // Animate main title
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        // Animate mandate section
        .from(
          mandateRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3",
        )
        // Animate mission section
        .from(
          missionRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2",
        )
        // Animate values section
        .from(
          valuesRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2",
        )
        // Animate principles section
        .from(
          principlesRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="from-primary-foreground mx-auto max-w-7xl space-y-12 bg-gradient-to-b to-gray-200 px-6 py-16 md:px-12"
    >
      <section id="vision-mission" className="space-y-6">
        <h1 ref={titleRef} className="text-4xl font-bold">
          Mission & Values
        </h1>

        <div className="space-y-6 leading-relaxed text-gray-700">
          {/* Our mandate */}
          <div ref={mandateRef}>
            <h2 className="mb-2 text-2xl font-semibold">Our Mandate</h2>
            <p>Our mandate is to:</p>
            <ol className="ml-4 list-inside list-decimal space-y-2">
              <li>
                Improve access to healthcare for underserved rural communities
                through mobile clinics, community pharmacies, and digital health
                services.
              </li>
              <li>
                Empower local communities and health workers with training,
                resources, and sustainable solutions.
              </li>
            </ol>
          </div>

          {/* Our mission */}
          <div ref={missionRef}>
            <h2 className="mb-2 text-2xl font-semibold">Our Mission</h2>
            <p>
              The Sainte Thérèse Foundation is committed to enhancing the
              well-being of underserved communities by deploying mobile
              healthcare, digital medical tools, and sustainable community
              pharmacies. We are guided by human dignity, compassion, and
              Christian values, working to ensure equitable access to essential
              health services.
            </p>
          </div>

          {/* Our values */}
          <div ref={valuesRef}>
            <h2 className="mb-2 text-2xl font-semibold">Our Values</h2>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Compassion: Caring for the vulnerable with empathy and respect.
              </li>
              <li>
                Dignity: Treating every individual with fairness and humanity.
              </li>
              <li>
                Solidarity: Collaborating with communities and partners for
                lasting impact.
              </li>
              <li>
                Integrity: Acting transparently, ethically, and responsibly.
              </li>
              <li>
                Participation: Engaging communities in decision-making and
                healthcare solutions.
              </li>
            </ul>
          </div>

          {/* Our working principles */}
          <div ref={principlesRef}>
            <h2 className="mb-2 text-2xl font-semibold">
              Our Working Principles
            </h2>
            <p>We adhere to principles that guide our work and interactions:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Inclusive and consultative in decision-making.</li>
              <li>Respectful of local culture and needs.</li>
              <li>Transparent, honest, and accountable.</li>
              <li>Knowledge-driven and results-oriented.</li>
              <li>Empathetic and caring in our approach.</li>
              <li>
                Innovative, always seeking better ways to serve communities.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutVisionMissionPage;
