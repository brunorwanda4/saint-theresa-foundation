"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import ContactWithUs from "../../about/_component/contact-with-us";
import TrainingHero from "./_components/training-hero";

const TrainingPage = () => {
	const humanCapitalStrategies = [
		{
			objective: "Training Health Agents",
			description:
				"The foundation is committed to training community health agents to ensure the sustainability of its interventions.",
			className: " bg-secondary text-foreground",
		},
		{
			objective: "Qualified Implementation",
			description:
				"Outreach activities are led by qualified healthcare professionals who are supported by trained volunteers, ensuring high standards of care during missions.",
			className: " bg-primary",
		},
		{
			objective: "Leadership Development",
			description:
				"By promoting local leadership, the foundation aims to foster a sense of responsibility and engagement within the rural populations they serve.",
			className: " bg-muted",
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
		<main className="mx-auto max-w-7xl space-y-8  py-16 px-8">
			<TrainingHero />
			<Separator />
			<section className="space-y-4">
				<p className="p max-w-lg">
					A core strategic objective of the foundation is to ensure that
					communities can take charge of their own well-being through
					professional guidance and leadership development.
				</p>
			</section>

			<motion.div
				className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
				variants={containerVariants}
			>
				{humanCapitalStrategies.map((vision, index) => (
					<motion.div
						key={`${index}-${vision.objective}`}
						className="flex flex-col gap-2 bg-foreground text-background p-4 lg:p-8 min-h-32 rounded-md justify-start items-center"
						variants={visionCardVariants}
						custom={index}
					>
						<h3 className="h3 text-center ">{vision.objective}</h3>
						<p className="p text-center">{vision.description}</p>
					</motion.div>
				))}
			</motion.div>
			<ContactWithUs />
		</main>
	);
};

export default TrainingPage;
