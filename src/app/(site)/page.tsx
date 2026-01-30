import type { Metadata } from "next";
import LandingBiography from "@/components/site/landing/LandingBiography";
import LandingLink from "@/components/site/landing/LandingLink";
import LandingResources from "@/components/site/landing/LandingResources";
import LandingStrategy from "@/components/site/landing/LandingStrategy";
import HomeHero from "./_components/home/home-hero";
import MissionVision from "./_components/home/mission-vision";
import OurCorePrograms from "./_components/home/our-core-programs";
import OurPathToChange from "./_components/home/our-path-to-change";
import ThingsWeDone from "./_components/home/things-we-done";
import WhoWeAre from "./_components/home/who-we-are";

export const metaData: Metadata = {
	title: "Home - saint theresa foundation",
};

const LadingPage = () => {
	return (
		<div className="space-y-8 px-8">
			<HomeHero />
			<WhoWeAre />
			<ThingsWeDone />
			<MissionVision />
			<OurCorePrograms />
			<OurPathToChange />
			<LandingBiography />
			<LandingStrategy />
			<LandingResources />
			<div className="h-24" />
			<LandingLink />
		</div>
	);
};

export default LadingPage;
