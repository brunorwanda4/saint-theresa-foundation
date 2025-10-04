"use client";
import Image from "next/image";

export default function OutreachBioPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-100 to-white px-6 py-20">
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <h1 className="mb-3 text-4xl font-bold text-amber-700">
          Community Outreach
        </h1>
        <p className="text-gray-600">
          How Sainte Thérèse Foundation brings health and hope to the most
          remote areas.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <Image
          src="/images/outreach.jpg"
          alt="Outreach mission"
          width={600}
          height={400}
          className="rounded-3xl shadow-lg"
        />
        <div className="space-y-4 text-gray-700">
          <p>
            Our outreach missions travel to rural communities that lack access
            to healthcare. Mobile clinics and pharmacies offer free
            consultations, medicine, and education.
          </p>
          <p>
            Each mission is an act of faith in service, inspired by St.
            Thérèse’s call to “do small things with great love.”
          </p>
        </div>
      </div>
    </section>
  );
}
