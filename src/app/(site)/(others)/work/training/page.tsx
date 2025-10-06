"use client";

const TrainingPage = () => {
  return (
    <main className="min-h-screen py-16">
      <h1 className="text-foreground global-px text-4xl font-bold">
        Training & Empowerment
      </h1>
      <section className="bg-foreground text-primary-foreground global-px mt-4 space-y-8 py-6">
        <div className="space-y-8">
          <p className="">
            Building local capacity through professional training for health
            workers and community leaders.
          </p>
        </div>

        <div className="flex flex-row gap-10">
          <div className="space-y-4">
            <h2 className="text-primary-foreground text-2xl font-semibold">
              Key Focus Areas
            </h2>
            <ul className="text-primary-content list-inside list-disc space-y-1">
              <li>Workshops on basic healthcare and disease prevention</li>
              <li>Leadership and community mobilization skills</li>
              <li>Continuous mentorship and certification programs</li>
            </ul>
          </div>
          <img
            src="/images/training.jpg"
            alt="Training"
            className="h-80 object-cover shadow-md"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default TrainingPage;
