"use client";
import SiteLink from "@/components/common/site/site-link";
import { motion } from "framer-motion";

export default function DonatePage() {
  return (
    <section className="min-h-screen py-8">
      <div className="global-px">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-foreground mb-2 text-4xl font-bold"
        >
          Make a Difference Today
        </motion.h1>

        <p className="mb-8">
          Your contribution helps us provide healthcare, training, and hope to
          underserved communities across Rwanda.
        </p>
      </div>
      <div className="bg-foreground global-px text-primary-foreground py-8">
        <div className="mx-auto rounded-3xl">
          <h2 className="text-primary-foreground mb-4 text-2xl font-semibold">
            Ways to Support
          </h2>
          <ul className="mb-8 space-y-3">
            <li>💳 One-time or recurring online donations</li>
            <li>🏦 Bank transfer or mobile money (details below)</li>
            <li>🎁 In-kind donations (medical supplies, food, or equipment)</li>
          </ul>

          <div className="space-y-1">
            <p>
              <strong>Account Name:</strong> Sainte Thérèse Foundation
            </p>
            <p>
              <strong>Bank:</strong> Bank of Kigali
            </p>
            <p>
              <strong>Account No:</strong> 0123-456-789
            </p>
            <p>
              <strong>Mobile Money:</strong> +250 78 000 0000
            </p>
          </div>

          <SiteLink
            className="text-primary-foreground mt-3 inline-block rounded-full px-8 py-3 font-semibold transition"
            link="/contact"
          >
            Contact Us for Support
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
