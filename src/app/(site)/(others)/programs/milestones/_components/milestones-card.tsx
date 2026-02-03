"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Target, Users2 } from "lucide-react";
import { ThingCard } from "@/components/cards/thing-card";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};

export const MilestonesCard = () => {
	const milestones = [
		{
			title: "Community Outreach Launched",
			year: "2025",
			desc: "Over 3,000 rural residents reached through mobile clinic services.",
			icon: Users2,
			className: " bg-foreground text-background",
		},
		{
			title: "Digital Health Pilot Success",
			year: "2026",
			desc: "Telemedicine consultations reduced travel time by 70%.",
			icon: Target,
			className: " bg-secondary text-background",
		},
		{
			title: "Youth Training Initiative",
			year: "2026",
			desc: "50 young leaders trained as community health educators.",
			icon: Award,
			className: " bg-muted-foreground text-background",
		},
		{
			title: "Regional Expansion",
			year: "2027",
			desc: "Sainte Thérèse Foundation operational in 5 Rwandan districts.",
			icon: MapPin,
			className:
				"bg-gradient-to-br from-primary to-info  from-10% to-90% text-background",
		},
	];
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={containerVariants}
		>
			<div className={`grid gap-4 grid-cols-1 md:grid-cols-2`}>
				{milestones.map((item, index) => (
					<ThingCard
						key={item.title}
						item={{
							title: item.title,
							total: item.year,
							description: item.desc,
							image: item.icon,
							className: item.className,
						}}
						index={index}
					/>
				))}
			</div>
		</motion.div>
	);
};
