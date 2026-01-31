"use client"; // Add this since we're using client-side animations

import MyImage from "@/components/common/images/MyImage";
import { leaders } from "@/lib/const/member-const";
import gsap from "gsap";
import { Metadata } from "next";
import { useLayoutEffect, useRef } from "react";

export const metaData: Metadata = {
  title: "Founder - saint theresa foundation",
};

const AboutFounderPage = () => {
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const bioRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(nameRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          roleRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .from(
          bioRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.2",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="global-px pt-8" ref={containerRef}>
      <div className="flex flex-row gap-3">
        <MyImage
          src={leaders[0].image}
          alt={leaders[0].name}
          className="h-80 min-w-60 object-cover"
          useSkeleton
        />
        <div className="">
          <h4 ref={nameRef} className="font-semibold">
            {leaders[0].name}
          </h4>
          <span ref={roleRef} className="text-primary text-sm">
            {leaders[0].role}
          </span>
          <p ref={bioRef} className="mt-4 max-w-xl">
            {leaders[0].bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounderPage;
