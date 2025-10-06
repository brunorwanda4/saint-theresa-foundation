"use client";
import MyImage from "@/components/common/images/MyImage";
import { motion } from "framer-motion";

export default function TrainingBioPage() {
  return (
    <section className="min-h-screen py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="global-px mb-8 max-w-5xl"
      >
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Workshops & Training
        </h1>
        <p className="max-w-2xl leading-relaxed">
          Empowering local health workers and youth leaders to sustain community
          care.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
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
        <MyImage
          src="/images/image-2.jpeg"
          alt="Training session"
          className="h-96 w-full shadow-md"
        />
      </div>
    </section>
  );
}
