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
} from "lucide-react";

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

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    v.controls = true; // show controls after play
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Sainte Theresa Foundation
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Founded in 2013 as an extension of Sainte Theresa Polyclinic,
            we advance affordable, quality healthcare for Rwanda’s rural and
            underserved communities — serving over{" "}
            <span className="font-semibold text-white">50,000 patients annually</span>.
          </p>
        </div>
      </div>

      {/* Mission & Vision (video on the right) */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>

            {/* Click-to-play video */}
            <div className="relative">
              <video
                ref={videoRef}
                className="w-full rounded-lg shadow-xl"
                poster="/assets/images/image-11.jpeg" // replace with your poster
                preload="metadata"
              >
                <source src="/assets/videos/video-1.mp4" type="video/mp4" />
                {/* Add a .webm source too if you have it for better compression */}
              </video>

              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play mission video"
                  className="absolute inset-0 grid place-items-center rounded-lg bg-black/30 backdrop-blur-[1px] hover:bg-black/40 transition-colors"
                >
                  <span className="inline-flex items-center gap-3 rounded-full bg-white text-black px-5 py-3 font-medium shadow-lg">
                    <Play className="h-5 w-5" />
                    Play video
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our work across mobile clinics, pharmacies, digital health, and education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600">
                  <Icon className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practical, community-led solutions — backed by training, monitoring & evaluation, and strong partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-yellow-100">
                  <Icon className="h-6 w-6 text-yellow-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="text-gray-600">{copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-semibold">
              <Link href="/donate">Support Our Work</Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-100">
              <Link href="/partners">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
