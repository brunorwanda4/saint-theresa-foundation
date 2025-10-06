"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const gallery = [
  {
    src: "/images/image-4.jpeg",
    caption: "Mobile clinic in Nyamasheke",
  },
  {
    src: "/images/image-7-a.jpeg",
    caption: "Health check in rural area",
  },
  { src: "/images/image-8-a.jpeg", caption: "Community pharmacy team" },
  {
    src: "/images/image-9-a.jpeg",
    caption: "Youth health leadership training",
  },
  {
    src: "/images/image-10-a.jpeg",
    caption: "Public health education event",
  },
  {
    src: "/images/image-11.jpeg",
    caption: "Digital consultation in progress",
  },
];

export default function GalleryPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const reduce = useReducedMotion();

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    v.controls = true;
    setIsPlaying(true);
  };
  return (
    <section className="global-px min-h-screen py-20">
      <div className="mb-12 space-y-2">
        <h1 className="text-foreground text-4xl font-bold">
          Photo & Video Gallery
        </h1>
        <p>
          A glimpse into our work and the lives touched by the Sainte Thérèse
          Foundation.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {gallery.map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden shadow-lg"
          >
            <Image
              src={item.src}
              alt={item.caption}
              width={500}
              height={400}
              className="h-60 w-full transform object-cover transition group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
              <p className="font-medium text-white">{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.98 }}
          whileInView={
            reduce
              ? undefined
              : {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.35, ease: "easeOut" },
                }
          }
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
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
              type="button"
              onClick={handlePlay}
              aria-label="Play mission video"
              className="absolute inset-0 grid place-items-center rounded-lg bg-black/30 transition-colors hover:bg-black/40"
            >
              <span className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 font-medium text-black shadow-lg">
                <Play className="h-5 w-5" />
                Play video
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
