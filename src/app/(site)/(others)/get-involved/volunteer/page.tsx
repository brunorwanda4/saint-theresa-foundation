"use client";
import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import { motion } from "framer-motion";

export default function VolunteerPage() {
  return (
    <section className="min-h-screen py-8">
      <div className="global-px mb-8 max-w-5xl">
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Join Our Volunteers
        </h1>
        <p className="">
          Become part of a network of compassionate volunteers transforming
          healthcare access in Rwanda.
        </p>
      </div>

      <div className="bg-foreground global-px text-primary-foreground grid items-center gap-10 py-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-left"
        >
          <h2 className="text-2xl font-semibold">Why Volunteer with Us?</h2>
          <ul className="ml-5 list-disc space-y-2">
            <li>Gain experience in community health work</li>
            <li>Be part of outreach and digital health missions</li>
            <li>Share your skills and grow spiritually</li>
          </ul>
          <p className="mt-4">
            Whether you’re a medical professional, a student, or simply
            passionate about helping others — there’s a place for you.
          </p>
          <SiteLink
            className="text-primary-foreground mt-3 inline-block rounded-full px-8 py-3 font-semibold transition"
            link="/contact"
          >
            Apply Now
          </SiteLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <MyImage
            src="/images/image-9-a.jpeg"
            alt="Volunteer Team"
            className="size-100 w-full shadow-md"
            original
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
