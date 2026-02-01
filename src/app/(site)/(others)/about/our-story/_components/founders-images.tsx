"use client";
import { motion } from "framer-motion";
import Carousel from "@/components/carousel";

const projects = [
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

const FoundersImages = () => {
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

export default FoundersImages;
