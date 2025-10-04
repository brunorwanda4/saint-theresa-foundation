"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const gallery = [
  {
    src: "/images/gallery/clinic1.jpg",
    caption: "Mobile clinic in Nyamasheke",
  },
  { src: "/images/gallery/clinic2.jpg", caption: "Health check in rural area" },
  { src: "/images/gallery/pharmacy.jpg", caption: "Community pharmacy team" },
  {
    src: "/images/gallery/training.jpg",
    caption: "Youth health leadership training",
  },
  {
    src: "/images/gallery/awareness.jpg",
    caption: "Public health education event",
  },
  {
    src: "/images/gallery/digital.jpg",
    caption: "Digital consultation in progress",
  },
];

export default function GalleryPage() {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-sky-50 to-white px-6 py-20">
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <h1 className="mb-3 text-4xl font-bold text-sky-700">
          Photo & Video Gallery
        </h1>
        <p className="text-gray-600">
          A glimpse into our work and the lives touched by the Sainte Thérèse
          Foundation.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3">
        {gallery.map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
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

      <div className="mx-auto mt-16 max-w-4xl">
        <video
          className="w-full rounded-3xl shadow-lg"
          controls
          poster="/images/gallery/video-thumb.jpg"
        >
          <source src="/videos/impact-story.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="mt-3 text-center text-gray-600">
          Watch our 2025 field story documentary.
        </p>
      </div>
    </section>
  );
}
