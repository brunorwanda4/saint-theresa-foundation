"use client";

import MyImage from "@/components/common/images/MyImage";
import { motion } from "framer-motion";
import { Award, MapPin, Target, Users2 } from "lucide-react";

export default function MilestonesPage() {
  const milestones = [
    {
      title: "Community Outreach Launched",
      year: "2025",
      desc: "Over 3,000 rural residents reached through mobile clinic services.",
      icon: Users2,
    },
    {
      title: "Digital Health Pilot Success",
      year: "2026",
      desc: "Telemedicine consultations reduced travel time by 70%.",
      icon: Target,
    },
    {
      title: "Youth Training Initiative",
      year: "2026",
      desc: "50 young leaders trained as community health educators.",
      icon: Award,
    },
    {
      title: "Regional Expansion",
      year: "2027",
      desc: "Sainte Thérèse Foundation operational in 5 Rwandan districts.",
      icon: MapPin,
    },
  ];

  return (
    <main className="min-h-screen py-16">
      {/* Header */}
      <section className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-foreground global-px text-4xl font-bold"
        >
          Our Milestones
        </motion.h1>
        <p className="global-px mt-3 max-w-3xl">
          Each milestone represents progress toward our shared mission —
          advancing health, dignity, and hope for every community we serve.
        </p>
      </section>

      {/* Milestone Cards */}
      <section className="global-px bg-foreground grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {milestones.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="border-foreground bg-primary-foreground relative overflow-hidden border p-6 shadow-md transition duration-200 hover:scale-105 hover:shadow-xl"
          >
            <div className="absolute inset-0 opacity-50"></div>
            <div className="relative z-10">
              <div className="mb-2 flex items-center gap-3">
                <m.icon size={24} className="text-primary" />
                <span className="text-primary text-sm font-semibold uppercase">
                  {m.year}
                </span>
              </div>
              <h2 className="text-foreground text-xl font-semibold">
                {m.title}
              </h2>
              <p className="mt-2">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Highlight Section */}
      <section className="mx-auto mt-20 grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-foreground mb-3 text-3xl font-semibold">
            Driven by Compassion and Results
          </h2>
          <p className="mb-4">
            Our team of volunteers, doctors, and community leaders continues to
            make a measurable difference. Together, we’re building a foundation
            for better health and stronger futures.
          </p>
          <p className="">
            With your help, the next milestones will go even further — reaching
            more families and transforming lives.
          </p>
        </div>
        <MyImage
          src="/images/community.jpg"
          alt="Foundation team"
          className="h-72 w-full object-cover shadow-md"
          loading="lazy"
        />
      </section>
    </main>
  );
}
