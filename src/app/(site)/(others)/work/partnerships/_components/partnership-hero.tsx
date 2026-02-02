"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PartnershipHero = () => {
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
				className="lg:w-1/3 w-1/2 gap-8 flex flex-col"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.8,
					delay: 0.2,
					ease: "easeOut",
				}}
			>
				<h1 className="h1">Partnerships & Collaborations</h1>
				<p className=" text-lg ">
					The Sainte Thérèsa Foundation builds its impact through a diverse
					network of strategic partners, ranging from government health bodies
					and international peacebuilding organizations to local faith-based
					networks and global pharmaceutical suppliers.
				</p>
			</motion.div>
			<motion.div
				className="relative  w-1/2  lg:w-2/3  h-80"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.8,
					delay: 0.4,
					ease: "easeOut",
				}}
			>
				<Image
					src="/images/image-1.jpeg"
					alt="Slanted"
					fill
					style={{
						clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
					}}
					className="object-cover rounded-r-2xl"
				/>
			</motion.div>
		</motion.div>
	);
};

export default PartnershipHero;
