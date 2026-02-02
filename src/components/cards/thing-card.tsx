"use client";

import { motion } from "framer-motion";
import type { LucideProps } from "lucide-react";
import Image from "next/image";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { cn } from "@/lib/utils";

type ThingItem = {
	title: string;
	total: string;
	description: string;
	image:
		| string
		| ForwardRefExoticComponent<
				Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
		  >;
	className?: string;
};

type ThingCardProps = {
	item: ThingItem;
	index?: number;
};

const cardVariants = {
	hidden: {
		opacity: 0,
		y: 50,
		scale: 0.9,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.6 },
	},
};

export const ThingCard = ({ item, index = 0 }: ThingCardProps) => {
	return (
		<motion.div
			variants={cardVariants}
			whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
			className={cn(
				"group min-h-44 lg:min-h-52 p-4 rounded-md flex flex-col justify-between bg-primary",
				item.className,
			)}
		>
			<div>
				<p className="opacity-80">{item.title}</p>
				<p className="text-sm">{item.description}</p>
			</div>

			<div className="flex items-end justify-between">
				<motion.span
					className="h1"
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
				>
					{item.total}
				</motion.span>

				{typeof item.image === "string" ? (
					<Image
						src={item.image}
						alt={item.title}
						width={32}
						height={32}
						loading="lazy"
						className="invert group-hover:animate-bounce"
					/>
				) : (
					<item.image size={32} className=" group-hover:animate-bounce " />
				)}
			</div>
		</motion.div>
	);
};
