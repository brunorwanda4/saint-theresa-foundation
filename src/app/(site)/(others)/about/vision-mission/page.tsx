"use client";

import BeTheLightOfHope from "@/app/(site)/_components/home/be-the-light-of-hope";
import LandingLink from "@/components/site/landing/LandingLink";
import { Separator } from "@/components/ui/separator";
import VisionMissionHero from "./_components/vision-mission-hero";

const AboutVisionMissionPage = () => {
	const ourMissions = [
		{
			title: "Mobile Healthcare",
			description: "Deploying mobile units to reach those in remote areas.",
		},
		{
			title: "Sustainable Access",
			description:
				"Establishing community pharmacies to provide affordable medication.",
		},
		{
			title: "Digital Innovation",
			description:
				"Using medical tools and e-consultation platforms to overcome distance.",
		},
	];
	return (
		<main className="min-h-screen py-8 space-y-8 px-8">
			<VisionMissionHero />
			<Separator />
			<div className=" flex flex-col gap-4 lg:flex-row lg:gap-8">
				<h1 className=" h1 lg:w-1/2">Vision</h1>
				<p className="md:text-xl text-lg lg:w-1/2">
					The foundation envisions a Rwanda where every individual, regardless
					of their economic status or geographical location, has access to
					affordable, quality healthcare and essential medicines.
				</p>
			</div>
			<div className=" flex flex-col gap-4 lg:flex-row lg:gap-8 lg:mt-12">
				<h1 className=" h1 lg:w-1/2">Mission</h1>
				<div className="lg:w-1/2 space-y-4">
					<p className="md:text-xl text-lg lg:w-1/2">
						The foundation's mission is to enhance the well-being of underserved
						communities through three primary pillars:
					</p>
					<section className="flex flex-col gap-4 ">
						{ourMissions.map((mission, index) => (
							<div
								key={`${index}-${mission.title}`}
								className="flex flex-col gap-2"
							>
								<h3 className="h3">
									{index + 1}. {mission.title}
								</h3>
								<p className="p">{mission.description}</p>
							</div>
						))}
					</section>
				</div>
			</div>
			<Separator />
			<BeTheLightOfHope />
		</main>
	);
};

export default AboutVisionMissionPage;
