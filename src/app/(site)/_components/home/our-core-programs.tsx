"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const OurCorePrograms = () => {
	const corePrograms = [
		{
			title: "Mobile Medical Clinics",
			description:
				"Deploying specialized vehicles to provide essential healthcare services directly to rural and hard-to-reach populations .",
			className: " bg-muted-foreground",
			href: "/work/mobile-clinics",
		},
		{
			title: "Sustainable Community Pharmacies",
			description:
				"Establishing local pharmacies that offer subsidized or low-cost medication to ensure the most vulnerable can afford treatment .",
			className: " bg-primary",
		},
		{
			title: "Digital Health Initiatives",
			description:
				"Launching e-consultation and digital prescription platforms to overcome geographical barriers and connect patients with doctors remotely.",
			className: " bg-secondary text-foreground",
			href: "/work/digital-health",
		},
		{
			title: "Preventive Health & Public Education",
			description:
				"Providing community screenings for conditions like HIV and diabetes while conducting workshops on nutrition and hygiene.",
			className: " bg-muted",
			href: "/work/public-health",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,

				staggerChildren: 0.1,
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
		<motion.section
			className="space-y-8 flex flex-col justify-between h-full"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			<motion.h1 className="h1" variants={itemVariants}>
				Our Core Programs
			</motion.h1>
			<motion.div
				className="grid-cols-1 lg:grid-cols-2 grid gap-4"
				variants={containerVariants}
			>
				{corePrograms.map((program, index) => (
					<motion.div
						key={`${program.title}-${index}`}
						className={cn(
							"rounded-md px-4 lg:px-6 py-4 text-background group",
							program.className,
						)}
						variants={itemVariants}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<p className="text-lg">{program.description}</p>
						<Link
							href={`${program.href}`}
							className="mt-4 flex flex-row items-center justify-between"
						>
							<h2 className="font-light">{program.title}</h2>
							<Plus size={28} className="group-hover:rotate-45 duration-150" />
						</Link>
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
};

export default OurCorePrograms;
