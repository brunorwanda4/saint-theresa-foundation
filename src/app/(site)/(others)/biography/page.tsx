"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BiographyPage() {
  const bioLinks = [
    {
      title: "Community Outreach",
      desc: "Updates from rural outreach missions and mobile clinics bringing care to the most remote areas.",
      href: "/biography/outreach",
    },
    {
      title: "Workshops & Training",
      desc: "Highlights from our ongoing workshops for healthcare and nutrition education.",
      href: "/biography/training",
    },
    {
      title: "Conferences & Advocacy",
      desc: "Where we’ve represented our mission nationally and internationally to share our vision of faith-driven care.",
      href: "/biography/conferences",
    },
    {
      title: "Press Releases",
      desc: "Official announcements, media coverage, and publications featuring our initiatives.",
      href: "/biography/press",
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
          Biography & Events
        </h1>
        <p className="text-gray-700">
          The Sainte Thérèse Foundation continues to grow through faith,
          leadership, and community engagement. Explore how our work extends
          beyond clinics — through outreach, advocacy, and the sharing of hope.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-6">
        {bioLinks.map((item, i) => (
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
              Explore →
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
