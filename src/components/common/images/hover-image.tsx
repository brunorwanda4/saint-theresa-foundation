"use client";
import MyImage from "@/components/common/images/MyImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HoverImage = ({
  src1,
  src2,
  alt,
}: {
  src1: string;
  src2: string;
  alt: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const img1 = image1Ref.current;
    const img2 = image2Ref.current;

    if (!container || !img1 || !img2) return;

    gsap.set(img2, { x: "-100%", opacity: 0 });

    const onEnter = () => {
      gsap.to(img1, {
        x: "100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(img2, {
        x: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power3.inOut",
      });
    };

    const onLeave = () => {
      gsap.to(img1, {
        x: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(img2, {
        x: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
    };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-80 w-60 overflow-hidden">
      <div ref={image1Ref} className="absolute inset-0">
        <MyImage
          src={src1}
          alt={alt}
          className="h-full w-full object-cover"
          useSkeleton
        />
      </div>
      <div ref={image2Ref} className="absolute inset-0">
        <MyImage
          src={src2}
          alt={alt}
          className="h-full w-full object-cover"
          useSkeleton
        />
      </div>
    </div>
  );
};

export default HoverImage;
