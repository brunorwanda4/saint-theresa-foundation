"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Timeline 2025–2027",
      desc: "A roadmap for progress — from expanding rural clinics to scaling digital health services.",
      href: "/programs/timeline",
    },
    {
      title: "Budget Overview",
      desc: "An outline of the resources needed to sustain our three-year mission plan.",
      href: "/programs/budget",
    },
    {
      title: "Milestones",
      desc: "Celebrating every achievement and measuring our growth along the way.",
      href: "/programs/milestones",
    },
  ];

  return (
    <main className="global-px min-h-screen py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="global-px mx-auto mb-8 max-w-5xl items-center text-center"
      >
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Programs & Action Plan
        </h1>
        <p className="">
          Every project of the Sainte Thérèse Foundation aligns with a vision of
          sustainable healthcare, education, and community empowerment. Our plan
          ensures that faith-driven compassion translates into measurable,
          lasting impact.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="site-card"
          >
            <h2 className="mb-2 text-xl font-semibold">
              <Link href={p.href}>{p.title}</Link>
            </h2>
            <p className="mb-3">{p.desc}</p>
            <Link href={p.href} className="font-medium hover:underline">
              Learn more →
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
