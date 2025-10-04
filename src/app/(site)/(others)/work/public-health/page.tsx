"use client";

const PublicHealthPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-yellow-50 to-orange-100 px-6 py-16 md:px-12">
      <section className="mx-auto max-w-7xl space-y-8">
        <h1 className="text-center text-4xl font-bold text-orange-900">
          Public Health Education
        </h1>
        <p className="mx-auto max-w-3xl text-center text-gray-700">
          Through community education and outreach, we raise awareness about
          nutrition, hygiene, preventive care, and responsible medicine use.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { title: "Nutrition Awareness", img: "/images/nutrition.jpg" },
            { title: "Hygiene Campaigns", img: "/images/hygiene.jpg" },
            {
              title: "School Health Programs",
              img: "/images/school-health.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg bg-white p-4 text-center shadow-lg transition hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mb-3 h-40 w-full rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PublicHealthPage;
