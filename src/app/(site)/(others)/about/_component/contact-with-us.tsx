"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ContactWithUs = () => {
	const containerVariants = {
		hidden: {
			opacity: 0,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const, // Premium smooth easing
				staggerChildren: 0.2,
			},
		},
	};

	const textVariants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	const buttonAnimationVariants = {
		hidden: {
			opacity: 0,
			scale: 0.8,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	return (
		<motion.div
			className="bg-gradient-to-br from-primary to-info  from-10% to-90% text-background lg:p-8 p-4 rounded-2xl flex flex-col  justify-between"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={containerVariants}
		>
			<motion.div variants={textVariants}>
				<motion.span className="text-lg opacity-80 " variants={textVariants}>
					Join us in extending the healing hand of service.
				</motion.span>{" "}
				<motion.h1 className="h1 max-w-md" variants={textVariants}>
					Partner with Our Mission
				</motion.h1>
			</motion.div>
			<motion.div variants={buttonAnimationVariants}>
				<Link
					className={cn(
						"group mt-8 w-fit",
						buttonVariants({
							variant: "outline",
							size: "lg",
							className: "bg-transparent",
						}),
					)}
					href={"/contact"}
				>
					Contact Us{" "}
					<GoArrowRight className="group-hover:translate-x-1 transition-transform" />
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default ContactWithUs;
