"use client";
import { motion } from "framer-motion";
import PathToChangeCard from "@/components/cards/path-to-change-card";

const OurPathToChange = () => {
	const pathToChange = [
		{
			step: "Bridge the Access Gap",
			action:
				"Deploying mobile clinics to reach rural populations facing geographical barriers.",
			image: "/images/ambulance.jpg",
			href: "/work/mobile-clinics", // Mapped to Mobile Clinics
		},
		{
			step: "Ensure Medicine Equity",
			action:
				"Establishing community pharmacies to provide subsidized medication to those in financial need.",
			image: "/images/pharmacy-1.jpg",
		},
		{
			step: "Innovate Through Technology",
			action:
				"Using e-consultation and digital tools to connect remote patients with quality medical expertise.",
			image: "/images/mobile-clinic.jpg",
			href: "/work/digital-health", // Mapped to Digital Health
		},
		{
			step: "Cultivate Community Resilience",
			action:
				"Focusing on preventive screenings and health education to stop illnesses before they start.",
			image: "/images/image-2.jpeg",
			href: "/work/public-health", // Mapped to Public Health Education
		},
		{
			step: "Empower Local Leadership",
			action:
				"Training community health workers and local leaders to ensure long-term, self-sustaining health promotion.",
			image: "/images/d/2.jpg",
			href: "/work/training", // Mapped to Training & Empowerment
		},
		{
			step: "Foster Global Solidarity",
			action:
				"Collaborating with international partners to expand our reach from rural Rwanda to Kenya and beyond.",
			image: "/images/global-solidarity.avif",
			href: "/work/partnerships", // Mapped to Partnerships
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
				Our Path To Change
			</motion.h1>
			<motion.main
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
				variants={containerVariants}
			>
				{pathToChange.map((item, index) => (
					<motion.div key={`${index}-${item.step}`} variants={itemVariants}>
						<PathToChangeCard
							title={item.step}
							description={item.action}
							link={item.href} // Passing the mapped href here
							image={item.image}
						/>
					</motion.div>
				))}
			</motion.main>
		</motion.section>
	);
};

export default OurPathToChange;
