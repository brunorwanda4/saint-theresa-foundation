"use client";
import MyImage from "@/components/common/images/MyImage";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stories = [
  {
    name: "Claudine, 32 — Gakenke District",
    image: "/images/image-3.jpeg",
    text: "Before the Sainte Thérèse mobile clinic, I had to walk 3 hours to get medicine. Now, they come to our village every month. My children are healthier than ever.",
  },
  {
    name: "Jean Paul, Volunteer Nurse",
    image: "/images/image-4.jpeg",
    text: "Serving in the community pharmacy taught me the power of compassion and teamwork. We’re building a healthier Rwanda, one patient at a time.",
  },
  {
    name: "Sister Thérèse, Program Coordinator",
    image: "/images/image-5.jpeg",
    text: "We believe faith and service must walk hand in hand. Our mission is not only to heal bodies but to restore hope and dignity.",
  },
];

export default function StoriesPage() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % stories.length),
      6000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-8 min-h-screen">
      <div className="global-px mb-8 max-w-4xl">
        <h1 className="text-foreground mb-3 text-4xl font-bold">
          Stories of Hope
        </h1>
        <p className="">
          Real voices, real change — powered by compassion and community.
        </p>
      </div>

      {/* Featured Rotating Story */}
      <div className="global-px bg-foreground py-8">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-foreground hover:border-primary bg-primary-foreground mx-auto mb-20 w-fit border p-8 shadow-lg duration-200 hover:scale-105"
        >
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <MyImage
              src={stories[index].image}
              alt={stories[index].name}
              classname=""
              className="size-52 object-cover"
            />
            <div>
              <h2 className="text-primary text-xl font-semibold">
                {stories[index].name}
              </h2>
              <p className="mt-2 max-w-md italic">“{stories[index].text}”</p>
            </div>
          </div>
        </motion.div>

        {/* Grid of All Stories */}
        <div className="grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative h-80 w-full duration-200 hover:scale-105"
            >
              <MyImage
                src={story.image}
                original
                loading="lazy"
                className="h-full w-full"
              />
              <div className="absolute bottom-0 h-fit w-full bg-blue-950/70 px-4 py-2">
                <h4 className="text-primary-foreground font-medium">
                  {story.name}
                </h4>
                <p className="text-primary-foreground mt-2 text-sm">
                  {story.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
