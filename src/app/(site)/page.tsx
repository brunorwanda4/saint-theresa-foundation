import type { Metadata } from "next";
import InterpeaceComponent from "@/components/site/landing/InterpeaceComponent";
import LandingBiography from "@/components/site/landing/LandingBiography";
import LandingLink from "@/components/site/landing/LandingLink";
import LandingResources from "@/components/site/landing/LandingResources";
import LandingStrategy from "@/components/site/landing/LandingStrategy";
import LandingHero from "@/components/site/landing/landing-hero";
import HomeHero from "./_components/home/home-hero";

export const metaData: Metadata = {
	title: "Home - saint theresa foundation",
};

const LadingPage = () => {
	return (
		<div className="space-y-8 px-8">
			<HomeHero />
			<InterpeaceComponent />
			<LandingBiography />
			<LandingStrategy />
			<LandingResources />
			<div className="h-24" />
			<LandingLink />
		</div>
	);
};

export default LadingPage;
