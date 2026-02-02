"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

interface ImpactItem {
	title: string;
	desc: string;
	href: string;
}

export default function ImpactPage() {
	const items: ImpactItem[] = [
		{
			title: "Stories",
			desc: "Personal journeys of healing, resilience, and transformation from the field.",
			href: "/impact/stories",
		},
		{
			title: "Photo & Video Gallery",
			desc: "See our impact in action � visual moments of service and compassion.",
			href: "/impact/gallery",
		},
	];

	// Refs for animation elements
	const containerRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const cardRefs = useRef<HTMLDivElement[]>([]);

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

			// Title animation with slight delay
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

			// Cards animation with staggered slide-in from left
			cardRefs.current.forEach((card, index) => {
				if (!card) return;

				gsap.fromTo(
					card,
					{
						opacity: 0,
						x: -80,
						scale: 0.95,
					},
					{
						opacity: 1,
						x: 0,
						scale: 1,
						duration: 0.8,
						delay: index * 0.3,
						ease: "power2.out",
						scrollTrigger: {
							trigger: card,
							start: "top 80%",
							toggleActions: "play none none reverse",
						},
					},
				);

				// Hover animation
				card.addEventListener("mouseenter", () => {
					gsap.to(card, {
						scale: 1.02,
						x: 5,
						duration: 0.3,
						ease: "power2.out",
					});
				});

				card.addEventListener("mouseleave", () => {
					gsap.to(card, {
						scale: 1,
						x: 0,
						duration: 0.3,
						ease: "power2.out",
					});
				});
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	// Function to add cards to refs array
	const addCardToRefs = (el: HTMLDivElement | null) => {
		if (el && !cardRefs.current.includes(el)) {
			cardRefs.current.push(el);
		}
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

			<div
				ref={headerRef}
				className="global-px mx-auto mb-8 max-w-5xl items-center text-center"
			>
				<h1 ref={titleRef} className="text-foreground mb-2 text-4xl font-bold">
					Impact & Stories
				</h1>
				<div className="flex items-center justify-center">
					<p ref={descriptionRef} className="max-w-xl leading-relaxed">
						Behind every number is a human story. Our impact is measured not
						only by data but by the hope restored in the lives we touch every
						day.
					</p>
				</div>
			</div>

			<div className="global-px mx-auto grid max-w-4xl gap-6">
				{items.map((item, i) => (
					<div
						key={`${item.title}-${i}`}
						ref={addCardToRefs}
						className="site-card cursor-pointer"
					>
						<h2 className="mb-2 text-xl font-semibold">
							<Link href={item.href}>{item.title}</Link>
						</h2>
						<p className="mb-3">{item.desc}</p>
						<Link href={item.href} className="font-medium hover:underline">
							View &#8594;
						</Link>
					</div>
				))}
			</div>
		</main>
	);
}
