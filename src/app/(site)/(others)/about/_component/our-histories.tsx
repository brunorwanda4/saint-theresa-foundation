"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface OurHistoriesProps {
	isOnPage?: boolean;
}

const OurHistories = ({ isOnPage = false }: OurHistoriesProps) => {
	const [isExpanded, setIsExpanded] = useState(isOnPage);

	const foundationHistory = [
		{
			year: "2013",
			title: "Founding of Sainte Thérèse Polyclinic",
			description:
				"Established a private medical polyclinic in the Rwamagana District...",
			impact: "Serves 40,000 to 50,000 patients annually.",
			image: "/icons/trowel.png",
		},
		{
			year: "2019",
			title: "Launching TRUST Pharmalab",
			description:
				"Created a wholesale pharmaceutical company to specialize in the distribution of medical equipment and essential medicines across Rwanda and East Africa.",
			impact:
				"Strengthened medical supply chains for public and private institutions.",
			image: "/icons/development.png",
		},
		{
			year: "Early 2025",
			title: "Formalizing the Foundation",
			description:
				"Seasoned humanitarian professionals established the Sainte Thérèse Foundation as a nonprofit extension of the clinic to reach 'unreachable' rural populations.",
			impact:
				"Strategic setup and legal registration completed to scale community outreach.",
			image: "/icons/contract.png",
		},
		{
			year: "Late 2025",
			title: "Record-Breaking Community Outreach",
			description:
				"Conducted a major preventive health screening at the Rwamagana Catholic Church, providing free diagnostic services.",
			impact:
				"Exceeded expectations by reaching over 800 beneficiaries in a single mission.",
			image: "/icons/community.png",
		},
		{
			year: "2026 & Beyond",
			title: "The Mobile Clinic Era",
			description: "Transitioning to a mobile-first healthcare model...",
			impact: "Goal to eliminate geographical barriers.",
			image: "/icons/ambulance.png",
		},
	];

	// Reverse once, then slice based on state
	const allHistories = [...foundationHistory].reverse();
	const displayedHistories = isExpanded
		? allHistories
		: allHistories.slice(0, 3);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			className="flex flex-col lg:flex-row lg:gap-16 gap-8"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }}
		>
			<motion.div
				className="lg:w-1/2"
				variants={{
					hidden: { opacity: 0, x: -20 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<h2 className="h1">Key Highlights of Our Journey</h2>
			</motion.div>

			<motion.div
				className="lg:w-1/2 flex flex-col divide-y divide-gray-200"
				variants={containerVariants}
				layout // This makes the container expand smoothly
			>
				{/* AnimatePresence handles the smooth entrance/exit of new items */}
				<AnimatePresence mode="popLayout">
					{displayedHistories.map((history) => (
						<motion.div
							key={history.title} // Ensure this is unique
							layout
							variants={itemVariants}
							initial="hidden"
							animate="visible"
							exit={{ opacity: 0, height: 0 }}
							className="flex flex-col gap-4 items-start py-6"
						>
							<div className="flex flex-row gap-4 items-center">
								<Image
									src={history.image}
									alt={history.title}
									width={40}
									height={40}
									className="object-contain"
								/>
								<div>
									<h1 className="h2">{history.year}</h1>
									<h2 className="h3 opacity-70">{history.title}</h2>
								</div>
							</div>
							<p className="p">
								<strong>{history.impact}</strong> <br /> {history.description}
							</p>
						</motion.div>
					))}
				</AnimatePresence>

				{foundationHistory.length > 3 && (
					<motion.div layout>
						<Button
							onClick={() => setIsExpanded(!isExpanded)}
							className="mt-4 transition-all w-fit"
							variant="outline"
						>
							{isExpanded ? "Show Less" : "Show All History"}
							{isExpanded ? (
								<Minus className="ml-2" />
							) : (
								<Plus className="ml-2" />
							)}
						</Button>
					</motion.div>
				)}
			</motion.div>
		</motion.div>
	);
};

export default OurHistories;
