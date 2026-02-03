"use client";
import { motion } from "framer-motion";
import PathToChangeCard from "@/components/cards/path-to-change-card";
import { works } from "@/lib/data/works";

export default function WorkPage() {
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

	return (
		<main className="min-h-screen py-8 pt-24 lg:gap-y-16 flex flex-col">
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-8 global-px mb-8 max-w-5xl">
				<motion.h1 className="h1 lg:w-1/2">Our Work</motion.h1>
				<p className="lg:w-1/2 max-w-2xl leading-relaxed">
					The Sainte Thérèse Foundation is a faith-inspired health organization
					dedicated to transforming lives through compassionate care, education,
					and empowerment. From humble beginnings, we've grown into a movement
					of service across Rwanda.
				</p>
			</div>

			<motion.main
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 global-px"
				variants={containerVariants}
			>
				{works.map((item, index) => (
					<motion.div key={`${index}-${item.title}`} variants={itemVariants}>
						<PathToChangeCard
							title={item.title}
							description={item.desc}
							link={item.href} // Passing the mapped href here
							image={item.img}
						/>
					</motion.div>
				))}
			</motion.main>
		</main>
	);
}
