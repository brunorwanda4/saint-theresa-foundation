"use client";

import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";

const PublicHealthPage = () => {
  const educationPrograms = [
    {
      title: "Nutrition Awareness",
      description:
        "Teaching families how balanced diets improve growth, immunity, and child development through local produce.",
      img: "/images/nutrition.jpg",
    },
    {
      title: "Hygiene Campaigns",
      description:
        "Organizing hygiene drives to promote handwashing, sanitation, and disease prevention in rural communities.",
      img: "/images/hygiene.jpg",
    },
    {
      title: "School Health Programs",
      description:
        "Engaging students and teachers with workshops on hygiene, nutrition, and menstrual health education.",
      img: "/images/school-health.jpg",
    },
  ];

  const stats = [
    { label: "Communities Reached", value: "120+" },
    { label: "Workshops Conducted", value: "450+" },
    { label: "Students Educated", value: "10,000+" },
    { label: "Health Volunteers", value: "200+" },
  ];

  const testimonials = [
    {
      name: "Marie U.",
      quote:
        "Before the hygiene program came to our village, many children suffered from preventable diseases.",
      role: "Community Leader, Nyamagabe",
      img: "/images/image-6.jpeg",
    },
    {
      name: "Jean Pierre N.",
      quote:
        "The nutrition workshops helped me start a small vegetable garden for my family. My children are healthier and happier.",
      role: "Parent, Rwamagana",
      img: "/images/image-3.jpeg",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
        <MyImage
          src="/images/image-2.jpeg"
          alt="Public Health Education"
          original
          className="h-full w-full object-cover brightness-75"
        />
        <div className="bg-foreground/80 absolute top-0 z-10 h-full w-full" />
        <div className="absolute z-20 px-6 text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Public Health Education
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            Empowering communities with knowledge to prevent diseases,
            strengthen hygiene, and build lasting well-being.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="global-px mx-auto max-w-7xl py-20">
        <h2 className="text-foreground mb-12 text-3xl font-bold">
          Our Education Initiatives
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {educationPrograms.map((item, i) => (
            <div
              key={i}
              className="relative h-80 w-full duration-200 hover:scale-105"
            >
              <MyImage
                src={item.img}
                original
                loading="lazy"
                className="h-full w-full"
              />
              <div className="absolute bottom-0 h-30 w-full bg-blue-950/70 px-4 py-2">
                <h4 className="text-primary-foreground font-medium">
                  {item.title}
                </h4>
                <p className="text-primary-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-foreground py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-primary-foreground mb-8 text-3xl font-bold">
            Our Impact So Far
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white p-6 shadow-md transition hover:shadow-lg"
              >
                <p className="text-foreground mb-1 text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-foreground mb-12 text-3xl font-bold">
          Community Voices
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative h-80 w-full duration-200 hover:scale-105"
            >
              <MyImage
                src={t.img}
                original
                loading="lazy"
                className="h-full w-full"
              />
              <div className="absolute bottom-0 h-30 w-full bg-blue-950/70 px-4 py-2">
                <div className="text-primary-foreground">
                  <h3 className="text-primary-foreground font-semibold">
                    {t.name}
                  </h3>
                  <p className="text-primary-foreground text-sm">{t.role}</p>
                  <p className="text-primary-foreground italic">“{t.quote}”</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground text-primary-foreground px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Join Us in Promoting Public Health
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-200">
          Your support helps us train local volunteers, expand our health
          outreach, and reach more communities with life-saving education.
        </p>
        <SiteLink
          className="text-primary-foreground inline-block rounded-full px-8 py-3 font-semibold transition"
          link="/get-involved/volunteer"
        >
          Get Involved
        </SiteLink>
      </section>
    </main>
  );
};

export default PublicHealthPage;
