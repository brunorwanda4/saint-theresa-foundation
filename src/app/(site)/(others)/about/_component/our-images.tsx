"use client";
import { motion } from "framer-motion";
import Carousel from "@/components/carousel";

const projects = [
	{
		image: "/images/d/8.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/9.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/10.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/11.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/12.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/13.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/14.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/15.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/16.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/17.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/18.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/19.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/20.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/21.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/22.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/23.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/image-9-a.jpeg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/image-11.jpeg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
	{
		image: "/images/d/9.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
	},
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

const OurImages = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
			},
		},
	};

	return (
		<motion.section
			className="relative flex flex-col items-center"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={containerVariants}
		>
			<motion.div
				className="max-w-[1280px] mx-auto w-full"
				initial={{ scale: 0.95, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{
					duration: 0.8,
					delay: 0.2,
				}}
			>
				<Carousel projects={projects} />
			</motion.div>
		</motion.section>
	);
};

export default OurImages;
