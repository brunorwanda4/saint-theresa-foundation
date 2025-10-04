"use client";

const MobileClinicsPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-16 md:px-12">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-blue-900">Mobile Clinics</h1>
          <p className="mx-auto max-w-3xl text-gray-700">
            Our mobile clinics bring essential healthcare directly to people
            living in remote and underserved communities — bridging the gap
            between medical access and those in need.
          </p>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <img
            src="/images/mobile-clinic.jpg"
            alt="Mobile Clinic"
            className="h-72 w-full rounded-lg object-cover shadow-md"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800">
              How It Works
            </h2>
            <p className="text-gray-700">
              Our vans are equipped with medical tools, diagnostics, and trained
              health professionals to provide maternal care, vaccinations, and
              emergency consultations.
            </p>
            <ul className="list-inside list-disc space-y-1 text-gray-700">
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
