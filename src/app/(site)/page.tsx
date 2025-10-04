import InterpeaceComponent from '@/components/site/landing/InterpeaceComponent';
import LandingHero from '@/components/site/landing/landing-hero';
import LandingLink from '@/components/site/landing/LandingLink';
import LandingNews from '@/components/site/landing/LandingNews';
import LandingPrograms from '@/components/site/landing/LandingPrograms';
import LandingResources from '@/components/site/landing/LandingResources';
import LandingStrategy from '@/components/site/landing/LandingStrategy';

const LadingPage = () => {
  return (
    <div className=" space-y-8 ">
      <LandingHero />
      <InterpeaceComponent />
      <LandingNews />
      <LandingStrategy />
      <LandingPrograms />
      <LandingResources />
      <div className=" h-24" />
      <LandingLink />
    </div>
  );
};

export default LadingPage;
