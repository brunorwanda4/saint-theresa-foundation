"use client";

const TrainingPage = () => {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16 md:px-12">
      <section className="mx-auto max-w-6xl space-y-10">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-blue-900">
            Training & Empowerment
          </h1>
          <p className="mx-auto max-w-2xl text-gray-700">
            Building local capacity through professional training for health
            workers and community leaders.
          </p>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src="/images/training.jpg"
            alt="Training"
            className="h-80 rounded-xl object-cover shadow-md"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800">
              Key Focus Areas
            </h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Workshops on basic healthcare and disease prevention</li>
              <li>Leadership and community mobilization skills</li>
              <li>Continuous mentorship and certification programs</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TrainingPage;
