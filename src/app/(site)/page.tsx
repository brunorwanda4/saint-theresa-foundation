"use client";
import { motion } from "framer-motion";
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

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
		},
	},
};

const LadingPage = () => {
	return (
		<motion.div
			className="space-y-8 px-8"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<HomeHero />
			<motion.div variants={itemVariants}>
				<WhoWeAre />
			</motion.div>
			<motion.div variants={itemVariants}>
				<ThingsWeDone />
			</motion.div>
			<motion.div variants={itemVariants}>
				<MissionVision />
			</motion.div>
			<motion.div variants={itemVariants}>
				<OurCorePrograms />
			</motion.div>
			<motion.div variants={itemVariants}>
				<OurPathToChange />
			</motion.div>
			<motion.div variants={itemVariants}>
				<OurGrowingImpact />
			</motion.div>
			<motion.div variants={itemVariants}>
				<LeadershipTeam />
			</motion.div>
			<motion.div variants={itemVariants}>
				<BeTheLightOfHope />
			</motion.div>
			<motion.div variants={itemVariants}>
				<LandingLink />
			</motion.div>
		</motion.div>
	);
};

export default LadingPage;
