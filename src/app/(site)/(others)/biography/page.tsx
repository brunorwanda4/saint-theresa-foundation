"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactWithUs from "../about/_component/contact-with-us";

export default function BiographyPage() {
	const bioLinks = [
		{
			title: "Community Outreach",
			desc: "Updates from rural outreach missions and mobile clinics bringing care to the most remote areas.",
			href: "/biography/outreach",
		},
		{
			title: "Workshops & Training",
			desc: "Highlights from our ongoing workshops for healthcare and nutrition education.",
			href: "/biography/training",
		},
		{
			title: "Conferences & Advocacy",
			desc: "Where we've represented our mission nationally and internationally to share our vision of faith-driven care.",
			href: "/biography/conferences",
		},
		{
			title: "Press Releases",
			desc: "Official announcements, media coverage, and publications featuring our initiatives.",
			href: "/biography/press",
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
		<main className="min-h-screen py-8 pt-24 lg:gap-y-16 flex flex-col px-8">
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-8 global-px mb-8 max-w-5xl">
				<motion.h1 className="h1 lg:w-1/2">Biography & Events</motion.h1>
				<p className="lg:w-1/2 max-w-2xl leading-relaxed">
					The Sainte Thérèse Foundation continues to grow through faith,
					leadership, and community engagement. Explore how our work extends
					beyond clinics – through outreach, advocacy, and the sharing of hope.
				</p>
			</div>

			<motion.div
				className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
				variants={containerVariants}
			>
				{bioLinks.map((vision, index) => (
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
			<ContactWithUs />
		</main>
	);
}
