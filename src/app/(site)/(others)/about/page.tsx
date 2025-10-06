"use client";
import MyImage from "@/components/common/images/MyImage";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const links = [
    {
      title: "Our Story",
      desc: "Learn how the Sainte Thérèse Foundation began — a vision born from compassion and faith to make healthcare accessible to every Rwandan.",
      href: "/about/our-story",
      img: "/images/anita.webp",
    },
    {
      title: "Vision & Mission",
      desc: "Our guiding principles, rooted in love and service, define every step we take toward a healthier nation.",
      href: "/about/vision-mission",
      img: "/images/image-6.jpeg",
    },
    {
      title: "Our Team",
      desc: "Meet the dedicated leaders and advisors who make our mission possible through expertise and compassion.",
      href: "/about/team",
      img: "/images/image-1.jpeg",
    },
    {
      title: "Founder",
      desc: "Discover the story of AHAYO Marie Anita, the visionary behind the Foundation’s journey of hope and healing.",
      href: "/about/founder",
      img: "/images/anita.webp",
    },
  ];

  return (
    <main className="min-h-screen py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="global-px mb-8 max-w-5xl"
      >
        <h1 className="text-foreground mb-2 text-4xl font-bold">Who We Are</h1>
        <p className="max-w-2xl leading-relaxed">
          The Sainte Thérèse Foundation is a faith-inspired health organization
          dedicated to transforming lives through compassionate care, education,
          and empowerment. From humble beginnings, we’ve grown into a movement
          of service across Rwanda.
        </p>
      </motion.div>

      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        {links.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
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
              <p className="">{item.desc}</p>
              <Link href={item.href} className="font-medium hover:underline">
                Read more →
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
