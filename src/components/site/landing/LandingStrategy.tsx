import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";

const LandingStrategy = () => {
  return (
    <section className="global-px from-primary flex items-center justify-between bg-gradient-to-r to-cyan-500 py-8">
      <div>
        <h2 className="text-primary-foreground text-5xl font-bold">
          Strategy 2025 - 2027
        </h2>
        <span className="text-primary-foreground text-5xl font-semibold">
          Resilient Peace
        </span>
        <div className="mt-4">
          <SiteLink className="font-semibold" link="/programs/timeline">
            Learn More
          </SiteLink>
        </div>
      </div>
      <div className="mr-16">
        <MyImage
          src="/images/portada.webp"
          className="h-72 w-52"
          classname=" object-contain"
        />
      </div>
    </section>
  );
};

export default LandingStrategy;
