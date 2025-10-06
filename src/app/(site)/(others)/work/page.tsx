"use client";
import MyImage from "@/components/common/images/MyImage";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WorkPage() {
  const works = [
    {
      title: "Mobile Clinics",
      desc: "Reaching the unreached — bringing healthcare directly to villages and remote areas.",
      href: "/work/mobile-clinics",
      img: "/images/mobile-clinic.jpg",
    },
    {
      title: "Community Pharmacies",
      desc: "Building sustainable access to affordable medicines for all.",
      href: "/work/community-pharmacies",
      img: "/images/pharmacy.jpg",
    },
    {
      title: "Digital Health",
      desc: "Harnessing technology to connect patients and doctors across Rwanda.",
      href: "/work/digital-health",
      img: "/images/digital-health-2.jpg",
    },
    {
      title: "Public Health Education",
      desc: "Empowering communities with knowledge on hygiene, nutrition, and wellness.",
      href: "/work/public-health",
      img: "/images/image-6.jpeg",
    },
    {
      title: "Training & Empowerment",
      desc: "Developing the next generation of healthcare leaders and volunteers.",
      href: "/work/training",
      img: "/images/training.jpg",
    },
    {
      title: "Partnerships",
      desc: "Joining hands with local and international partners to strengthen impact.",
      href: "/work/partnerships",
      img: "/images/image-1-a.jpg",
    },
  ];

  return (
    <main className="min-h-screen py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="global-px mb-8 max-w-5xl"
      >
        <h1 className="text-foreground mb-2 text-4xl font-bold">Our Work</h1>
        <p className="max-w-2xl leading-relaxed">
          The Sainte Thérèse Foundation is a faith-inspired health organization
          dedicated to transforming lives through compassionate care, education,
          and empowerment. From humble beginnings, we’ve grown into a movement
          of service across Rwanda.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
        {works.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative h-96 w-full duration-200 hover:scale-105"
          >
            <MyImage
              original
              loading="lazy"
              className="h-full w-full"
              src={item.img}
              alt={item.title}
            />
            <div className="text-primary-foreground absolute bottom-0 h-fit w-full bg-blue-950/70 px-4 py-2">
              <h2 className="text-xl font-semibold">
                <Link href={item.href}>{item.title}</Link>
              </h2>
              <p className="mb-2">{item.desc}</p>
              <Link href={item.href} className="font-medium hover:underline">
                Explore →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
