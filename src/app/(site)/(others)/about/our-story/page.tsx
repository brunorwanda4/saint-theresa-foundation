import MyImage from "@/components/common/images/MyImage";
import { Metadata } from "next";
export const metaData: Metadata = {
  title: "Statistics - saint theresa foundation",
};

const OurStory = () => {
  return (
    <div className="relative h-[70vh]">
      <MyImage src="/images/nurse.jpg" className="z-0 h-full w-full" original />
      <div className="from-primary-foreground via-primary-foreground/80 absolute top-0 z-10 h-full w-full bg-gradient-to-r to-transparent" />
      <section id="our-story" className="global-px absolute top-0 z-20 py-8">
        <h1 className="text-foreground mb-4 text-4xl font-bold">Our Story</h1>
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
    </div>
  );
};

export default OurStory;
