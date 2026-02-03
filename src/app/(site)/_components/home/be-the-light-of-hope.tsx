"use client";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BeTheLightOfHope = () => {
	const engagementLinks = [
		{
			title: "Partner With Us",
			icon: "/icons/collaborate.png",
			url: "/get-involved/partner",
		},
		{
			title: "Explore Our Future",
			icon: "/icons/development.png",
			url: "/programs/timeline",
		},
		{
			title: "View our images",
			icon: "/icons/image-gallery.png",
			url: "/impact/gallery",
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
		<motion.div
			className="flex flex-col lg:flex-row gap-4"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			<motion.div className="h-1/2" variants={itemVariants}>
				<h1 className="h1">
					Advancing Human Dignity Through Compassionate Care
				</h1>
			</motion.div>

			<motion.main
				className="w-full divide-y divide-gray-200"
				variants={containerVariants}
			>
				{engagementLinks.map((link) => (
					<motion.div key={link.title} variants={itemVariants}>
						<Link
							href={link.url}
							className="group flex items-center justify-between py-6 transition-colors hover:bg-muted-foreground/20 rounded-xs px-4 pr-8"
						>
							<div className="flex items-center gap-6">
								<div className="size-14 flex shrink-0 items-center justify-center bg-blue-50 rounded-full group-hover:border-foreground group-hover:border du">
									<Image
										src={link.icon}
										alt={link.title}
										width={28}
										height={28}
										className="object-contain"
									/>
								</div>
								<h2 className="text-2xl font-medium text-gray-900">
									{link.title}
								</h2>
							</div>

							<MoveRight className="w-6 h-6 text-gray-400 transition-transform group-hover:translate-x-2 group-hover:text-foreground" />
						</Link>
					</motion.div>
				))}
			</motion.main>
		</motion.div>
	);
};

export default BeTheLightOfHope;
