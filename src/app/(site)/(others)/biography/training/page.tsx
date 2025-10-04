"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TrainingBioPage() {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-green-50 to-white px-6 py-20">
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <h1 className="mb-3 text-4xl font-bold text-green-700">
          Workshops & Training
        </h1>
        <p className="text-gray-600">
          Empowering local health workers and youth leaders to sustain community
          care.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <Image
          src="/images/training-session.jpg"
          alt="Training session"
          width={600}
          height={400}
          className="rounded-2xl shadow-md"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-gray-700"
        >
          <p>
            Our workshops equip local volunteers, nurses, and health promoters
            with the skills to manage digital tools, hygiene awareness, and
            first-aid techniques.
          </p>
          <p className="mt-3">
            Over 200 workers have been trained under our “Healthy Villages”
            initiative between 2023–2025.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
