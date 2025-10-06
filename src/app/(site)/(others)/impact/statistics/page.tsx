"use client";
import { motion } from "framer-motion";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const metaData: Metadata = {
  title: "Statistics - saint theresa foundation",
};

export default function StatisticsPage() {
  const stats = [
    {
      label: "Patients Served",
      value: 24500,
      color: "from-primary to-secondary bg-gradient-to-br",
    },
    {
      label: "Medicines Delivered",
      value: 80000,
      color: "to-primary from-secondary bg-gradient-to-br",
    },
    {
      label: "Communities Reached",
      value: 35,
      color: "from-primary to-secondary bg-gradient-to-tr",
    },
    {
      label: "Volunteers Engaged",
      value: 120,
      color: "from-primary to-secondary bg-gradient-to-tl",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((c, i) => Math.min(c + stats[i].value / 50, stats[i].value)),
      );
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const yearlyGrowth = [
    { year: "2021", patients: 6000 },
    { year: "2022", patients: 11000 },
    { year: "2023", patients: 18000 },
    { year: "2024", patients: 21000 },
    { year: "2025", patients: 24500 },
  ];

  const impactHighlights = [
    {
      title: "Maternal Health Access",
      desc: "Over 2,000 mothers received prenatal and postnatal care through our mobile clinics.",
      icon: "🩺",
    },
    {
      title: "Youth Health Programs",
      desc: "Health education sessions conducted in 25+ schools empowering 7,500 students.",
      icon: "🎓",
    },
    {
      title: "Digital Consultations",
      desc: "Our telehealth platform has supported over 4,000 consultations remotely.",
      icon: "💻",
    },
  ];

  const testimonials = [
    {
      name: "Marie, Community Nurse",
      quote:
        "I’ve seen how our small efforts make a big difference — the statistics remind us that hope grows with every life touched.",
    },
    {
      name: "Joseph, Program Manager",
      quote:
        "Each number here isn’t just data — it’s a child, a parent, a family who now has a chance at a healthier future.",
    },
  ];

  return (
    <section className="min-h-screen py-20">
      {/* Header */}
      <div className="global-px mb-8 max-w-5xl">
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Impact in Numbers
        </h1>
        <p className="">
          Every number represents a story — a healed patient, a supported
          family, a stronger community.
        </p>
      </div>

      <div className="global-px bg-foreground py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`${item.color} p-8 text-center font-semibold text-white shadow-lg`}
            >
              <p className="text-5xl font-bold">
                {Math.round(counts[i]).toLocaleString()}+
              </p>
              <p className="mt-2 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="mt-8 max-w-4xl">
          <h2 className="mb-2 text-2xl font-bold">Growth Over the Years</h2>
          <p className="text-primary-foreground mb-8">
            Our outreach and impact continue to expand each year, touching more
            lives and communities.
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={yearlyGrowth}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="patients"
                stroke="#0076bc"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="global-px mt-24 max-w-6xl">
        <h2 className="text-foreground mb-8 text-2xl font-bold">
          Program Highlights
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {impactHighlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border-foreground hover:border-primary bg-primary-foreground border p-6 shadow-md duration-200 hover:shadow-lg"
            >
              <div className="mb-3 text-4xl">{item.icon}</div>
              <h3 className="text-primary text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-foreground mt-24 px-6 py-12 text-center">
        <h2 className="text-primary-foreground mb-8 text-2xl font-bold">
          Voices Behind the Numbers
        </h2>
        <div className="flex flex-col justify-center gap-8 md:flex-row">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border-foreground hover:border-primary bg-primary-foreground max-w-md border p-6 shadow-md duration-200"
            >
              <p className="mb-3 italic">“{t.quote}”</p>
              <p className="text-primary font-semibold">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
