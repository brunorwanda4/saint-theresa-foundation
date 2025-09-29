"use client";

import { useEffect, useRef } from "react";
import { Users, Calendar, Truck, Pill } from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

function CountUp({ to, suffix = "", duration = 1.5 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, to, duration, mv]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function Stats() {
  const years = new Date().getFullYear() - 2013; // since 2013

  const items = [
    { icon: Users, value: 50000, suffix: "+", label: "Patients served annually" },
    { icon: Calendar, value: years, suffix: "+", label: "Years serving Rwanda (since 2013)" },
    { icon: Truck, value: 2, suffix: "", label: "Mobile clinic units (by 2026)" },
    { icon: Pill, value: 2, suffix: "", label: "Community pharmacies (by 2026)" },
  ];

  return (
    <section aria-labelledby="stats-title" className="w-full py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="stats-title" className="sr-only">Foundation statistics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map(({ icon: Icon, value, suffix, label }) => (
            <div
              key={label}
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <Icon aria-hidden="true" className="mb-6 h-5 w-5 text-yellow-600" />
              <p className="text-3xl font-bold tracking-tight text-blue-900">
                <CountUp to={value} suffix={suffix} />
              </p>
              <p className="mt-2 text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Targets align with the 2025–2027 action plan.
        </p>
      </div>
    </section>
  );
}

export { Stats };
