"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ContactWithUs from "../_component/contact-with-us";
import MilestonesAndProvenImpact from "./_components/milestones-and-proven-impact";
import VisionForTheUnderserved from "./_components/vision-for-the-underserved";

const OurStory = () => {
	// Animation variants for the top section
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				duration: 0.6,
			},
		},
	};

	const headingVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	const textVariants = {
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

	// Separator animation variants
	const separatorVariants = {
		hidden: { width: "0%" },
		visible: {
			width: "100%",
			transition: {
				duration: 1.2,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	return (
		<section className=" px-8 mt-12 space-y-8">
			<motion.div 
				className=" flex flex-col lg:flex-row gap-8"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.h1 
					className="h1 lg:w-1/2"
					variants={headingVariants}
				>
					The Foundation's Roots (2013–2019)
				</motion.h1>
				<motion.p 
					className="p lg:w-1/2"
					variants={textVariants}
				>
					The story began in <strong>2013</strong> with the establishment of the
					<strong>Sainte Thérèse Polyclinic</strong> in Rwamagana, Rwanda.
					Founded by AHAYO Marie Anita a public health expert with 20 years of
					experience the clinic grew into a trusted regional hub serving
					approximately <strong>50,000 patients annually</strong> with
					specialized services like radiology and gastro-endoscopy. <br />{" "}
					<br /> In <strong>2019</strong>, the mission expanded with the
					creation of <strong>TRUST Pharmalab</strong>, a wholesale
					pharmaceutical company designed to strengthen the medical supply chain
					across Rwanda and neighboring countries like Congo and Burundi.
				</motion.p>
			</motion.div>
			<motion.div
				className="  "
				initial={{ scale: 1.1, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ 
					duration: 1.2, 
					ease: [0.22, 1, 0.36, 1] as const
				}}
			>
				<div className="max-w-[1280px] mx-auto w-full relative flex-shrink-0 h-screen">
					<Image
						fill
						quality={95}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
						src={"/images/our/ahayo-2.jpg"}
						alt="Our Team"
						className="object-cover rounded-2xl"
						priority
					/>
				</div>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={separatorVariants}
				className="overflow-hidden"
			>
				<Separator />
			</motion.div>
			<VisionForTheUnderserved />
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={separatorVariants}
				className="overflow-hidden"
			>
				<Separator />
			</motion.div>
			<MilestonesAndProvenImpact />
			<ContactWithUs />
		</section>
	);
};

export default OurStory;