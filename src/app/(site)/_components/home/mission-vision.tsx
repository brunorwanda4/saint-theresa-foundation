"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MissionVision = () => {
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,

				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,

			},
		},
	};

	return (
		<motion.div 
			className="bg-foreground text-background lg:p-8 p-4 rounded-2xl flex flex-col gap-4 lg:gap-6"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			<motion.h2 className="h2" variants={itemVariants}>
				Our Mission and Vision
			</motion.h2>
			<motion.div 
				className="flex flex-col lg:flex-row lg:gap-6 gap-4"
				variants={itemVariants}
			>
				<motion.div 
					className="p-4 rounded-xl bg-primary"
					variants={itemVariants}
				>
					<Link href={"/about/vision-mission"} className="w-fit">
						<h4 className="h4">Mission</h4>
					</Link>
					<p className="p">
						Enhancing well-being for underserved communities through mobile
						healthcare, digital tools, and community pharmacies, rooted in human
						dignity and compassionate care.
					</p>
				</motion.div>
				<motion.div 
					className="p-4 rounded-xl bg-muted"
					variants={itemVariants}
				>
					<Link href={"/about/vision-mission"} className="w-fit">
						<h4 className="h4">Vision</h4>
					</Link>
					<p className="p">
						A Rwanda where every individual, regardless of economic status or
						geography, can access affordable, quality healthcare and essential
						medicines.
					</p>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default MissionVision;
