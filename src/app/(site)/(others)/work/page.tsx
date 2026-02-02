"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";
import PathToChangeCard from "@/components/cards/path-to-change-card";
import MyImage from "@/components/common/images/MyImage";
import { works } from "@/lib/data/works";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

export default function WorkPage() {
	const containerRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const workCardsRef = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const ctx = gsap.context(() => {
			// Header container animation
			gsap.fromTo(
				headerRef.current,
				{
					opacity: 0,
					y: -30,
				},
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: headerRef.current,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
				},
			);

			// Title animation
			gsap.fromTo(
				titleRef.current,
				{
					opacity: 0,
					y: 20,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					delay: 0.2,
					ease: "power2.out",
					scrollTrigger: {
						trigger: titleRef.current,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				},
			);

			// Description animation
			gsap.fromTo(
				descriptionRef.current,
				{
					opacity: 0,
					y: 20,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					delay: 0.4,
					ease: "power2.out",
					scrollTrigger: {
						trigger: descriptionRef.current,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				},
			);

			// Work cards animation with masonry-like stagger
			workCardsRef.current.forEach((card, index) => {
				if (!card) return;

				// Calculate row and column for different entrance effects
				const row = Math.floor(index / 3);
				const col = index % 3;

				gsap.fromTo(
					card,
					{
						opacity: 0,
						y: 80,
						scale: 0.85,
						rotationY: col === 0 ? -15 : col === 2 ? 15 : 0,
						x: col === 0 ? -40 : col === 2 ? 40 : 0,
					},
					{
						opacity: 1,
						y: 0,
						scale: 1,
						rotationY: 0,
						x: 0,
						duration: 0.8,
						delay: row * 0.1 + col * 0.15,
						ease: "back.out(1.3)",
						scrollTrigger: {
							trigger: card,
							start: "top 75%",
							toggleActions: "play none none reverse",
						},
					},
				);

				// Hover animation
				card.addEventListener("mouseenter", () => {
					gsap.to(card, {
						scale: 1.05,
						y: -8,
						rotationY: 0,
						duration: 0.3,
						ease: "power2.out",
					});
				});

				card.addEventListener("mouseleave", () => {
					gsap.to(card, {
						scale: 1,
						y: 0,
						duration: 0.3,
						ease: "power2.out",
					});
				});
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	// Function to add work cards to refs array
	const addWorkCardToRefs = (el: HTMLDivElement | null) => {
		if (el && !workCardsRef.current.includes(el)) {
			workCardsRef.current.push(el);
		}
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
		<main
			className="min-h-screen py-8 lg:gap-y-16 flex flex-col"
			ref={containerRef}
		>
			<div
				ref={headerRef}
				className="flex flex-col lg:flex-row gap-4 lg:gap-8 global-px mb-8 max-w-5xl"
			>
				<motion.h1 className="h1 lg:w-1/2">Our Work</motion.h1>
				<p ref={descriptionRef} className="lg:w-1/2 max-w-2xl leading-relaxed">
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
