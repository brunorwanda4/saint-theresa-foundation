"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const MilestonesAndProvenImpact = () => {
	const milestonesAndImpact = [
		{
			icon: "/icons/healthcare.png",
			title: "Established Regional Healthcare Hub",
			description:
				"Since 2013, the Sainte Thérèse Polyclinic has provided specialized medical care in Rwanda's Eastern Province. It has grown into a trusted provider that serves between 40,000 and 50,000 patients every year.",
		},
		{
			icon: "/icons/stethoscope.png",
			title: "Strengthened Regional Medical Supply",
			description:
				"In 2019, the establishment of TRUST Pharmalab enabled the distribution of medical equipment and essential medicines. We now support public and private health institutions across Rwanda, Congo, and Burundi.",
		},
		{
			icon: "/icons/reach.png",
			title: "Proven Community Outreach Success",
			description:
				"Our recent preventive health missions have successfully reached over 800 beneficiaries in a single outreach event. These activities provide free basic health services to underserved populations in rural and peri-urban settings.",
		},
		{
			icon: "/icons/task.png",
			title: "Early Detection of Chronic Conditions",
			description:
				"We have successfully identified undiagnosed cases of hyperglycemia, hypertension, and HIV in individuals who had never been previously screened. This initiative facilitates immediate counseling and referrals to formal health facilities for management.",
		},
		{
			icon: "/icons/protest.png",
			title: "Launched Strategic Action Plan (2025–2027)",
			description:
				"We have finalized a roadmap to deploy two mobile medical vehicles and establish two community pharmacies to reach the 43% of rural Rwandans lacking clinic access. This plan includes a total investment of approximately $186,500 USD for community health.",
		},
		{
			icon: "/icons/terms-and-conditions.png",
			title: "Empowered Local Health Capacity",
			description:
				"Through our integrated mission, we are training community health workers and promoting local leadership in disease prevention and nutrition. This builds long-term sustainability and local ownership within the communities we serve.",
		},
	];

	return (
		<section className="space-y-8 py-12">
			<h1 className="h1">Milestones and Proven Impact</h1>
			<main className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{milestonesAndImpact.map((milestone, index) => (
					<motion.div
						key={`${milestone.title}-${index}`}
						initial="initial"
						whileHover="hover"
						className={cn(
							"relative overflow-hidden isolate flex flex-col gap-6 border border-muted-foreground/30 p-6 lg:p-10 rounded-xl justify-between items-start",
							"group cursor-default",
						)}
					>
						{/* Animated Background Overlay */}
						<motion.div
							variants={{
								initial: { y: "-100%" },
								hover: { y: 0 },
							}}
							transition={{
								duration: 0.4,
								ease: [0.33, 1, 0.68, 1], // Custom easeOutExpo for smoothness
							}}
							className="absolute inset-0 bg-primary -z-10"
						/>

						<div className="flex flex-col gap-4 z-10">
							<h2 className="h2 transition-colors duration-300 group-hover:text-primary-foreground">
								{milestone.title}
							</h2>
							<p className="p transition-colors duration-300 group-hover:text-primary-foreground/90">
								{milestone.description}
							</p>
						</div>

						<div className="z-10 bg-primary/10 rounded-full p-4 transition-all duration-300 group-hover:bg-foreground group-hover:scale-110">
							<Image
								src={milestone.icon}
								alt={milestone.title}
								width={32}
								height={32}
								loading="lazy"
								className="object-contain transition-all duration-300 group-hover:invert"
							/>
						</div>
					</motion.div>
				))}
			</main>
		</section>
	);
};

export default MilestonesAndProvenImpact;
