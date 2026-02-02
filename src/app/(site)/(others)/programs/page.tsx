"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { programs } from "@/lib/data/programs";

export default function ProgramsPage() {
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
		<main className="min-h-screen py-8 pt-24 lg:gap-y-16 flex flex-col px-8">
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-8 global-px mb-8 max-w-5xl">
				<motion.h1 className="h1 lg:w-1/2">Programs & Action Plan</motion.h1>
				<p className="lg:w-1/2 max-w-2xl leading-relaxed">
					Every project of the Sainte Thérèse Foundation aligns with a vision of
					sustainable healthcare, education, and community empowerment. Our plan
					ensures that faith-driven compassion translates into measurable,
					lasting impact.
				</p>
			</div>

			<motion.div
				className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
				variants={containerVariants}
			>
				{programs.map((vision, index) => (
					<motion.div
						key={`${index}-${vision.title}`}
						className="flex flex-col gap-2 justify-between bg-foreground text-background p-4 lg:p-8 min-h-32 rounded-md  items-center"
						variants={visionCardVariants}
						custom={index}
					>
						<div className="flex flex-col gap-2">
							<Link href={vision.href} className="h3 text-center ">
								{vision.title}
							</Link>
							<Link href={vision.href} className="p text-center">
								{vision.desc}
							</Link>
						</div>
						<Link href={vision.href} className="font-medium hover:underline">
							Learn more →
						</Link>
					</motion.div>
				))}
			</motion.div>
		</main>
	);
}
