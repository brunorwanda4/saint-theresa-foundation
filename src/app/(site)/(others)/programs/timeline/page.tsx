"use client";

import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { Globe2, GraduationCap, HeartPulse, Users } from "lucide-react";

export default function TimelinePage() {
  const timelineData = [
    {
      title: "2025",
      content: (
        <div className="space-y-4 pb-20">
          <p className="text-foreground">
            A foundational year for growth and outreach. We expanded our
            presence in rural areas and strengthened partnerships with local
            health institutions.
          </p>
          <ul className="text-foreground ml-6 list-disc space-y-2">
            <li>Launch of community health awareness campaigns</li>
            <li>Deployment of 2 new mobile clinics</li>
            <li>Start of school-based nutrition programs</li>
          </ul>
          <MyImage
            src="/images/community.jpg"
            alt="Community outreach 2025"
            className="mt-4 h-96 w-full shadow-md"
            loading="lazy"
            original
          />
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div className="space-y-4 pb-20">
          <p className="text-foreground">
            With a stronger foundation, 2026 focuses on technology, capacity
            building, and youth engagement.
          </p>
          <ul className="text-foreground ml-6 list-disc space-y-2">
            <li>Launch of digital health platform (telemedicine)</li>
            <li>Opening of regional community pharmacy centers</li>
            <li>Youth leadership & health ambassador programs</li>
          </ul>
          <MyImage
            src="/images/digital-health-2.jpg"
            alt="Digital health project 2026"
            className="mt-4 h-96 w-full shadow-md"
            original
            loading="lazy"
          />
        </div>
      ),
    },
    {
      title: "2027",
      content: (
        <div className="space-y-4">
          <p className="text-foreground">
            A milestone year focused on sustainability, research, and long-term
            community empowerment.
          </p>
          <ul className="text-foreground ml-6 list-disc space-y-2">
            <li>Expansion to 5 districts with stable funding</li>
            <li>Launch of Sainte Thérèse Health Research Center</li>
            <li>Publication of 2030 Vision and annual impact report</li>
          </ul>
          <MyImage
            src="/images/health-research.jpg"
            alt="Health research 2027"
            className="mt-4 h-96 w-full shadow-md"
            original
            loading="lazy"
          />
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen pb-16">
      <div className="relative h-[70vh] w-full">
        <MyImage
          src="/images/image-1.jpeg"
          alt="2025-2027"
          className="h-full w-full"
          original
          priority
        />
        <div className="global-px absolute bottom-0 w-full">
          <div className="bg-primary-foreground/60 px-8 py-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-foreground text-4xl font-bold"
            >
              2025–2027 Action Timeline
            </motion.h1>
            <p className="max-w-3xl text-start">
              A three-year roadmap dedicated to improving public health, digital
              access, and community well-being through partnership and
              innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Stats Section */}
      <section className="bg-foreground global-mx mx-auto grid grid-cols-1 gap-6 px-8 pt-16 pb-8 md:grid-cols-4">
        {[
          { icon: HeartPulse, label: "Mobile Clinics", value: "12+" },
          { icon: Users, label: "Health Ambassadors", value: "150+" },
          { icon: GraduationCap, label: "Schools Engaged", value: "45+" },
          { icon: Globe2, label: "Communities Reached", value: "30+" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="border-foreground bg-primary-foreground hover:border-primary flex flex-col items-center border p-6 text-center shadow-md"
          >
            <div className="text-primary mb-3">
              <stat.icon className="text-primary" size={32} />
            </div>
            <h3 className="text-foreground text-3xl font-bold">{stat.value}</h3>
            <p className="text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Timeline Section */}
      <section className="mt-16 px-4 md:px-8">
        <Timeline data={timelineData} />
      </section>

      {/* Highlight Section */}
      <section className="mx-auto mt-20 grid max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-foreground mb-4 text-3xl font-semibold">
            Our Journey Continues
          </h2>
          <p className="text-foreground mb-4">
            As we move forward, Sainte Thérèse Foundation remains committed to
            innovation and compassion. Our next phase will strengthen community
            resilience and empower local leadership in health care delivery.
          </p>
          <SiteLink
            link="/impact/stories"
            className="text-primary-foreground inline-block rounded-full px-8 py-3 font-semibold transition"
          >
            Explore Our Impact Stories
          </SiteLink>
        </div>
        <MyImage
          src="/images/digital-health.jpg"
          alt="Community team"
          className="mt-4 h-96 w-full shadow-md"
        />
      </section>
    </main>
  );
}
