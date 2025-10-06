"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ImpactPage() {
  const items = [
    {
      title: "Statistics",
      desc: "Our numbers tell a story — lives touched, communities reached, and medicines delivered.",
      href: "/impact/statistics",
    },
    {
      title: "Stories",
      desc: "Personal journeys of healing, resilience, and transformation from the field.",
      href: "/impact/stories",
    },
    {
      title: "Photo & Video Gallery",
      desc: "See our impact in action — visual moments of service and compassion.",
      href: "/impact/gallery",
    },
  ];

  return (
    <main className="min-h-screen py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="global-px mx-auto mb-8 max-w-5xl items-center text-center"
      >
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Impact & Stories
        </h1>
        <div className="flex items-center justify-center">
          <p className="max-w-xl leading-relaxed">
            Behind every number is a human story. Our impact is measured not
            only by data but by the hope restored in the lives we touch every
            day.
          </p>
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="site-card"
          >
            <h2 className="mb-2 text-xl font-semibold">
              <Link href={item.href}>{item.title}</Link>
            </h2>
            <p className="mb-3">{item.desc}</p>
            <Link href={item.href} className="font-medium hover:underline">
              View →
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
