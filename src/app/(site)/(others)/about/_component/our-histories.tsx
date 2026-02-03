"use client";

import { motion } from "framer-motion";
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
				"Established a private medical polyclinic in the Rwamagana District to provide quality healthcare to the Eastern Province.",
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
			description:
				"Transitioning to a mobile-first healthcare model with the procurement of specialized medical vehicles.",
			impact:
				"Goal to eliminate geographical barriers for the 43% of rural Rwandans lacking clinic access.",
			image: "/icons/ambulance.png",
		},
	];

	const histories = isExpanded
		? [...foundationHistory].reverse()
		: [...foundationHistory].reverse().slice(0, 3);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: {
			opacity: 0,
			x: -30,
			y: 20,
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: 0.6,
			},
		},
	};

	const titleVariants = {
		hidden: {
			opacity: 0,
			x: -50,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
			},
		},
	};

	return (
		<motion.div
			className=" flex flex-col lg:flex-row lg:gap-16 gap-8"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<motion.div className=" lg:w-1/2" variants={titleVariants}>
				<h2 className="h1">Key Highlights of Our Journey</h2>
			</motion.div>
			<motion.div
				className=" lg:w-1/2 flex flex-col divide-y divide-gray-200"
				variants={containerVariants}
			>
				{histories.map((history, index) => (
					<motion.div
						key={history.title}
						className={cn("flex flex-col gap-4 items-start py-6")}
						variants={itemVariants}
						whileHover={{
							x: 5,
							transition: { duration: 0.2 },
						}}
					>
						<div className="flex flex-row gap-4 items-center">
							<motion.div
								initial={{ scale: 0, rotate: -180 }}
								whileInView={{ scale: 1, rotate: 0 }}
								viewport={{ once: true }}
								transition={{
									delay: 0.3 + index * 0.1,
									duration: 0.5,
									type: "spring",
									stiffness: 200,
								}}
							>
								<Image
									src={history.image}
									alt={history.title}
									width={40}
									height={40}
									loading="lazy"
									className="group-hover:animate-bounce object-contain"
								/>
							</motion.div>
							<div>
								<motion.h1
									className="h2"
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.4 + index * 0.1 }}
								>
									{history.year}
								</motion.h1>
								<motion.h2
									className=" h3 opacity-70"
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.5 + index * 0.1 }}
								>
									{history.title}
								</motion.h2>
							</div>
						</div>
						<motion.div
							className="flex flex-col"
							initial={{ opacity: 0, y: 15 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.6 + index * 0.1 }}
						>
							<p className="  p">
								{history.impact} <br /> {history.description}
							</p>
						</motion.div>
					</motion.div>
				))}
				{!isOnPage && foundationHistory.length > 3 && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.8 }}
					>
						<Button
							onClick={() => setIsExpanded(!isExpanded)}
							className="mt-4  transition-all w-fit"
							variant="outline"
						>
							{isExpanded ? "Show Less" : "Show All History"}{" "}
							{isExpanded ? <Minus /> : <Plus />}
						</Button>
					</motion.div>
				)}
			</motion.div>
		</motion.div>
	);
};

export default OurHistories;
