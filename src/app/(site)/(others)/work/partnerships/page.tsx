"use client";

import SiteLink from "@/components/common/site/site-link";
import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  GraduationCap,
  Handshake,
  HeartPulse,
  Users,
} from "lucide-react";

const PartnershipsPage = () => {
  const partners = [
    {
      name: "Ministry of Health",
      desc: "Collaborating to improve access to rural healthcare through clinics and immunization campaigns.",
      icon: HeartPulse,
    },
    {
      name: "Faith-Based Organizations",
      desc: "Partnering with local churches and dioceses to deliver hope and healthcare to remote communities.",
      icon: Users,
    },
    {
      name: "International NGOs",
      desc: "Working with global organizations to exchange knowledge, technical assistance, and best practices.",
      icon: Globe,
    },
    {
      name: "Universities & Medical Schools",
      desc: "Engaging students and researchers in rural health programs and hands-on training initiatives.",
      icon: GraduationCap,
    },
    {
      name: "UN Agencies",
      desc: "Supporting SDG 3: Good Health and Well-Being through coordinated initiatives and shared goals.",
      icon: Building2,
    },
    {
      name: "Private Sector Partners",
      desc: "Collaborating with pharmaceutical companies and logistics firms for sustainable supply chains.",
      icon: Handshake,
    },
  ];

  const testimonials = [
    {
      quote:
        "Our partnership with Sainte Thérèse Foundation has strengthened local healthcare delivery in Rwanda.",
      author: "Dr. Marie Mukamana, Ministry of Health",
    },
    {
      quote:
        "Through collaboration, we’ve reached communities that were once completely off the map.",
      author: "Fr. Emmanuel Habimana, Parish Health Program",
    },
  ];

  return (
    <main className="min-h-screen py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-foreground global-px text-4xl font-bold"
      >
        Partnerships & Collaborations
      </motion.h1>
      <section className="bg-foreground text-primary-foreground global-px mt-4 space-y-8 py-8">
        <p className="">
          Collaboration lies at the heart of our mission. Together with our
          partners, we expand healthcare access, empower communities, and create
          lasting impact.
        </p>

        {/* Partner Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-6 shadow-md hover:shadow-xl"
            >
              <div className="mb-3 flex justify-center">
                <p.icon className="text-primary" size={43} />
              </div>
              <h3 className="text-foreground text-center text-lg font-semibold">
                {p.name}
              </h3>
              <p className="mt-2 text-center text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <div className="global-px mt-16 space-y-8">
        <h2 className="text-foreground text-center text-2xl font-semibold">
          Voices from Our Partners
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-primary-foreground border-foreground hover:border-primary border p-6 italic shadow-md duration-300 hover:scale-105"
            >
              “{t.quote}”
              <footer className="text-primary mt-3 text-sm font-semibold not-italic">
                — {t.author}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h3 className="text-foreground text-2xl font-semibold">
          Want to Partner with Us?
        </h3>
        <p className="mt-2 text-gray-700">
          Join our growing network of partners committed to improving health and
          dignity across Africa.
        </p>
        <SiteLink
          className="text-primary-foreground mt-3 inline-block rounded-full px-8 py-3 font-semibold transition"
          link="/contact"
        >
          Become a Partner
        </SiteLink>
      </div>
    </main>
  );
};

export default PartnershipsPage;
