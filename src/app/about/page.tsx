"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  Shield,
  BookOpen,
  Handshake,
  Truck,
  Pill,
  Smartphone,
  Play,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion, useReducedMotion, easeOut } from "framer-motion";

/* ----------------------- Data ----------------------- */
const values = [
  {
    icon: Heart,
    title: "Compassion & Dignity",
    description:
      "Rooted in Christian compassion, we serve the poor and vulnerable with respect and care.",
  },
  {
    icon: Users,
    title: "Access & Equity",
    description:
      "Bringing care closer through mobile clinics, pharmacies, and digital health for rural communities.",
  },
  {
    icon: BookOpen,
    title: "Prevention & Education",
    description:
      "Public health education on safe medicine use, nutrition, hygiene, and disease prevention.",
  },
  {
    icon: Handshake,
    title: "Sustainable Partnerships",
    description:
      "Working with faith networks, health partners, and donors to build long-term impact.",
  },
];

const programs = [
  {
    icon: Truck,
    title: "Mobile Clinics",
    copy:
      "Deploying units to reach hard-to-access villages with primary care and screening.",
  },
  {
    icon: Pill,
    title: "Community Pharmacies",
    copy:
      "Two accessible pharmacies providing subsidized or low-cost essential medicines.",
  },
  {
    icon: Smartphone,
    title: "Digital Health",
    copy:
      "e-consultation and digital prescriptions to overcome distance and cost barriers.",
  },
  {
    icon: BookOpen,
    title: "Public Health Education",
    copy:
      "Community awareness campaigns on safe medicine use, nutrition, and hygiene.",
  },
];

type Leader = {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials?: { platform: "linkedin" | "twitter"; url: string }[];
};

const leaders: Leader[] = [
  {
    name: "Marie Anita Ahayo",
    role: "Leader of sainte theresa",
    image: "/assets/images/image-5.jpeg",
    bio:
      "A Master of Science in Public Health from the University of Rwanda with Tulane University, with 20 years of work experience in public and private health. Marie Anita has a background in nursing and anesthesia technology. She has excellent leadership skills and is able to work independently and as a team.\n\nCo-Founder and Director of St Theresa Clinic in Rwamagana since 2013, she oversees a polyclinic serving around 40,000 patients annually. She is also the Founder and Managing Director of TRUST Pharmalab Ltd, a wholesale pharmaceutical company established in 2019 that supplies products to institutions across Rwanda and East Africa.\n\nMrs. Anita is active in social and philanthropic initiatives, co-founding the Sainte Thérèse Foundation to expand access to health for hard-to-reach populations. She also serves as Provincial Vice Chair of the Private Sector Federation since 2021 and is a member of the Chamber of Women in PSF of Rwanda.\n\nHer prior roles include Director of injury and disability, eye and oral health at the Rwanda Biomedical Center (2012–2016), HIV prevention and treatment specialist at TRAC Rwanda (2004–2012), and Anesthetist Technician at Kigali Teaching Hospital (2002–2004).\n\nGuided by Christian values, she dedicates her mobilization and communication skills to elevating Sainte Thérèse Foundation to greater heights.",
    socials: [{ platform: "linkedin", url: "https://www.linkedin.com/" }],
  },
  {
    name: "Jean Paul Mugiraneza",
    role: "Leader of saint theresa",
    image: "/assets/images/founder.jpg",
    bio:
      "Mr. Jean Paul Mugiraneza is Senior Director of Program Development at Interpeace, an international peacebuilding organization headquartered in Geneva. In this global role, he guides innovative peacebuilding initiatives, partnerships, and resource mobilization across Africa, Asia, and Europe.\n\nA native of Rwanda, he studied Law at the National University of Rwanda and earned a Master’s in Public Administration from the University of Québec. Over the past 20 years, he has worked extensively in governance, peacebuilding, and education, contributing leadership and expertise on three continents.\n\nAfter the Genocide against the Tutsi, he helped establish Rwanda’s decentralized governance institutions and contributed to national dialogue on reconciliation. He has served as Executive Secretary of the National Decentralization Implementation Secretariat, Chairman of the Political Commission of Kigali City Council, and Board Member of the National Commission for the Fight against AIDS. He also taught Social and Constitutional Law at Kigali Independent University.\n\nDriven by compassion and service, Jean Paul co-founded the Sainte Thérèse Foundation, which expands community-based pharmacy services and strengthens health access in Rwanda, Kenya, and beyond.\n\nThrough both his professional and philanthropic work, he unites strategic vision and human-centered action, ensuring dialogue, reconciliation, and community care remain central to his mission.",
    socials: [{ platform: "linkedin", url: "https://www.linkedin.com/" }],
  },
];

/* ----------------------- Small utilities ----------------------- */
function ReadMore({
  text,
  initialChars = 260,
  id,
}: {
  text: string;
  initialChars?: number;
  id: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const short =
    text.length > initialChars ? text.slice(0, initialChars).trim() + "…" : text;

  return (
    <div>
      <p id={id} className="text-gray-700 whitespace-pre-line">
        {expanded ? text : short}
      </p>
      {text.length > initialChars && (
        <button
          type="button"
          className="mt-2 inline-flex items-center text-yellow-700 hover:text-yellow-800 font-medium"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded((s) => !s)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

/* ----------------------- Variants ----------------------- */
const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: easeOut } },
};

const sectionTitleUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: easeOut } },
};

/* ----------------------- Page ----------------------- */
export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const reduce = useReducedMotion();

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    v.controls = true;
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            variants={sectionTitleUp}
            initial={reduce ? undefined : "hidden"}
            animate="show"
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Sainte Theresa Foundation
            </span>
          </motion.h1>

          <motion.p
            variants={sectionTitleUp}
            initial={reduce ? undefined : "hidden"}
            animate="show"
            transition={{ delay: 0.06 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Founded in 2013 as an extension of Sainte Theresa Polyclinic,
            we advance affordable, quality healthcare for Rwanda’s rural and
            underserved communities — serving over{" "}
            <span className="font-semibold text-white">50,000 patients annually</span>.
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={sectionTitleUp}
              initial={reduce ? undefined : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                To enhance the well-being of underserved communities by deploying
                mobile healthcare, digital medical tools, and sustainable community
                pharmacies — rooted in human dignity and guided by Christian compassion.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-gray-700">
                A Rwanda where every person — regardless of income or geography —
                can access affordable, quality healthcare and essential medicines.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full grid place-items-center">
                  <Shield className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Faith-driven, community-based care
                  </p>
                  <p className="text-gray-600">
                    Inspired by St. Theresa of Lisieux and the call to serve “the least of these.”
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Video */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              whileInView={reduce ? undefined : { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } }}
              viewport={{ once: true, amount: 0.4 }}
              className="relative"
            >
              <video
                ref={videoRef}
                className="w-full rounded-lg shadow-xl"
                poster="/assets/images/image-11.jpeg"
                preload="metadata"
              >
                <source src="/assets/videos/video-1.mp4" type="video/mp4" />
              </video>
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play mission video"
                  className="absolute inset-0 grid place-items-center rounded-lg bg-black/30 hover:bg-black/40 transition-colors"
                >
                  <span className="inline-flex items-center gap-3 rounded-full bg-white text-black px-5 py-3 font-medium shadow-lg">
                    <Play className="h-5 w-5" />
                    Play video
                  </span>
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionTitleUp}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our work across mobile clinics, pharmacies, digital health, and education.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={gridVariants}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            {values.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={itemUp} className="text-center">
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600">
                  <Icon className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionTitleUp}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practical, community-led solutions — backed by training, monitoring &amp; evaluation, and strong partnerships.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={gridVariants}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            {programs.map(({ icon: Icon, title, copy }) => (
              <motion.div key={title} variants={itemUp} className="flex items-start gap-3">
                <div className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-yellow-100">
                  <Icon className="h-6 w-6 text-yellow-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="text-gray-600">{copy}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={sectionTitleUp}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild className="bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-semibold">
              <Link href="/donate">Support Our Work</Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-100">
              <Link href="/partners">Become a Partner</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Leaders */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionTitleUp}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by vision and compassion, these leaders dedicate their lives to advancing health and social impact.
            </p>
          </motion.div>

          <div className="space-y-12">
            {leaders.map((l, i) => (
              <motion.article
                key={l.name}
                initial={reduce ? undefined : { opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } }}
                viewport={{ once: true, amount: 0.35 }}
                className="flex flex-col md:flex-row gap-8 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Portrait */}
                <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                  <motion.div
                    initial={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                    whileInView={reduce ? undefined : { opacity: 1, scale: 1, transition: { duration: 0.28, ease: "easeOut" } }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="relative w-full h-80 md:h-[28rem] overflow-hidden rounded-xl bg-slate-100"
                  >
                    <img
                      src={l.image}
                      alt={l.name + " portrait"}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <header className="mb-3">
                    <h3 className="text-2xl font-semibold text-slate-900">{l.name}</h3>
                    <p className="text-sm md:text-base text-yellow-800">{l.role}</p>
                  </header>

                  <motion.div
                    initial={reduce ? undefined : { opacity: 0, y: 10 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } }}
                    viewport={{ once: true, amount: 0.35 }}
                  >
                    <ReadMore text={l.bio} initialChars={320} id={`leader-bio-${i}`} />
                  </motion.div>

                  {l.socials && l.socials.length > 0 && (
                    <motion.div
                      initial={reduce ? undefined : { opacity: 0, y: 8 }}
                      whileInView={reduce ? undefined : { opacity: 1, y: 0, transition: { duration: 0.24, ease: "easeOut", delay: 0.05 } }}
                      viewport={{ once: true, amount: 0.35 }}
                      className="mt-6 flex items-center gap-4"
                    >
                      {l.socials.map((s, idx) => {
                        const Icon = s.platform === "linkedin" ? Linkedin : Twitter;
                        return (
                          <a
                            key={idx}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
