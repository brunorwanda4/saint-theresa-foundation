"use client";

import MyImage from "@/components/common/images/MyImage";

const MobileClinicsPage = () => {
  return (
    <main className="min-h-screen py-16">
      <h1 className="text-foreground global-px text-4xl font-bold">
        Mobile Clinics
      </h1>
      <section className="bg-foreground text-primary-foreground global-px mt-4 space-y-8 py-6">
        <div className="space-y-8">
          <p className="">
            Our mobile clinics bring essential healthcare directly to people
            living in remote and underserved communities — bridging the gap
            between medical access and those in need.
          </p>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <MyImage
            src="/images/mobile-clinic.jpg"
            alt="Mobile Clinic"
            className="h-72 w-full object-cover shadow-md"
            loading="lazy"
          />
          <div className="space-y-4">
            <h2 className="text-primary-foreground text-2xl font-semibold">
              How It Works
            </h2>
            <p className="text-primary-content">
              Our vans are equipped with medical tools, diagnostics, and trained
              health professionals to provide maternal care, vaccinations, and
              emergency consultations.
            </p>
            <ul className="text-primary-content list-inside list-disc space-y-1">
              <li>On-site check-ups and basic treatments</li>
              <li>Community health data collection</li>
              <li>Health awareness & hygiene sessions</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MobileClinicsPage;
