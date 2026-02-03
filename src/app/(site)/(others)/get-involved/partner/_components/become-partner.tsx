"use client";
import { motion } from "framer-motion";
import SiteLink from "@/components/common/site/site-link";

const BecomePartner = () => {
	return (
		<motion.div
			className="relative w-full max-w-6xl mx-auto overflow-hidden bg-[#0a1d2e] rounded-xl p-8"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8 }}
		>
			{/* Background Decorative Slants */}
			<div className="absolute top-0 right-0 w-full h-full pointer-events-none">
				<div className="absolute top-0 right-[20%] w-16 h-[200%] bg-[#f2b33d] transform rotate-[40deg] -translate-y-1/4 opacity-90"></div>
				<div className="absolute top-0 right-[5%] w-16 h-[200%] bg-[#1a73e8] transform rotate-[30deg] -translate-y-1/4 opacity-90"></div>
			</div>

			{/* Title */}
			<motion.h2
				className="relative z-10 h2 text-background mb-6"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				Let's Build a Healthier Tomorrow Together
			</motion.h2>

			{/* Stats Container */}
			<p className=" text-background max-w-lg  text-lg">
				Partner with Sainte Thérèse Foundation and help us extend care,
				education, and faith-based healing across Rwanda and beyond.
			</p>

			<SiteLink className="mt-10" link="/contact">
				Become a Partner
			</SiteLink>
		</motion.div>
	);
};

export default BecomePartner;
