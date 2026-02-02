"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DigitalHealthHero = () => {
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
				<h1 className="h1">Digital health</h1>
				<p className=" text-lg ">
					Is a core strategic pillar of the Sainte Thérèse Foundation’s mission
					to provide equitable healthcare access to underserved and
					"hard-to-reach" populations. By integrating technology, the foundation
					aims to overcome the geographical barriers that prevent{" "}
					<strong>43% of rural Rwandans</strong> from accessing traditional
					clinics.
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
					src="/images/mobile-clinic.jpg"
					alt="Slanted"
					fill
					style={{
						clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
					}}
					className="object-cover rounded-r-2xl"
				/>
			</motion.div>
		</motion.div>
	);
};

export default DigitalHealthHero;
