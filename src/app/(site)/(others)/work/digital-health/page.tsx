"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import BeTheLightOfHope from "@/app/(site)/_components/home/be-the-light-of-hope";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import DigitalHealthHero from "./_components/digital-health-hero";

const DigitalHealthPage = () => {
	const healthcareSolutions = [
		{
			title: "E-Consultation Platforms",
			description:
				"Launching software to allow patients in remote areas to consult with medical professionals remotely.",
			focusArea: "Technology",
			className: " bg-foreground",
		},
		{
			title: "Telehealth Services",
			description:
				"Providing a way for children and families in rural villages to access clinical advice without traveling long distances.",
			focusArea: "Clinical",
			className: " bg-primary",
		},
		{
			title: "Digital Prescription Platforms",
			description:
				"Streamlining the process of issuing and fulfilling prescriptions to ensure patients receive essential medication efficiently.",
			focusArea: "Technology",
			className: " bg-secondary text-foreground",
		},
		{
			title: "Efficiency and Transparency",
			description:
				"Using digital tools to track progress, manage data, and maintain transparency within the foundation’s operations.",
			focusArea: "Operations",
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
		<main className="mx-auto max-w-7xl space-y-8  py-16 px-8">
			<DigitalHealthHero />
			<Separator />
			<section className="space-y-4">
				<h2 className="h2">Core Digital Health Solutions</h2>
				<p className="p max-w-lg">
					The foundation is implementing specific tools to bridge the gap
					between hospital facilities and remote communities:
				</p>
			</section>

			<motion.div
				className="grid-cols-1 lg:grid-cols-2 grid gap-4"
				variants={containerVariants}
			>
				{healthcareSolutions.map((program, index) => (
					<motion.div
						key={`${program.title}-${index}`}
						className={cn(
							"rounded-md px-4 lg:px-6 py-4 text-background group ",
							program.className,
						)}
						variants={itemVariants}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<p className="text-lg">{program.description}</p>
						<div className="mt-4 flex flex-row items-center justify-between">
							<h2 className="font-light">{program.title}</h2>
							<Plus size={28} className="group-hover:rotate-45 duration-150" />
						</div>
					</motion.div>
				))}
			</motion.div>
			<div className=" mt-16">
				<BeTheLightOfHope />
			</div>
		</main>
	);
};

export default DigitalHealthPage;
