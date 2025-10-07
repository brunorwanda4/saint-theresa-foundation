"use client";

import { LandingLinks } from "@/lib/const/landing-link-const";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

const LandingLink = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const icons = gsap.utils.toArray<HTMLDivElement>(".landing-icon");

    icons.forEach((icon) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(icon, {
        y: -10,
        duration: 0.4,
        ease: "power2.out",
      });

      // hover in/out
      icon.addEventListener("mouseenter", () => tl.play());
      icon.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="global-px grid grid-cols-2 gap-8 lg:grid-cols-4"
    >
      {LandingLinks.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="flex flex-col items-center">
            <div className="landing-icon cursor-pointer">
              <Link href={item.href}>
                <Icon className="text-primary" />
              </Link>
            </div>
            <h4 className="mt-2 text-lg font-bold">
              <Link href={item.href}>{item.title}</Link>
            </h4>
            <p className="text-center text-sm text-gray-600 max-sm:text-sm">
              {item.description}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default LandingLink;
