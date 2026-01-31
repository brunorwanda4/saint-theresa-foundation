"use client";

import { motion } from "framer-motion";
import { LandingLinks } from "@/lib/const/landing-link-const";
import Link from "next/link";

const LandingLink = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,

        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,

      },
    },
  };

  return (
    <motion.section
      className="global-px grid grid-cols-2 gap-8 lg:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {LandingLinks.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div 
            key={i} 
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <motion.div 
              className="cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, }}
            >
              <Link href={item.href}>
                <Icon className="text-primary" />
              </Link>
            </motion.div>
            <h4 className="mt-2 text-lg font-bold">
              <Link href={item.href}>{item.title}</Link>
            </h4>
            <p className="text-center text-sm text-gray-600 max-sm:text-sm">
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </motion.section>
  );
};

export default LandingLink;
