"use client";

import MyImage from "@/components/common/images/MyImage";

const DigitalHealthPage = () => {
  return (
    <main className="mx-auto max-w-7xl space-y-16 px-6 py-16 md:px-12">
      <section className="relative h-64 overflow-hidden rounded-lg">
        <MyImage
          src="/images/digital-health.jpg"
          alt="Digital Health"
          className="h-full w-full object-cover"
          useSkeleton
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Digital Health
          </h1>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Technology for Better Healthcare
        </h2>
        <p className="text-foreground">
          Sainte Thérèse Foundation leverages digital tools to connect patients
          and doctors remotely. Our e-health solutions make consultations,
          follow-ups, and prescriptions accessible even in areas without
          physical clinics.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Digital Solutions Include</h3>
        <ul className="text-foreground list-inside list-disc space-y-2">
          <li>Telemedicine consultations</li>
          <li>Digital health records and follow-up systems</li>
          <li>SMS and mobile app health education programs</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 text-xl font-semibold">Why It Matters</h3>
        <p className="text-foreground">
          Our digital health initiatives close the gap between rural communities
          and quality healthcare, improving efficiency and continuity of care.
        </p>
      </section>
    </main>
  );
};

export default DigitalHealthPage;
