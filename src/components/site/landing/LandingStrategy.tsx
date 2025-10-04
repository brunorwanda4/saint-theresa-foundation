import MyImage from '@/components/common/images/MyImage';
import SiteLink from '@/components/common/site/site-link';

const LandingStrategy = () => {
  return (
    <section className=" global-px bg-gradient-to-r from-primary items-center to-cyan-500 py-8 flex justify-between">
      <div>
        <h2 className=" font-bold text-5xl text-primary-foreground">Strategy 2021 - 2025</h2>
        <span className=" text-primary-foreground  text-5xl font-semibold">Resilient Peace</span>
        <div className=" mt-4">
          <SiteLink className=" font-semibold" link="/programs">
            Learn More
          </SiteLink>
        </div>
      </div>
      <div className=" mr-16">
        <MyImage src="/images/portada.webp" className=" h-72 w-52" classname=" object-contain" />
      </div>
    </section>
  );
};

export default LandingStrategy;
