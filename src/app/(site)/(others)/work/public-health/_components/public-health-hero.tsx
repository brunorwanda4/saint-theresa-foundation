"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PublicHealthHero = () => {
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
				<h1 className="h1">Public Health Education</h1>
				<p className=" text-lg ">
					Is a core strategic objective of the Sainte Thérèse Foundation,
					designed to reduce the burden of disease by fostering community
					awareness and preventive care. It focuses on equipping underserved
					populations with the knowledge to manage their health proactively
					rather than waiting for illnesses to become critical.
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
					src="/images/d/6.jpg"
					alt="Slanted"
					fill
					style={{
						clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
					}}
					className="object-cover rounded-r-2xl"
				/>
			</motion.div>
		</motion.div>
	);
};

export default PublicHealthHero;
