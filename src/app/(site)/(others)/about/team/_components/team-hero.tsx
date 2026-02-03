"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TeamHero = () => {
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
				className="lg:w-1/3 w-1/2 items-center flex"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.8,
					delay: 0.2,
					ease: "easeOut",
				}}
			>
				<h2 className="lg:text-3xl md:text-2xl text-xl ">
					The <strong>Sainte Thérèse Foundation</strong> is led by a team of
					seasoned humanitarian and healthcare professionals with over{" "}
					<strong> 40 years of combined global experience</strong> in public
					health, governance, and community service. <br />
				</h2>
			</motion.div>
			<motion.div
				className="relative  lg:w-2/3 w-1/2 h-[350px]"
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

export default TeamHero;
