"use client";

const CommunityPharmaciesPage = () => {
  return (
    <main className="min-h-screen py-16">
      <h1 className="text-foreground global-px text-4xl font-bold">
        Community Pharmacies
      </h1>
      <section className="bg-foreground text-primary-foreground global-px mt-4 space-y-8 py-6">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex-1">
            <p className="">
              The Sainte Thérèse Foundation establishes community-based
              pharmacies that ensure affordable and reliable access to essential
              medicines in rural areas.
            </p>
            <ul className="text-primary-content mt-4 list-inside list-disc space-y-1">
              <li>Locally managed with professional supervision</li>
              <li>Affordable essential medicines</li>
              <li>Pharmacist training and community education</li>
            </ul>
          </div>
          <img
            src="/images/pharmacy.jpg"
            alt="Community Pharmacy"
            className="h-72 w-full object-cover shadow-lg md:w-1/2"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default CommunityPharmaciesPage;
