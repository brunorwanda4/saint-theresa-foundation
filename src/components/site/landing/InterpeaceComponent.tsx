"use client";

import SiteLink from "@/components/common/site/site-link";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const InterpeaceComponent = () => {
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (
      !containerRef.current ||
      !leftCardRef.current ||
      !rightCardRef.current ||
      !linkRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        leftCardRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          rightCardRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          linkRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.4)" },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "rgba(0, 0, 139, 0.1)",
      scale: 1.01,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleCardHoverOut = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "transparent",
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <section ref={containerRef} className="global-px">
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div
          ref={leftCardRef}
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardHoverOut}
          className="w-full space-y-4 rounded-lg p-4 duration-200 md:w-1/2"
        >
          <h2 className="text-4xl font-bold text-blue-950">Who We Are</h2>
          <p>
           The Sainte Thérèsa Foundation (STF) is a community-focused organization dedicated to promoting human dignity and community well-being through practical, compassionate, and sustainable healthcare interventions. We specialize in providing preventive healthcare and ensuring equitable access to essential health services for those who need them most.
          </p>
        </div>

        <div
          ref={rightCardRef}
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardHoverOut}
          className="w-full space-y-4 rounded-lg p-4 duration-200 md:w-1/2"
        >
          <h2 className="text-4xl font-bold text-blue-950">Our Mandate</h2>
          <p>
           The mandate of the Sainte Thérèsa Foundation (STF) is to promote human dignity and community well-being by ensuring equitable access to essential health services. The Foundation is committed to providing practical, compassionate, and sustainable interventions that focus on preventive healthcare and early disease detection.
          </p>
        </div>
      </div>
      <div ref={linkRef} className="mt-8 flex items-center justify-center">
        <SiteLink link="/programs">Our Peacebuilding Pillars</SiteLink>
      </div>
    </section>
  );
};

export default InterpeaceComponent;
