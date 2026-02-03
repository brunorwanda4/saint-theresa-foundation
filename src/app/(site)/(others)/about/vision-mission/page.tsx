"use client";

import { motion } from "framer-motion";
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

	// Animation variants
	const slideInFromLeft = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut" as const
			}
		}
	};

	const fadeInWithBlur = {
		hidden: { opacity: 0, filter: "blur(10px)" },
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			transition: {
				duration: 0.8,
				ease: "easeOut" as const
			}
		}
	};

	const missionContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1
			}
		}
	};

	const missionItemVariants = {
		hidden: { 
			opacity: 0, 
			scale: 0.8,
			y: 20
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut" as const
			}
		}
	};

	const separatorVariants = {
		hidden: { scaleX: 0 },
		visible: {
			scaleX: 1,
			transition: {
				duration: 1,
				ease: "easeInOut" as const
			}
		}
	};

	return (
		<main className="min-h-screen py-8 space-y-8 px-8">
			<VisionMissionHero />
			
			<motion.div
				variants={separatorVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				style={{ originX: 0 }}
			>
				<Separator />
			</motion.div>

			<div className=" flex flex-col gap-4 lg:flex-row lg:gap-8">
				<motion.h1 
					className=" h1 lg:w-1/2"
					variants={slideInFromLeft}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					Vision
				</motion.h1>
				<motion.p 
					className="md:text-xl text-lg lg:w-1/2"
					variants={fadeInWithBlur}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					The foundation envisions a Rwanda where every individual, regardless
					of their economic status or geographical location, has access to
					affordable, quality healthcare and essential medicines.
				</motion.p>
			</div>

			<div className=" flex flex-col gap-4 lg:flex-row lg:gap-8 lg:mt-12">
				<motion.h1 
					className=" h1 lg:w-1/2"
					variants={slideInFromLeft}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					Mission
				</motion.h1>
				<div className="lg:w-1/2 space-y-4">
					<motion.p 
						className="md:text-xl text-lg lg:w-1/2"
						variants={fadeInWithBlur}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
						The foundation's mission is to enhance the well-being of underserved
						communities through three primary pillars:
					</motion.p>
					<motion.section 
						className="flex flex-col gap-4"
						variants={missionContainerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
						{ourMissions.map((mission, index) => (
							<motion.div
								key={`${index}-${mission.title}`}
								className="flex flex-col gap-2"
								variants={missionItemVariants}
							>
								<h3 className="h3">
									{index + 1}. {mission.title}
								</h3>
								<p className="p">{mission.description}</p>
							</motion.div>
						))}
					</motion.section>
				</div>
			</div>

			<motion.div
				variants={separatorVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				style={{ originX: 0 }}
			>
				<Separator />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{
					duration: 0.8,
					ease: "easeOut"
				}}
			>
				<BeTheLightOfHope />
			</motion.div>
		</main>
	);
};

export default AboutVisionMissionPage;
