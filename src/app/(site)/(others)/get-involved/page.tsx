"use client";
import { motion } from "framer-motion";
import { Handshake, Heart, Users } from "lucide-react";
import Link from "next/link";

export default function GetInvolvedPage() {
  const items = [
    {
      title: "Donate",
      icon: Heart,
      desc: "Your contribution helps provide medicine, train workers, and bring care to those who need it most.",
      href: "/get-involved/donate",
    },
    {
      title: "Volunteer",
      icon: Users,
      desc: "Join hands with our team on the ground — serve, learn, and transform lives together.",
      href: "/get-involved/volunteer",
    },
    {
      title: "Partnerships",
      icon: Handshake,
      desc: "Partner with us to expand healthcare access and community development.",
      href: "/get-involved/partner",
    },
  ];

  return (
    <main className="min-h-screen py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="global-px mx-auto mb-8 max-w-5xl items-center text-center"
      >
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Get Involved
        </h1>
        <p className="">
          The Sainte Thérèse Foundation thrives through collective effort.
          Whether you give, serve, or collaborate — your involvement creates
          real, lasting change in lives across Rwanda.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="site-card items-center"
          >
            <div className="text-primary mb-4 flex justify-center">
              <item.icon className="text-primary" size={28} />
            </div>
            <h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
            <p className="mb-3">{item.desc}</p>
            <Link href={item.href} className="font-medium hover:underline">
              Learn more →
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
