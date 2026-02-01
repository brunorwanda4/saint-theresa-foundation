"use client";
import { motion } from "framer-motion";
import Carousel from "@/components/carousel";

const VisionForTheUnderserved = () => {
	const visions = [
		{
			title: "43% of Rwandans",
			description: "Still live in rural areas with limited access to clinics",
		},
		{
			title: "82% of the rural poor",
			description: "Cannot afford essential medication",
		},
		{
			title: "1 in 3 people",
			description:
				"Lack proper healthcare due to financial or geographical barriers",
		},
	];

	const leaders = [
		{
			image: "/images/our/ahayo-1.jpeg",
			title: "AHAYO Marie Anita ",
			description: "",
		},
		{
			image: "/images/founder.jpg",
			title: "Jean Paul Mugiraneza ",
			description: "",
		},
		{
			image: "/images/our/ahayo-5.jpg",
			title: "AHAYO Marie Anita ",
			description: "",
		},
		{
			image: "/images/our/founder.jpg",
			title: "Jean Paul Mugiraneza ",
			description: "",
		},
	];

	// Animation variants for sliding in from the side (symbolizing "looking forward")
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				duration: 0.6,
			},
		},
	};

	const slideFromLeftVariants = {
		hidden: { opacity: 0, x: -60 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	const slideFromRightVariants = {
		hidden: { opacity: 0, x: 60 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	const fadeInVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	const visionCardVariants = {
		hidden: { opacity: 0, scale: 0.9, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	return (
		<motion.main 
			className="space-y-8 lg:space-y-16"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={containerVariants}
		>
			<motion.div 
				className=" flex flex-col gap-4 lg:gap-8 lg:flex-row"
				variants={containerVariants}
			>
				<motion.h2 
					className="h1 lg:w-1/3"
					variants={slideFromLeftVariants}
				>
					A Vision for the Underserved
				</motion.h2>
				<motion.p 
					className=" text-lg font-medium lg:text-xl lg:w-1/2 "
					variants={fadeInVariants}
				>
					Despite the success of the polyclinic, the founders recognized a
					staggering reality
				</motion.p>
			</motion.div>
			
			<motion.div 
				className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
				variants={containerVariants}
			>
				{visions.map((vision, index) => (
					<motion.div
						key={`${index}-${vision.title}`}
						className="flex flex-col gap-2 bg-foreground text-background p-4 lg:p-8 min-h-32 rounded-md justify-center items-center"
						variants={visionCardVariants}
						custom={index}
					>
						<h3 className="h1 text-center ">{vision.title}</h3>
						<p className="p text-center">{vision.description}</p>
					</motion.div>
				))}
			</motion.div>
			
			<motion.div 
				className=" flex flex-col lg:flex-row-reverse lg:gap-8 gap-4 items-start justify-between"
				variants={containerVariants}
			>
				<motion.section 
					className="relative flex flex-col items-center w-full lg:w-1/2 "
					variants={slideFromRightVariants}
				>
					<div className="max-w-full mx-auto w-full">
						<Carousel
							className="min-h-120"
							imageClassName="min-h-120"
							containerClassName="min-h-120"
							projects={leaders}
						/>
					</div>
				</motion.section>
				<motion.p 
					className=" text-lg lg:w-1/2"
					variants={slideFromLeftVariants}
				>
					Driven by these statistics and the "little way" of St. Thérèse of
					Lisieux, founders <strong>AHAYO Marie Anita</strong> and{" "}
					<strong>Jean Paul Mugiraneza </strong>established the foundation to
					take healing <strong>beyond hospital walls</strong>. They combined
					their 40 years of expertise in public health, governance, and
					peacebuilding to create a model rooted in{" "}
					<strong>human dignity and social solidarity</strong>.
				</motion.p>
			</motion.div>
		</motion.main>
	);
};

export default VisionForTheUnderserved;