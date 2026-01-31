"use client";
import { gallery } from "@/lib/data/gallery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

export default function GalleryPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const galleryItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const videoButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const addToGalleryItemsRef = (el: HTMLDivElement | null, index: number) => {
    galleryItemsRef.current[index] = el;
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title and description animation (immediate)
      const tl = gsap.timeline();
      tl.from(titleRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }).from(
        descriptionRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      );

      // Gallery items animation on scroll
      gsap.from(galleryItemsRef.current, {
        scrollTrigger: {
          trigger: ".grid",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.4)",
      });

      // Video section animation
      gsap.from(videoSectionRef.current, {
        scrollTrigger: {
          trigger: videoSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        scale: 0.98,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    v.controls = true;
    setIsPlaying(true);

    // Animate the play button away
    if (videoButtonRef.current) {
      gsap.to(videoButtonRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          if (videoButtonRef.current) {
            videoButtonRef.current.style.display = "none";
          }
        },
      });
    }
  };

  // Hover animations (same as above)
  const handleGalleryHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const image = e.currentTarget.querySelector("img");
    const overlay = e.currentTarget.querySelector(".gallery-overlay");

    gsap
      .timeline()
      .to(image, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out",
      })
      .to(
        overlay,
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        0,
      );
  };

  const handleGalleryHoverOut = (e: React.MouseEvent<HTMLDivElement>) => {
    const image = e.currentTarget.querySelector("img");
    const overlay = e.currentTarget.querySelector(".gallery-overlay");

    gsap
      .timeline()
      .to(image, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      })
      .to(
        overlay,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        0,
      );
  };

  const handleVideoButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleVideoButtonHoverOut = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <section ref={containerRef} className="global-px min-h-screen py-20">
      <div className="mb-12 space-y-2">
        <h1 ref={titleRef} className="text-foreground text-4xl font-bold">
          Photo & Video Gallery
        </h1>
        <p ref={descriptionRef}>
          A glimpse into our work and the lives touched by the Sainte Thérèse
          Foundation.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {gallery.map((item, i) => (
          <div
            key={item.src}
            ref={(el) => addToGalleryItemsRef(el, i)}
            onMouseEnter={handleGalleryHover}
            onMouseLeave={handleGalleryHoverOut}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={item.src}
              alt={item.caption}
              width={500}
              height={400}
              className="h-60 w-full transform object-cover transition"
            />
            <div className="gallery-overlay absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition">
              <p className="px-4 text-center font-medium text-white">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div ref={videoSectionRef} className="mt-8">
        <div className="relative">
          <video
            ref={videoRef}
            className="w-full rounded-lg shadow-xl"
            poster="/images/image-11.jpeg"
            preload="metadata"
          >
            <source src="/videos/video-1.mp4" type="video/mp4" />
          </video>
          {!isPlaying && (
            <button
              ref={videoButtonRef}
              type="button"
              onClick={handlePlay}
              onMouseEnter={handleVideoButtonHover}
              onMouseLeave={handleVideoButtonHoverOut}
              aria-label="Play mission video"
              className="absolute inset-0 grid place-items-center rounded-lg bg-black/30 transition-colors"
            >
              <span className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 font-medium text-black shadow-lg">
                <Play className="h-5 w-5" />
                Play video
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
