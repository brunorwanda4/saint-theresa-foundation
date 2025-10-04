"use client";
import { motion } from "framer-motion";

export default function MilestonesPage() {
  const milestones = [
    {
      title: "Community Outreach Launched",
      year: "2025",
      desc: "Over 3,000 rural residents reached through mobile clinic services.",
    },
    {
      title: "Digital Health Pilot Success",
      year: "2026",
      desc: "Telemedicine consultations reduce travel time by 70%.",
    },
    {
      title: "Youth Training Initiative",
      year: "2026",
      desc: "50 young leaders trained as community health educators.",
    },
    {
      title: "Regional Expansion",
      year: "2027",
      desc: "Sainte Thérèse Foundation operational in 5 Rwandan districts.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-bl from-emerald-50 to-white px-8 py-16">
      <div className="mx-auto mb-10 max-w-5xl text-center">
        <h1 className="mb-3 text-4xl font-bold text-emerald-700">
          Our Milestones
        </h1>
        <p className="text-gray-600">
          Tracking progress in our journey to serve with compassion and impact.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {milestones.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-md hover:shadow-lg"
          >
            <span className="text-sm font-semibold text-emerald-600 uppercase">
              {m.year}
            </span>
            <h2 className="mt-2 text-xl font-semibold text-emerald-800">
              {m.title}
            </h2>
            <p className="mt-2 text-gray-600">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
