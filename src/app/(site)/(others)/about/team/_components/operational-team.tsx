"use client";
import { motion } from "framer-motion";

const OperationalTeam = () => {
	const visions = [
		{
			title: "Qualified Healthcare Professionals",
			description:
				" Licensed doctors, nurses, and specialists from the Sainte Thérèse Polyclinic who conduct community screenings and provide medical consultations.",
		},
		{
			title: "Trained Volunteers",
			description:
				"Dedicated individuals who assist with community mobilization, patient registration, and health education during outreach events.",
		},
		{
			title: "Field Health Staff",
			description:
				"As part of the 2025–2027 Action Plan, the foundation is recruiting a dedicated executive team and specialized field health staff to manage upcoming mobile clinics and community pharmacies.",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				duration: 0.6,
			},
		},
	};

	const slideFromLeftVariants = {
		hidden: { opacity: 0, x: -60 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	const fadeInVariants = {
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
		<motion.main
			className="space-y-8 lg:space-y-16"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={containerVariants}
		>
			<motion.div
				className=" flex flex-col gap-4 lg:gap-8 lg:flex-row"
				variants={containerVariants}
			>
				<motion.h2 className="h1 lg:w-1/3" variants={slideFromLeftVariants}>
					The Operational Team
				</motion.h2>
				<motion.p
					className=" text-lg font-medium lg:text-xl lg:w-1/2 "
					variants={fadeInVariants}
				>
					Beyond the executive leadership, the foundation’s work is implemented
					on the ground by:
				</motion.p>
			</motion.div>

			<motion.div
				className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
				variants={containerVariants}
			>
				{visions.map((vision, index) => (
					<motion.div
						key={`${index}-${vision.title}`}
						className="flex flex-col gap-2 bg-foreground text-background p-4 lg:p-8 min-h-32 rounded-md justify-center items-center"
						variants={visionCardVariants}
						custom={index}
					>
						<h3 className="h2 text-center ">{vision.title}</h3>
						<p className="p text-center">{vision.description}</p>
					</motion.div>
				))}
			</motion.div>
		</motion.main>
	);
};

export default OperationalTeam;
