"use client";

import { motion } from "framer-motion";
import {
	Building2,
	Globe,
	GraduationCap,
	Handshake,
	HeartPulse,
	Hospital,
	Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const OurPartners = () => {
	const partners = [
		{
			name: "Ministry of Health & RBC",
			desc: "Aligning with national priorities for early detection and prevention through former leadership ties with the Rwanda Biomedical Center (RBC) and the National Commission for the Fight against AIDS.",
			icon: HeartPulse,
		},
		{
			name: "Faith-Based Networks",
			desc: "Partnering with local institutions like the Rwamagana Catholic Church for community mobilization and health screening outreach.",
			icon: Users,
		},
		{
			name: "International NGOs & Peacebuilding",
			desc: "Leveraging global strategic expertise from organizations like Interpeace to integrate human-centered action and resource mobilization.",
			icon: Globe,
		},
		{
			name: "Academic Institutions",
			desc: "Engaging with Kigali Independent University and the University of Rwanda to share expertise in social law, public health, and community governance.",
			icon: GraduationCap,
		},
		{
			name: "Private Sector Federation (PSF)",
			desc: "Collaborating with the PSF and the Chamber of Women to promote business-oriented social impact and healthcare access for the underserved.",
			icon: Handshake,
		},
		{
			name: "Global Pharmaceutical Partners",
			desc: "Working with suppliers in China, India, and the Netherlands via TRUST Pharmalab to secure medical equipment and essential medicines for East Africa.",
			icon: Building2,
		},
		{
			name: "Clinical & Referral Partners",
			desc: "Operating in direct partnership with Sainte Thérèse Polyclinic and coordinating patient referrals with Rwamagana Hospital and local health centers.",
			icon: Hospital,
		},
	];

	// Animation variants for staggered list animation
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1, // 0.1s delay between each milestone
				duration: 0.6,
			},
		},
	};

	const titleVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	// Each milestone "pops" in sequence
	const milestoneVariants = {
		hidden: {
			opacity: 0,
			scale: 0.8,
			y: 30,
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.6,
				type: "spring" as const,
				stiffness: 100,
				damping: 15,
			},
		},
	};

	return (
		<motion.section
			className="space-y-8 py-12"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={containerVariants}
		>
			<motion.h1 className="h1" variants={titleVariants}>
				Strategic Partnership Insights
			</motion.h1>
			<motion.main
				className="grid grid-cols-1 md:grid-cols-2 gap-6"
				variants={containerVariants}
			>
				{partners.map((milestone, index) => (
					<motion.div
						key={`${milestone.name}-${index}`}
						initial="initial"
						whileHover="hover"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={milestoneVariants}
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
								ease: [0.22, 1, 0.36, 1] as const,
							}}
							className="absolute inset-0 bg-primary -z-10"
						/>

						<div className="flex flex-col gap-4 z-10">
							<h2 className="h2 transition-colors duration-300 group-hover:text-primary-foreground">
								{milestone.name}
							</h2>
							<p className="p transition-colors duration-300 group-hover:text-primary-foreground/90">
								{milestone.desc}
							</p>
						</div>

						<div className="z-10 bg-primary/10 rounded-full p-4 transition-all duration-300 group-hover:bg-foreground group-hover:scale-110">
							<milestone.icon
								size={24}
								className="object-contain transition-all duration-300 group-hover:invert"
							/>
						</div>
					</motion.div>
				))}
			</motion.main>
		</motion.section>
	);
};

export default OurPartners;
