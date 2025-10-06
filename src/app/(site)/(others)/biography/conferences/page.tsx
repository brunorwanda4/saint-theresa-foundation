"use client";

import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function ConferencesBioPage() {
  const conferences = [
    {
      title: "Rwanda National Health Summit 2025",
      location: "Kigali Convention Centre",
      date: "March 2025",
      description:
        "Presented our digital community pharmacy system improving rural access to medicine.",
      image: "/images/image-1-a.jpg",
    },
    {
      title: "East African Faith & Health Forum",
      location: "Kigali, Rwanda",
      date: "July 2024",
      description:
        "Shared insights on how faith-based organizations enhance health equity in underserved areas.",
      image: "/images/nurse.jpg",
    },
    {
      title: "Global Digital Health Conference",
      location: "Kigali, Rwanda",
      date: "November 2023",
      description:
        "Showcased our telemedicine pilot in remote districts supported by our partners.",
      image: "/images/digital-health.jpg",
    },
  ];

  const speakers = [
    {
      name: "Dr. Marie Mukamana",
      role: "Medical Director",
      image: "/images/founder.jpg",
      bio: "Advocate for maternal health and faith-driven care, with 10+ years of experience in rural clinics.",
    },
    {
      name: "Fr. Emmanuel Habimana",
      role: "Spiritual Advisor",
      image: "/images/anita.webp",
      bio: "Keynote speaker on the moral dimensions of health and compassion-based service.",
    },
  ];

  return (
    <main className="min-h-screen py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="global-px mb-8 max-w-5xl"
      >
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Conferences & Advocacy
        </h1>
        <p className="">
          We actively share our mission, research, and innovations in health
          forums across Rwanda and the globe. Our team contributes to shaping
          discussions on faith-based care, digital health, and sustainable
          community medicine.
        </p>
      </motion.div>

      {/* Conferences Section */}
      <section className="global-px text-primary-foreground items-center gap-10">
        <h2 className="text-primary-foreground mb-6 text-2xl font-semibold">
          Major Conferences & Forums
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {conferences.map((conf, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative h-80 w-full duration-200 hover:scale-105"
            >
              <MyImage
                original
                loading="lazy"
                className="h-full w-full"
                src={conf.image}
              />
              <div className="absolute bottom-0 h-fit w-full space-y-1 bg-blue-950/70 px-4 py-2">
                <h3 className="text-primary-foreground text-lg font-bold">
                  {conf.title}
                </h3>
                <p className="flex items-center gap-2 text-sm">
                  <Calendar size={16} /> {conf.date}
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <MapPin size={16} /> {conf.location}
                </p>
                <p className="text-sm">{conf.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Speaker Highlights */}
      <section className="global-px mt-20 max-w-6xl">
        <h2 className="mb-6 text-2xl font-semibold">
          Our Speakers & Advocates
        </h2>
        <main className="grid gap-8 md:grid-cols-2">
          {speakers.map((sp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative h-96 w-full duration-200 hover:scale-105"
            >
              <MyImage
                original
                loading="lazy"
                className="h-full w-full"
                src={sp.image}
              />
              <div className="absolute bottom-0 h-fit w-full bg-blue-950/70 px-4 py-2">
                <h3 className="text-primary-foreground font-medium">
                  {sp.name}
                </h3>
                <p className="text-primary-foreground text-sm">{sp.role}</p>
                <p className="text-primary-foreground mt-1 text-sm">{sp.bio}</p>
              </div>
            </motion.div>
          ))}
        </main>
      </section>

      {/* Advocacy Focus */}
      <section className="bg-foreground mt-20 py-8 text-center">
        <h2 className="text-primary-foreground mb-3 text-2xl font-semibold">
          Advocacy for Change
        </h2>
        <p className="text-primary-foreground mx-auto max-w-3xl">
          Our advocacy programs focus on empowering local leaders to champion
          community-driven health initiatives. Through workshops, radio
          discussions, and public health education, we influence health policy
          and inspire compassion-based service delivery.
        </p>
        <div className="mt-8 text-center">
          <SiteLink
            className="text-primary-foreground mt-3 inline-block rounded-full px-8 py-3 font-semibold transition"
            link="/contact"
          >
            Join Our Next Conference
          </SiteLink>
        </div>
      </section>
    </main>
  );
}
