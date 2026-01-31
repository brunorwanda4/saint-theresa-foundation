"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const leaders = [
	{
		id: 1,
		name: "AHAYO Marie Anita",
		role: "Founder & Managing Director | Public Health Expert",
		bio: "A Master of Science in Public Health with 20 years of experience in the medical field, she leads a polyclinic serving 50,000 patients annually and serves as a leader in the Private Sector Federation [5-7].",
		imageUrl: "/images/our/ahayo-1.jpeg",
	},
	{
		id: 2,
		name: "Jean Paul Mugiraneza",
		role: "Co-Founder | Strategic Development & Governance Expert",
		bio: "With 20 years in public service and global leadership, he is a Senior Director at Interpeace in Geneva, specializing in peacebuilding and citizen-centered governance [8-10].",
		imageUrl: "/images/founder-1.jpg",
	},
];

const LeadershipTeam = () => {
	const [hoveredImage, setHoveredImage] = useState<string | null>(null);

	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,

				staggerChildren: 0.2,
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
			className="font-sans"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
				<div className="flex flex-col space-y-12">
					<motion.h2 className="h1" variants={itemVariants}>
						Leadership team
					</motion.h2>

					<motion.div 
						className="relative w-full max-w-md h-90 flex items-center justify-center"
						variants={itemVariants}
					>
						<div
							className={`relative overflow-hidden rounded-3xl transform -rotate-3 transition-all duration-500 ease-in-out shadow-2xl aspect-[4/3] w-full
                ${hoveredImage ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}  `}
						>
							{hoveredImage && (
								<div className="relative w-full h-full">
									<Image
										fill
										loading="lazy"
										src={hoveredImage}
										alt="Leader preview"
										className="w-full h-full object-cover"
									/>
								</div>
							)}
						</div>
					</motion.div>
				</div>

				<motion.div className="flex flex-col space-y-2" variants={itemVariants}>
					<p className="h5">
						Our foundation is led by seasoned humanitarian professionals who
						blend global strategic vision with decades of first-hand experience
						in healthcare and community development. We are supported by a
						dedicated team committed to serving "the least of these" with
						dignity and professional excellence.
					</p>

					<motion.div 
						className="space-y-2"
						variants={containerVariants}
					>
						{leaders.map((leader) => (
							<motion.div
								key={leader.id}
								onMouseEnter={() => setHoveredImage(leader.imageUrl)}
								onMouseLeave={() => setHoveredImage(null)}
								className="group border-b border-gray-200 py-4 cursor-pointer"
								variants={itemVariants}
								whileHover={{ x: 5 }}
								transition={{ duration: 0.2 }}
							>
								<h3 className="h2 group-hover:text-primary transition-colors duration-300">
									{leader.name}
								</h3>
								<p className="p text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
									{leader.role}
								</p>
							</motion.div>
						))}
					</motion.div>

					<motion.div variants={itemVariants}>
						<Link
							className={cn(
								buttonVariants({ size: "lg", variant: "outline" }),
								"group w-fit mt-4",
							)}
							href="/about/team"
						>
							Learn More{" "}
							<IoMdArrowForward className="group-hover:translate-x-1 transition-transform" />
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default LeadershipTeam;
