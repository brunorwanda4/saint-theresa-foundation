"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const VisionMissionHero = () => {
	return (
		<motion.div 
			className=" flex  w-full"
			initial={{ opacity: 0, scale: 1.05 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ 
				duration: 0.8, 
				ease: "easeOut"
			}}
		>
			<motion.div 
				className="lg:w-1/3 w-1/2 items-center flex"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ 
					duration: 0.8, 
					delay: 0.2,
					ease: "easeOut"
				}}
			>
				<h2 className="lg:text-3xl md:text-2xl text-xl font-medium">
					The{" "}
					<strong className="text-primary">Sainte Thérèse Foundation</strong> is
					guided by a clear strategic roadmap that aims to eliminate barriers to
					healthcare through compassionate service and professional medical
					expertise.
				</h2>
			</motion.div>
			<motion.div 
				className="relative  lg:w-2/3 w-1/2 h-[350px]"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ 
					duration: 0.8, 
					delay: 0.4,
					ease: "easeOut"
				}}
			>
				<Image
					src="/images/d/6.jpg"
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

export default VisionMissionHero;
