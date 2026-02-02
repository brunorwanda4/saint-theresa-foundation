"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ImpactPage() {
	const items = [
		{
			title: "Stories",
			desc: "Personal journeys of healing, resilience, and transformation from the field.",
			href: "/impact/stories",
		},
		{
			title: "Photo & Video Gallery",
			desc: "See our impact in action - visual moments of service and compassion.",
			href: "/impact/gallery",
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
		<main className="min-h-screen py-8 pt-24 lg:gap-y-16 flex flex-col">
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-8 global-px mb-8 max-w-5xl">
				<motion.h1 className="h1 lg:w-1/2">Impact & Stories</motion.h1>
				<p className="lg:w-1/2 max-w-2xl leading-relaxed">
					Behind every number is a human story. Our impact is measured not only
					by data but by the hope restored in the lives we touch every day.
				</p>
			</div>
			<section className=" flex items-center justify-center">
				<motion.div
					className=" flex lg:flex-row flex-col  gap-4 global-px"
					variants={containerVariants}
				>
					{items.map((vision, index) => (
						<motion.div
							key={`${index}-${vision.title}`}
							className="flex flex-col gap-2 justify-between bg-foreground text-background p-4 lg:p-8 min-h-32 rounded-md  items-center lg:w-96"
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
			</section>
		</main>
	);
}
