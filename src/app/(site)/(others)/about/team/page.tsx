"use client";

import HoverImage from "@/components/common/images/hover-image";
import { leaders, teamMembers } from "@/lib/const/member-const";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OurTeamPage = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const leadersHeadingRef = useRef<HTMLHeadingElement>(null);
  const teamHeadingRef = useRef<HTMLHeadingElement>(null);
  const leadersSectionRef = useRef<HTMLElement>(null);
  const teamSectionRef = useRef<HTMLElement>(null);
  const leaderCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const teamCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Page heading animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Leaders section heading
      if (leadersHeadingRef.current) {
        gsap.fromTo(
          leadersHeadingRef.current,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leadersSectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Leaders cards
      const validLeaderCards = leaderCardsRef.current.filter(
        Boolean,
      ) as HTMLDivElement[];
      if (validLeaderCards.length > 0) {
        gsap.fromTo(
          validLeaderCards,
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: leadersSectionRef.current,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Team section heading
      if (teamHeadingRef.current) {
        gsap.fromTo(
          teamHeadingRef.current,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: teamSectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Team cards
      const validTeamCards = teamCardsRef.current.filter(
        Boolean,
      ) as HTMLDivElement[];
      if (validTeamCards.length > 0) {
        gsap.fromTo(
          validTeamCards,
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: teamSectionRef.current,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper functions remain the same...
  const addToLeaderRefs = (el: HTMLDivElement | null, index: number) => {
    leaderCardsRef.current[index] = el;
  };

  const addToTeamRefs = (el: HTMLDivElement | null, index: number) => {
    teamCardsRef.current[index] = el;
  };

  return (
    <main
      ref={containerRef}
      className="mx-auto max-w-7xl space-y-20 px-6 py-16 md:px-12"
    >
      {/* Page Heading */}
      <section ref={headingRef}>
        <h1 className="mb-4 text-4xl font-bold">Our Team</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Meet the dedicated professionals and leaders who drive the Sainte
          Thérèse Foundation's mission to improve healthcare access for
          underserved communities in Rwanda.
        </p>
      </section>

      {/* Leaders */}
      <section ref={leadersSectionRef} id="leaders" className="space-y-8">
        <h2 ref={leadersHeadingRef} className="mb-6 text-3xl font-semibold">
          Leaders
        </h2>
        <div className="flex flex-row flex-wrap gap-8">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              ref={(el) => addToLeaderRefs(el, index)}
              className="flex flex-row gap-3"
            >
              <HoverImage
                src1={leader.image}
                src2={leader.image2}
                alt={leader.name}
              />
              <div className="">
                <h4 className="font-semibold">{leader.name}</h4>
                <span className="text-primary text-sm">{leader.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section ref={teamSectionRef} id="team-members" className="space-y-8">
        <h2 ref={teamHeadingRef} className="mb-6 text-3xl font-semibold">
          Team Members
        </h2>
        <div className="flex flex-row flex-wrap gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => addToTeamRefs(el, index)}
              className="flex flex-row items-start gap-3"
            >
              <HoverImage
                src1={member.image}
                src2={member.image2}
                alt={member.name}
              />
              <div className="">
                <h4 className="font-semibold">{member.name}</h4>
                <span className="text-primary text-sm">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default OurTeamPage;
