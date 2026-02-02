"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface Props {
	link: string;
	children: React.ReactNode;
	className?: string;
}

// Wrap the Next.js Link with Framer Motion
const MotionLink = motion(Link);

const SiteLink = forwardRef<HTMLAnchorElement, Props>(({ children, link, className }, ref) => {
	return (
		<MotionLink
			ref={ref}
			href={link}
			initial={{ backgroundPosition: "0% 50%" }}
			whileHover={{ backgroundPosition: "100% 50%" }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			className={cn(
				"relative inline-block overflow-hidden rounded-sm px-8 py-3 text-primary-foreground font-medium border border-primary",
				// We create a wide gradient: [New Colors] [Old Colors]
				// 200% width allows the "slide" effect
				"bg-gradient-to-r from-primary via-blue-950 to-secondary",
				"bg-[length:200%_100%]",
				className,
			)}
		>
			{children}
		</MotionLink>
	);
});

export default SiteLink;
