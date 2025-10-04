import MyImage from "@/components/common/images/MyImage";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-20 px-6 md:px-12">
      {/* Our Story */}
      <section id="our-story" className="pt-12">
        <h1 className="mb-4 text-4xl font-bold">Our Story</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Sainte Thérèse Foundation is a faith-driven, nonprofit initiative
          founded by AHAYO Anita together with seasoned humanitarian
          professionals. It was created as an extension of the impactful work of
          Sainte Thérèse Polyclinic, aiming to bring healthcare closer to poor
          and vulnerable communities in rural Rwanda.
        </p>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          Through mobile clinics, digital health services, community pharmacies,
          and public health education, we seek to reduce the burden of disease
          and promote preventive care in alignment with Christian values of
          compassion, dignity, and solidarity.
        </p>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="pt-12">
        <h2 className="mb-4 text-3xl font-bold">Vision & Mission</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Vision</h3>
            <p className="text-muted-foreground">
              A Rwanda where every individual, regardless of economic status or
              geography, can access affordable, quality healthcare and essential
              medicines.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Mission</h3>
            <p className="text-muted-foreground">
              To enhance the well-being of underserved communities by deploying
              mobile healthcare, digital medical tools, and sustainable
              community pharmacies— rooted in human dignity and guided by
              Christian compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Christian Inspiration */}
      <section id="christian-inspiration" className="pt-12">
        <h2 className="mb-4 text-3xl font-bold">Christian Inspiration</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Inspired by the values of St. Thérèse of Lisieux, known for her
          “little way” of love and service, the Foundation is a humble
          contribution to the healing ministry of Christ. Our mission aligns
          with Matthew 25:40 — “Whatever you did for one of the least of these
          brothers and sisters of mine, you did for me.”
        </p>
      </section>

      {/* Founder Biography */}
      <section id="founder" className="pt-12">
        <h2 className="mb-4 text-3xl font-bold">Founder</h2>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <MyImage
            src="/images/anita.webp"
            alt="AHAYO Marie Anita"
            className="h-64 w-64 rounded-lg object-cover"
            useSkeleton
          />
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed">
              AHAYO Marie Anita holds a Master of Science in Public Health from
              the University of Rwanda in partnership with Tulane University and
              has 20 years of experience in public and private health sectors.
              She is the Co-Founder and Managing Director of Sainte Thérèse
              Polyclinic and TRUST Pharmalab Ltd, a wholesale pharmaceutical
              company in Rwanda.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Through Christian values and philanthropic initiatives, she is
              committed to ensuring healthcare access for underserved
              communities and mobilizing support to expand the Foundation’s
              impact in Rwanda and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Team (placeholder) */}
      <section id="team" className="pt-12">
        <h2 className="mb-4 text-3xl font-bold">Our Team</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Our dedicated team of professionals and volunteers work tirelessly to
          make healthcare accessible for all. Team profiles will be added soon.
        </p>
      </section>
    </main>
  );
}
