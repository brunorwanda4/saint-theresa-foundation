"use client";
import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import { motion } from "framer-motion";

export default function PartnerPage() {
  const partners = [
    {
      name: "Ministry of Health",
      logo: "/partners/Ministry-of-Health-of-rwanda.jpg",
    },
    {
      name: "Caritas Rwanda",
      logo: "/partners/logo-Caritas-Rwanda-1.gif",
    },
    {
      name: "UNICEF",
      logo: "/partners/unicef-logo-transparent-free-png.webp",
    },
    { name: "University of Rwanda", logo: "/partners/urlogo1.png" },
  ];

  const stats = [
    { number: "40+", label: "Partner Organizations" },
    { number: "10K+", label: "Beneficiaries Reached" },
    { number: "5", label: "Rwandan Districts Covered" },
    { number: "15+", label: "Community Projects Active" },
  ];

  const testimonials = [
    {
      name: "Sr. Claire Uwimana",
      role: "Caritas Rwanda",
      quote:
        "Partnering with Sainte Thérèse Foundation has amplified our mission in health outreach. Their commitment to compassion and excellence is inspiring.",
    },
    {
      name: "Dr. Jean Bosco Mugenzi",
      role: "Ministry of Health",
      quote:
        "Together we’ve improved rural access to healthcare and established sustainable digital health solutions. Their collaboration is invaluable.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* 🌟 Hero Section */}
      <section className="global-px py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-4xl font-bold"
        >
          Partner With Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-lg"
        >
          Join hands with the <strong>Sainte Thérèse Foundation</strong> to
          build a future where every person — regardless of background — has
          access to compassionate healthcare and hope.
        </motion.p>
      </section>

      <section className="global-px py-10">
        <h2 className="mb-6 text-3xl font-bold">Partnership Opportunities</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Faith-Based Collaborations",
              desc: "Join church and mission-based initiatives improving rural health access.",
            },
            {
              title: "Community Health Projects",
              desc: "Support health campaigns, nutrition programs, and mobile clinics.",
            },
            {
              title: "Digital Health Innovation",
              desc: "Partner on telemedicine, AI-assisted diagnosis, and training tools.",
            },
            {
              title: "Research & Data",
              desc: "Collaborate on evidence-based policy research and community data studies.",
            },
            {
              title: "Educational Partnerships",
              desc: "Train youth and professionals in leadership and healthcare skills.",
            },
            {
              title: "Sponsorship & Funding",
              desc: "Fund initiatives for sustainable, long-term social impact.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-foreground border-foreground hover:border-primary border p-6 shadow-md transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-primary text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-primary-foreground py-14">
        <div className="mx-auto grid max-w-6xl gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold"
              >
                {stat.number}
              </motion.h3>
              <p className="mt-1 text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="mb-6 text-3xl font-bold">Our Current Partners</h2>
        <p className="mx-auto mb-10 max-w-3xl text-gray-600">
          We are honored to collaborate with esteemed organizations, faith-based
          institutions, and educational partners committed to shared values of
          service, love, and impact.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="border-foreground hover:border-primary bg-primary-foreground border p-4 shadow-md"
            >
              <MyImage
                src={p.logo}
                alt={p.name}
                className="mx-auto size-52"
                classname=" object-contain"
              />
              <p className="mt-3 text-sm font-medium text-gray-700">{p.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💬 Testimonials */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-10 text-3xl font-bold">What Our Partners Say</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-primary-foreground border-foreground hover:border-primary border p-8 shadow-lg duration-200"
              >
                <p className="italic">“{t.quote}”</p>
                <div className="mt-4">
                  <p className="text-primary font-semibold">{t.name}</p>
                  <p className="text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-14 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Let’s Build a Healthier Tomorrow Together
        </h2>
        <p className="text-primary-foreground mx-auto mb-8 max-w-2xl">
          Partner with Sainte Thérèse Foundation and help us extend care,
          education, and faith-based healing across Rwanda and beyond.
        </p>
        <SiteLink
          className="text-primary-foreground mt-3 inline-block rounded-full px-8 py-3 font-semibold transition"
          link="/contact"
        >
          Become a Partner
        </SiteLink>
      </section>
    </main>
  );
}
