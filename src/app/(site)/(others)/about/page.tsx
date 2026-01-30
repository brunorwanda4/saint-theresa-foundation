"use client";
import gsap from "gsap";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import MyImage from "@/components/common/images/MyImage";
import { AboutLinks } from "@/lib/const/about-links";

export default function AboutPage() {
	const containerRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Simple fade in animations
			if (headerRef.current) {
				gsap.fromTo(
					headerRef.current,
					{ opacity: 0, y: -20 },
					{ opacity: 1, y: 0, duration: 0.6 },
				);
			}

			const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
			if (validCards.length > 0) {
				gsap.fromTo(
					validCards,
					{ opacity: 0, y: 30 },
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						stagger: 0.2,
					},
				);

				// Enhanced hover animations only
				validCards.forEach((card) => {
					card.addEventListener("mouseenter", () => {
						gsap.to(card, {
							scale: 1.05,
							duration: 0.3,
							ease: "power2.out",
						});
					});

					card.addEventListener("mouseleave", () => {
						gsap.to(card, {
							scale: 1,
							duration: 0.3,
							ease: "power2.out",
						});
					});
				});
			}
		}, containerRef);

		return () => ctx.revert();
	}, []);

	const addToCardsRefs = (el: HTMLDivElement | null, index: number) => {
		cardsRef.current[index] = el;
	};

	return (
		<main ref={containerRef} className="min-h-screen py-8">
			<div ref={headerRef} className="global-px mb-8 max-w-5xl">
				<h1 className="text-foreground mb-2 text-4xl font-bold">Who We Are</h1>
				<p className="max-w-2xl leading-relaxed">
					The Sainte Thérèse Foundation is a faith-inspired health organization
					dedicated to transforming lives through compassionate care, education,
					and empowerment. From humble beginnings, we've grown into a movement
					of service across Rwanda.
				</p>
			</div>

			<section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
				{AboutLinks.map((item, i) => (
					<div
						key={i}
						ref={(el) => addToCardsRefs(el, i)}
						className="relative h-96 w-full duration-200"
					>
						<MyImage
							original
							loading="lazy"
							className="h-full w-full"
							src={item.img}
							alt={item.title}
						/>
						<div className="text-primary-foreground absolute bottom-0 h-fit w-full bg-blue-950/70 px-4 py-2">
							<h2 className="text-xl font-semibold">
								<Link href={item.href}>{item.title}</Link>
							</h2>
							<p className="">
								<Link href={item.href}>{item.desc}</Link>
							</p>
							<Link href={item.href} className="font-medium hover:underline">
								Read more →
							</Link>
						</div>
					</div>
				))}
			</section>
		</main>
	);
}
