"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { motion } from "framer-motion";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function BudgetChartSection() {
  const data = [
    {
      category: "Mobile Clinics & Medical Equipment",
      amount: 150000,
      description:
        "Funds allocated for purchasing, maintaining, and operating mobile clinics that deliver essential healthcare services to underserved communities, including diagnostic tools and outreach kits.",
      color: "oklch(0.54 0.15 240)", // Primary color - darkest shade
    },
    {
      category: "Community Pharmacies & Local Access",
      amount: 80000,
      description:
        "Support for establishing and maintaining community-based pharmacies to ensure continuous access to affordable medication and healthcare supplies in rural areas.",
      color: "oklch(0.62 0.13 240)", // Slightly lighter
    },
    {
      category: "Digital Health Platform & Technology",
      amount: 50000,
      description:
        "Investment in building and maintaining our telemedicine platform, data systems, and digital literacy training to expand remote health services and data-driven decisions.",
      color: "oklch(0.68 0.11 240)", // Medium shade
    },
    {
      category: "Training, Empowerment & Capacity Building",
      amount: 60000,
      description:
        "Workshops and leadership programs for healthcare workers, volunteers, and youth — strengthening long-term community capacity for independent growth and sustainable impact.",
      color: "oklch(0.74 0.09 240)", // Lighter shade
    },
    {
      category: "Public Health Education & Awareness",
      amount: 30000,
      description:
        "Outreach campaigns and educational materials to promote hygiene, nutrition, and preventive healthcare — reaching families and schools across local communities.",
      color: "oklch(0.80 0.07 240)", // Lightest shade
    },
  ];

  const total = data.reduce((sum, d) => sum + d.amount, 0);

  return (
    <main className="min-h-screen py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-foreground global-px text-4xl font-bold"
      >
        Budget Allocation Overview (2025–2027)
      </motion.h1>
      <p className="global-px mt-3 max-w-3xl">
        Our financial distribution reflects our mission — combining healthcare
        innovation, education, and local empowerment to create sustainable
        community well-being.
      </p>

      <section className="global-px bg-foreground mt-8 grid grid-cols-2 gap-8 py-8">
        {/* Description List */}
        {data.map((item, i) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="border-foreground bg-primary-foreground border p-6 shadow-md transition hover:shadow-lg"
          >
            <h3 className="flex justify-between text-lg font-semibold">
              {item.category}
              <span className="text-foreground font-bold">
                ${item.amount.toLocaleString()}
              </span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-300">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${(item.amount / total) * 100}%`,
                }}
                transition={{ duration: 1 }}
                className="bg-primary h-2 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </section>
      {/* Pie Chart with Shadcn Chart Components */}
      {/* Chart Section */}
      <section className="global-px mt-8 flex items-center space-y-6">
        {/* Chart Title + Description */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-foreground text-3xl font-bold">
            Financial Distribution Overview
          </h2>
          <p className="mt-2 max-w-2xl">
            The chart below provides a clear visualization of how the
            foundation’s resources are distributed across our five main
            operational pillars. Each segment represents a key area of
            investment — ensuring that our impact reaches both immediate
            healthcare needs and long-term community development goals.
          </p>
          <p className="max-w-3xl text-sm leading-relaxed">
            This breakdown helps our donors and partners understand where their
            contributions go. It emphasizes our commitment to transparency —
            ensuring that every dollar is used responsibly to improve access to
            healthcare, education, and sustainable livelihoods.
          </p>
        </div>

        <ChartContainer
          config={{
            amount: {
              label: "Amount (USD)",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[420px] w-1/2 p-4"
        >
          <ResponsiveContainer>
            <PieChart>
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    title="Funding Breakdown"
                    // description="Hover over each section to see exact allocation details."
                  />
                }
              />
              <Pie
                data={data}
                dataKey="amount"
                nameKey="category"
                innerRadius={90}
                outerRadius={140}
                paddingAngle={5}
                label
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Extra Paragraph for context */}
      </section>
    </main>
  );
}
