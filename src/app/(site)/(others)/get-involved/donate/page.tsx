"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DonatePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-white px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-4xl font-bold text-rose-700"
        >
          Make a Difference Today
        </motion.h1>
        <p className="mb-10 text-gray-700">
          Your contribution helps us provide healthcare, training, and hope to
          underserved communities.
        </p>

        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-rose-600">
            Ways to Support
          </h2>
          <ul className="mb-8 space-y-3 text-gray-700">
            <li>💳 One-time or recurring online donation</li>
            <li>🏦 Bank transfer or mobile money (details below)</li>
            <li>🎁 In-kind donations (medical supplies, equipment)</li>
          </ul>

          <div className="space-y-1 text-gray-600">
            <p>
              <strong>Account name:</strong> Sainte Thérèse Foundation
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

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-rose-600 px-8 py-3 font-semibold text-white transition hover:bg-rose-700"
          >
            Contact Us for Support
          </Link>
        </div>
      </div>
    </section>
  );
}
