"use client";
import { motion } from "framer-motion";

export default function StatisticsPage() {
  const stats = [
    {
      label: "Patients Served",
      value: "24,500+",
      color: "from-rose-400 to-pink-500",
    },
    {
      label: "Medicines Delivered",
      value: "80,000+",
      color: "from-indigo-400 to-blue-500",
    },
    {
      label: "Communities Reached",
      value: "35+",
      color: "from-emerald-400 to-green-500",
    },
    {
      label: "Volunteers Engaged",
      value: "120+",
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-50 to-white px-6 py-20">
      <div className="mx-auto mb-16 max-w-5xl text-center">
        <h1 className="mb-3 text-4xl font-bold text-rose-700">
          Impact in Numbers
        </h1>
        <p className="text-gray-600">
          Every statistic represents a life touched and a community strengthened
          through the work of the Sainte Thérèse Foundation.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="rounded-2xl bg-gradient-to-br p-8 text-center font-semibold text-white shadow-lg"
            style={{
              backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
            }}
          >
            <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-8`}>
              <p className="text-5xl font-bold">{item.value}</p>
              <p className="mt-2 text-lg">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-600">
        <p>Data updated: September 2025</p>
      </div>
    </section>
  );
}
