"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Handshake, Heart, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

interface InvolvementItem {
	title: string;
	icon: React.ComponentType<any>;
	desc: string;
	href: string;
}

export default function GetInvolvedPage() {
	const items: InvolvementItem[] = [
		{
			title: "Donate",
			icon: Heart,
			desc: "Your contribution helps provide medicine, train workers, and bring care to those who need it most.",
			href: "/get-involved/donate",
		},
		{
			title: "Volunteer",
			icon: Users,
			desc: "Join hands with our team on the ground – serve, learn, and transform lives together.",
			href: "/get-involved/volunteer",
		},
		{
			title: "Partnerships",
			icon: Handshake,
			desc: "Partner with us to expand healthcare access and community development.",
			href: "/get-involved/partner",
		},
	];

	const containerRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const cardRefs = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const ctx = gsap.context(() => {
			// Header animation
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

			// Cards animation with stagger effect
			gsap.fromTo(
				cardRefs.current,
				{
					opacity: 0,
					y: 60,
					scale: 0.8,
					rotationY: 15,
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					rotationY: 0,
					duration: 0.8,
					stagger: 0.2,
					ease: "back.out(1.4)",
					scrollTrigger: {
						trigger: cardRefs.current[0],
						start: "top 75%",
						toggleActions: "play none none reverse",
					},
				},
			);

			// Add hover animations using GSAP
			cardRefs.current.forEach((card) => {
				if (!card) return;

				// Hover animation
				card.addEventListener("mouseenter", () => {
					gsap.to(card, {
						scale: 1.03,
						y: -5,
						duration: 0.3,
						ease: "power2.out",
					});
				});

				// Mouse leave animation
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

	// Function to add cards to refs array
	const addCardToRefs = (el: HTMLDivElement | null) => {
		if (el && !cardRefs.current.includes(el)) {
			cardRefs.current.push(el);
		}
	};

	return (
		<main className="min-h-screen py-8" ref={containerRef}>
			<div
				ref={headerRef}
				className="global-px mx-auto mb-8 max-w-5xl items-center text-center"
			>
				<h1 className="text-foreground mb-2 text-4xl font-bold">
					Get Involved
				</h1>
				<p className="">
					The Sainte Thérèse Foundation thrives through collective effort.
					Whether you give, serve, or collaborate – your involvement creates
					real, lasting change in lives across Rwanda.
				</p>
			</div>

			<div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
				{items.map((item, i) => {
					const IconComponent = item.icon;
					return (
						<div
							key={i}
							ref={addCardToRefs}
							className="site-card cursor-pointer items-center"
						>
							<div className="text-primary mb-4 flex justify-center">
								<IconComponent className="text-primary" size={28} />
							</div>
							<h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
							<p className="mb-3">{item.desc}</p>
							<Link href={item.href} className="font-medium hover:underline">
								Learn more &#8594;
							</Link>
						</div>
					);
				})}
			</div>
		</main>
	);
}
