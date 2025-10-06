"use client";
import { motion } from "framer-motion";

export default function PressBioPage() {
  const releases = [
    { title: "Launch of Mobile Clinics Phase II", date: "July 2025" },
    { title: "Partnership with Diocesan Health Services", date: "May 2025" },
    {
      title: "Training Program for Digital Health Volunteers",
      date: "March 2025",
    },
  ];

  return (
    <section className="global-px min-h-screen py-8">
      <div className="mb-10 max-w-4xl text-center">
        <h1 className="mb-3 text-4xl font-bold">Press Releases</h1>
        <p className="">
          Official communications from the Sainte Thérèse Foundation.
        </p>
      </div>

      <div className="max-w-3xl space-y-6">
        {releases.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="border-l-4 border-gray-400 pl-4"
          >
            <h2 className="text-xl font-semibold">{r.title}</h2>
            <p className="text-sm text-gray-500">{r.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
