"use client";

const PartnershipsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16 md:px-12">
      <section className="mx-auto max-w-7xl space-y-8">
        <h1 className="text-center text-4xl font-bold text-gray-900">
          Partnerships
        </h1>
        <p className="mx-auto max-w-3xl text-center text-gray-700">
          Collaboration is at the heart of our mission. We partner with
          churches, NGOs, government agencies, and international organizations
          to maximize impact.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Ministry of Health",
              desc: "Joint programs for rural clinics and immunization.",
            },
            {
              name: "Faith-Based Organizations",
              desc: "Working with local churches for community outreach.",
            },
            {
              name: "International NGOs",
              desc: "Knowledge sharing and technical assistance.",
            },
            {
              name: "Universities",
              desc: "Training partnerships and medical student rotations.",
            },
            {
              name: "UN Agencies",
              desc: "Supporting SDG3: Good Health and Well-Being.",
            },
            {
              name: "Private Sector",
              desc: "Pharmaceutical and logistics collaboration.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="rounded-lg bg-white p-5 shadow-md transition hover:shadow-lg"
            >
              <h3 className="mb-1 text-lg font-semibold text-gray-800">
                {p.name}
              </h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PartnershipsPage;
