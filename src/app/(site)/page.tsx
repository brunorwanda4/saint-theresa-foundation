import type { Metadata } from "next";
import LandingLink from "@/components/site/landing/LandingLink";
import BeTheLightOfHope from "./_components/home/be-the-light-of-hope";
import HomeHero from "./_components/home/home-hero";
import LeadershipTeam from "./_components/home/leadership-team";
import MissionVision from "./_components/home/mission-vision";
import OurCorePrograms from "./_components/home/our-core-programs";
import OurGrowingImpact from "./_components/home/our-growing-impact";
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
			<OurGrowingImpact />
			<LeadershipTeam />
			<BeTheLightOfHope />
			<LandingLink />
		</div>
	);
};

export default LadingPage;
