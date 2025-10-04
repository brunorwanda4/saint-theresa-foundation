"use client";

const CommunityPharmaciesPage = () => {
  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-bold text-green-800">
              Community Pharmacies
            </h1>
            <p className="mb-6 leading-relaxed text-gray-700">
              The Sainte Thérèse Foundation establishes community-based
              pharmacies that ensure affordable and reliable access to essential
              medicines in rural areas.
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Locally managed with professional supervision</li>
              <li>Affordable essential medicines</li>
              <li>Pharmacist training and community education</li>
            </ul>
          </div>
          <img
            src="/images/pharmacy.jpg"
            alt="Community Pharmacy"
            className="h-72 w-full rounded-lg object-cover shadow-lg md:w-1/2"
          />
        </div>
      </section>
    </main>
  );
};

export default CommunityPharmaciesPage;
