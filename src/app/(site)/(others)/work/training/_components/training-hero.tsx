"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TrainingHero = () => {
	return (
		<motion.div
			className=" flex  w-full"
			initial={{ opacity: 0, scale: 1.05 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				ease: "easeOut",
			}}
		>
			<motion.div
				className="w-1/2  gap-8 flex flex-col"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.8,
					delay: 0.2,
					ease: "easeOut",
				}}
			>
				<h1 className="h1">Building Local Capacity</h1>
				<p className=" text-lg ">
					The <strong>Sainte Thérèse Foundation</strong> views training and
					empowerment as essential pillars for building long-term sustainability
					and local ownership of health initiatives. Rather than just providing
					temporary aid, the foundation focuses on{" "}
					<strong>empowering local capacity</strong> by training community
					health workers and promoting local leadership in health promotion.
				</p>
			</motion.div>
			<motion.div
				className="relative   w-1/2 h-80"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.8,
					delay: 0.4,
					ease: "easeOut",
				}}
			>
				<Image
					src="/images/d/15.jpg"
					alt="Slanted"
					fill
					style={{
						clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
					}}
					className="object-cover rounded-r-2xl"
				/>
			</motion.div>
		</motion.div>
	);
};

export default TrainingHero;
