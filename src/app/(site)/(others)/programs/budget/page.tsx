export default function BudgetPage() {
  const data = [
    {
      category: "Mobile Clinics & Equipment",
      amount: "$150,000",
      description: "Vehicles, diagnostic tools, and outreach kits.",
    },
    {
      category: "Community Pharmacies",
      amount: "$80,000",
      description: "Facility setup, inventory, and management software.",
    },
    {
      category: "Digital Health Platform",
      amount: "$50,000",
      description: "Telehealth infrastructure and digital literacy training.",
    },
    {
      category: "Training & Empowerment",
      amount: "$60,000",
      description: "Workshops, youth leadership, and staff development.",
    },
    {
      category: "Public Health Education",
      amount: "$30,000",
      description: "Awareness campaigns and materials.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-tr from-blue-50 to-indigo-50 px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-indigo-700">
          Budget Overview 2025–2027
        </h1>
        <p className="mb-10 text-center text-gray-600">
          Each contribution fuels real, measurable impact. Here’s how we plan to
          use our resources wisely.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {data.map((item) => (
            <div
              key={item.category}
              className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-lg transition hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-indigo-800">
                {item.category}
              </h2>
              <p className="mt-2 mb-3 text-gray-500">{item.description}</p>
              <span className="text-xl font-bold text-indigo-700">
                {item.amount}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Total projected budget:{" "}
            <span className="font-bold text-indigo-700">$370,000</span>
          </p>
        </div>
      </div>
    </section>
  );
}
