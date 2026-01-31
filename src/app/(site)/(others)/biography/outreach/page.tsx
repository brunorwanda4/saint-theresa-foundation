"use client";
import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Heart, MapPin, Users } from "lucide-react";
import { JSX, useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StatItem {
  icon: JSX.Element;
  label: string;
  value: string;
}

interface StoryItem {
  name: string;
  desc: string;
  img: string;
}

export default function OutreachBioPage() {
  const stats: StatItem[] = [
    { icon: <Users size={28} />, label: "Communities Served", value: "85+" },
    { icon: <Heart size={28} />, label: "Patients Reached", value: "40,000+" },
    { icon: <Activity size={28} />, label: "Mobile Clinics", value: "120+" },
    { icon: <MapPin size={28} />, label: "Districts Covered", value: "12" },
  ];

  const stories: StoryItem[] = [
    {
      name: "Nyamasheke Mission",
      desc: "In partnership with local parishes, our team provided maternal health care and child immunization for over 500 families.",
      img: "/images/image-8-a.jpeg",
    },
    {
      name: "Kayonza Initiative",
      desc: "Our volunteers distributed essential medication and hygiene kits while offering health education to over 700 villagers.",
      img: "/images/image-11-a.jpeg",
    },
  ];

  // Refs for GSAP animations
  const headerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const storiesTitleRef = useRef<HTMLHeadingElement>(null);
  const storiesRef = useRef<HTMLDivElement[]>([]);
  const volunteerRef = useRef<HTMLDivElement>(null);

  // Add to ref arrays
  const addToStatsRef = (el: HTMLDivElement | null) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  const addToStoriesRef = (el: HTMLDivElement | null) => {
    if (el && !storiesRef.current.includes(el)) {
      storiesRef.current.push(el);
    }
  };

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Text content animation
    if (textContentRef.current) {
      gsap.fromTo(
        textContentRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Image animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Stats animations
    statsRef.current.forEach((stat, index) => {
      gsap.fromTo(
        stat,
        {
          opacity: 0,
          y: 60,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Stories title animation
    if (storiesTitleRef.current) {
      gsap.fromTo(
        storiesTitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: storiesTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Stories animations
    storiesRef.current.forEach((story, index) => {
      gsap.fromTo(
        story,
        {
          opacity: 0,
          y: 80,
          rotationY: 10,
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: story,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Volunteer section animation
    if (volunteerRef.current) {
      gsap.fromTo(
        volunteerRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: volunteerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Clean up ScrollTrigger instances
    return () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <main className="min-h-screen py-8">
      {/* Header */}
      <div ref={headerRef} className="global-px mb-8 max-w-5xl">
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Community Outreach
        </h1>
        <p className="max-w-2xl leading-relaxed">
          How Sainte Thérèse Foundation brings health and hope to the most
          remote areas – through compassion, care, and faith in action.
        </p>
      </div>

      {/* Header Section */}
      <section className="global-px relative overflow-hidden md:px-12">
        <div className="grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div ref={textContentRef} className="space-y-4 text-gray-700">
            <p>
              Our outreach missions travel to rural communities where access to
              healthcare is limited. Through mobile clinics, pharmacies, and
              dedicated volunteers, we deliver free consultations, essential
              medicines, and preventive education.
            </p>
            <p>
              Every mission is guided by St. Thérèse's belief – "Do small things
              with great love." From small villages to refugee settlements, our
              teams bring healing and hope wherever it's needed most.
            </p>
          </div>
          <div ref={imageRef}>
            <MyImage
              src="/images/nurse.jpg"
              alt="Outreach mission"
              className="h-96 w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center md:grid-cols-4">
          {stats.map((item, i) => (
            <div
              key={i}
              ref={addToStatsRef}
              className="bg-primary-foreground border-foreground hover:border-primary border p-6 shadow-md transition hover:scale-105 hover:shadow-lg"
            >
              <div className="text-primary mb-2 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stories Section */}
      <section className="px-6 py-8 md:px-12">
        <h2 ref={storiesTitleRef} className="mb-8 text-3xl font-semibold">
          Outreach in Action
        </h2>

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {stories.map((story, i) => (
            <div
              key={i}
              ref={addToStoriesRef}
              className="relative h-96 w-full duration-200 hover:scale-105"
            >
              <MyImage
                original
                loading="lazy"
                className="h-full w-full"
                src={story.img}
                alt={story.name}
              />
              <div className="absolute bottom-0 h-fit w-full bg-blue-950/70 px-4 py-2">
                <h3 className="text-primary-foreground font-medium">
                  {story.name}
                </h3>
                <p className="text-primary-foreground mt-2">{story.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer Call Section */}
      <section className="bg-foreground text-primary-foreground mt-20 py-8 text-center">
        <div ref={volunteerRef} className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-semibold">
            Become a Volunteer of Hope
          </h2>
          <p className="text-primary-foreground mb-8">
            Join our next mission to bring care to those who need it most. Every
            helping hand makes a difference.
          </p>
          <SiteLink
            link="/contact"
            className="text-primary-foreground mt-3 inline-block rounded-full px-8 py-3 font-semibold transition"
          >
            Join a Mission
          </SiteLink>
        </div>
      </section>
    </main>
  );
}
