"use client";
import { motion } from "framer-motion";

export default function PartnerPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-white px-6 py-20">
      <div className="mx-auto mb-14 max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-indigo-700">
          Partner With Us
        </h1>
        <p className="text-gray-600">
          Join hands with the Sainte Thérèse Foundation to build a future of
          accessible and compassionate healthcare.
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-8 text-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-3 text-2xl font-semibold text-indigo-700">
            Partnership Opportunities
          </h2>
          <ul className="ml-6 list-disc space-y-2">
            <li>Faith-based collaborations in health outreach</li>
            <li>Donor-funded rural health programs</li>
            <li>Training and technology partnerships</li>
            <li>Research and policy advocacy alliances</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-3 text-2xl font-semibold text-indigo-700">
            Current Partners
          </h2>
          <p>
            We are grateful for our collaboration with local dioceses,
            international NGOs, and public health institutions that share our
            mission of care and faith.
          </p>
        </motion.div>

        <a
          href="/contact"
          className="mt-10 block rounded-full bg-indigo-600 px-10 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"
        >
          Become a Partner
        </a>
      </div>
    </section>
  );
}
