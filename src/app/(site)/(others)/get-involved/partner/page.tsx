"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";
import MyImage from "@/components/common/images/MyImage";
import {
	opportunities,
	partners,
	stats,
	testimonials,
} from "@/lib/data/partner";
import BecomePartner from "./_components/become-partner";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

export default function PartnerPage() {
	const headerRef = useRef<HTMLDivElement>(null);
	const heroRef = useRef<HTMLDivElement>(null);
	const opportunitiesTitleRef = useRef<HTMLHeadingElement>(null);
	const opportunitiesRef = useRef<HTMLDivElement[]>([]);
	const statsRef = useRef<HTMLDivElement[]>([]);
	const partnersTitleRef = useRef<HTMLHeadingElement>(null);
	const partnersRef = useRef<HTMLDivElement[]>([]);
	const testimonialsTitleRef = useRef<HTMLHeadingElement>(null);
	const testimonialsRef = useRef<HTMLDivElement[]>([]);
	const ctaRef = useRef<HTMLDivElement>(null);

	// Add to ref arrays
	const addToOpportunitiesRef = (el: HTMLDivElement | null) => {
		if (el && !opportunitiesRef.current.includes(el)) {
			opportunitiesRef.current.push(el);
		}
	};

	const addToStatsRef = (el: HTMLDivElement | null) => {
		if (el && !statsRef.current.includes(el)) {
			statsRef.current.push(el);
		}
	};

	useEffect(() => {
		// Hero section animation
		if (heroRef.current) {
			const children = heroRef.current.children;
			gsap.fromTo(
				children,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					stagger: 0.2,
					scrollTrigger: {
						trigger: heroRef.current,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
				},
			);
		}

		// Opportunities title animation
		if (opportunitiesTitleRef.current) {
			gsap.fromTo(
				opportunitiesTitleRef.current,
				{ opacity: 0, y: 40 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					scrollTrigger: {
						trigger: opportunitiesTitleRef.current,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				},
			);
		}

		// Opportunities cards animation
		opportunitiesRef.current.forEach((card, index) => {
			gsap.fromTo(
				card,
				{
					opacity: 0,
					y: 60,
					scale: 0.9,
					rotationX: 10,
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					rotationX: 0,
					duration: 0.9,
					delay: index * 0.1,
					ease: "back.out(1.4)",
					scrollTrigger: {
						trigger: card,
						start: "top 90%",
						toggleActions: "play none none reverse",
					},
				},
			);
		});

		// Stats animation
		statsRef.current.forEach((stat, index) => {
			gsap.fromTo(
				stat,
				{
					opacity: 0,
					y: 50,
					scale: 0.8,
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.7,
					delay: index * 0.15,
					scrollTrigger: {
						trigger: stat,
						start: "top 90%",
						toggleActions: "play none none reverse",
					},
				},
			);
		});

		// Partners title animation
		if (partnersTitleRef.current) {
			gsap.fromTo(
				partnersTitleRef.current,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					scrollTrigger: {
						trigger: partnersTitleRef.current,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				},
			);
		}

		// Partners logo animation
		partnersRef.current.forEach((partner, index) => {
			gsap.fromTo(
				partner,
				{
					opacity: 0,
					scale: 0.7,
					rotationY: 20,
				},
				{
					opacity: 1,
					scale: 1,
					rotationY: 0,
					duration: 0.8,
					delay: index * 0.2,
					ease: "power2.out",
					scrollTrigger: {
						trigger: partner,
						start: "top 90%",
						toggleActions: "play none none reverse",
					},
				},
			);
		});

		// Testimonials title animation
		if (testimonialsTitleRef.current) {
			gsap.fromTo(
				testimonialsTitleRef.current,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					scrollTrigger: {
						trigger: testimonialsTitleRef.current,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				},
			);
		}

		// Testimonials animation
		testimonialsRef.current.forEach((testimonial, index) => {
			gsap.fromTo(
				testimonial,
				{
					opacity: 0,
					x: index % 2 === 0 ? -50 : 50,
					scale: 0.95,
				},
				{
					opacity: 1,
					x: 0,
					scale: 1,
					duration: 1,
					delay: index * 0.2,
					scrollTrigger: {
						trigger: testimonial,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				},
			);
		});

		// CTA section animation
		if (ctaRef.current) {
			gsap.fromTo(
				ctaRef.current,
				{
					opacity: 0,
					y: 60,
					scale: 0.95,
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 1.2,
					scrollTrigger: {
						trigger: ctaRef.current,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				},
			);
		}

		// Clean up ScrollTrigger instances
		return () => {
			if (typeof window !== "undefined") {
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			}
		};
	}, []);

	const maskRevealVariants = {
		hidden: {
			clipPath: "inset(0 100% 0 0)",
			opacity: 0,
		},
		visible: {
			clipPath: "inset(0 0% 0 0)",
			opacity: 1,
			transition: {
				duration: 1.2,
				ease: "easeInOut" as const,
			},
		},
	};

	return (
		<main className="min-h-screen py-8 space-y-8 px-8">
			{/* Hero Section */}
			<div className=" flex justify-between  items-end w-full mt-12">
				<div className=" lg:min-w-1/2 hidden lg:block" />
				<div ref={headerRef} className=" mb-8 flex flex-col w-full">
					<motion.h1
						className=" h1 max-w-2xl"
						variants={maskRevealVariants}
						initial="hidden"
						animate="visible"
					>
						Partner With Us
					</motion.h1>
					<motion.p
						className="max-w-2xl leading-relaxed p mt-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						Join hands with the <strong>Sainte Thérèse Foundation</strong> to
						build a future where every person – regardless of background – has
						access to compassionate healthcare and hope.
					</motion.p>
				</div>
			</div>

			<section className="global-px py-10">
				<h2 ref={opportunitiesTitleRef} className="mb-6 text-3xl font-bold">
					Partnership Opportunities
				</h2>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{opportunities.map((item, index) => (
						<div
							key={item.title}
							ref={addToOpportunitiesRef}
							className="bg-primary-foreground border-foreground hover:border-primary border p-6 shadow-md transition duration-300 hover:scale-105 hover:shadow-xl"
						>
							<h3 className="text-primary text-xl font-semibold">
								{item.title}
							</h3>
							<p className="mt-2 text-gray-600">{item.desc}</p>
						</div>
					))}
				</div>
			</section>

			<section className="bg-foreground text-primary-foreground py-14 rounded-2xl">
				<div className="mx-auto grid max-w-6xl gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
					{stats.map((stat) => (
						<div key={stat.label} ref={addToStatsRef}>
							<h3 className="text-4xl font-bold">{stat.number}</h3>
							<p className="mt-1 text-sm tracking-wide uppercase">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 py-16 space-y-4">
				<h2 ref={partnersTitleRef} className="h1">
					Our Current Partners
				</h2>
				<p className="max-w-xl p">
					We are honored to collaborate with esteemed organizations, community
					institutions, and educational partners committed to shared values of
					service, compassion, and impact.
				</p>

				<div className="flex flex-wrap justify-center gap-8 divide-x mt-12 divide-muted-foreground">
					{partners.map((p) => (
						<Link
							href={p.link}
							target="_blank"
							key={p.name}
							className="hover:border-primary bg-primary-foreground p-4"
						>
							<MyImage
								src={p.logo}
								alt={p.name}
								className="mx-auto size-52"
								classname=" object-contain"
							/>
							<p className="h3 sr-only text-center">{p.name}</p>
						</Link>
					))}
				</div>
			</section>
			<BecomePartner />
		</main>
	);
}
