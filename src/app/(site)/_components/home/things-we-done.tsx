"use client";
import { motion } from "framer-motion";
import Carousel from "@/components/carousel";

const projects = [
	{
		image: "/images/d/1.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/3.jpg",
		title: "In Progress",
		description: "Working on something exciting. Check back soon!",
	},
	{
		image: "/images/d/2.jpg",
		title: "Under Construction",
		description: "Building amazing features. More details coming soon!",
	},
	{
		image: "/images/d/4.jpeg",
		title: "Coming Soon",
		description: "An exciting new project is on the way!",
	},
	{
		image: "/images/d/7.jpeg",
		title: "Coming Soon",
		description: "An exciting new project is on the way!",
	},
	{
		image: "/images/d/5.jpg",
		title: "Coming Soon",
		description: "An exciting new project is on the way!",
	},
	{
		image: "/images/d/6.jpg",
		title: "Coming Soon",
		description: "An exciting new project is on the way!",
	},
];

const ThingsWeDone = () => {
	return (
		<motion.section
			className="relative flex flex-col items-center"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8 }}
		>
			{/* Carousel */}
			<div className="max-w-[1280px] mx-auto w-full">
				<Carousel projects={projects} />
			</div>
		</motion.section>
	);
};

export default ThingsWeDone;
