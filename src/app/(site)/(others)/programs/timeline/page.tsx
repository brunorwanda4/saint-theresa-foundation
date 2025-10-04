"use client";

import { motion } from "framer-motion";

export default function TimelinePage() {
  const timeline = [
    {
      year: "2025",
      items: [
        "Launch of community health awareness campaigns",
        "Deployment of 2 new mobile clinics in rural sectors",
        "Start of school-based nutrition program",
      ],
    },
    {
      year: "2026",
      items: [
        "Establish regional community pharmacy centers",
        "Digital health platform pilot (telemedicine app)",
        "Youth leadership & health ambassador program",
      ],
    },
    {
      year: "2027",
      items: [
        "Expansion to 5 districts with stable funding",
        "Launch of Sainte Thérèse Health Research Center",
        "Publish impact report & 2030 vision roadmap",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-50 to-white px-6 py-16">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <h1 className="mb-2 text-4xl font-bold text-rose-700">
          2025–2027 Action Timeline
        </h1>
        <p className="text-gray-600">
          Our 3-year roadmap for sustainable community health and empowerment.
        </p>
      </div>

      <div className="relative space-y-10 border-l-4 border-rose-300 pl-8">
        {timeline.map((year, idx) => (
          <motion.div
            key={year.year}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="relative"
          >
            <span className="absolute top-2 -left-6 h-4 w-4 rounded-full bg-rose-600"></span>
            <h2 className="text-2xl font-semibold text-rose-700">
              {year.year}
            </h2>
            <ul className="mt-2 ml-5 list-disc space-y-1 text-gray-700">
              {year.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
