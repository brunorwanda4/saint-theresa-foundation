"use client";
import gsap from "gsap";
import Image from "next/image";
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
		<main ref={containerRef} className="min-h-screen py-8 space-y-8">
			<div className=" flex justify-between px-8 items-end w-full mt-12">
				<div className=" min-w-1/2" />
				<div ref={headerRef} className=" mb-8 flex flex-col w-full">
					<h1 className=" h1 max-w-2xl">
						Bringing the Healing Hand of Service to the Hard-to-Reach
					</h1>
					<p className="max-w-2xl leading-relaxed p mt-12">
						The <strong>Sainte Thérèse Foundation</strong> is a faith-driven
						initiative founded by seasoned humanitarian professionals to bridge
						the gap between quality medical care and the world's most vulnerable
						populations. Rooted in the <strong>"little way"</strong> of St.
						Thérèse of Lisieux, we view healthcare as a sacred duty and a humble
						contribution to the <strong>healing ministry of Christ.</strong>
					</p>
				</div>
			</div>

			<div className=" px-8 ">
				<div className="max-w-[1280px] mx-auto w-full relative flex-shrink-0 h-screen">
					<Image
						fill
						quality={95}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
						src={"/images/our/we.jpg"}
						alt="Our Team"
						className="object-cover rounded-2xl"
						priority
					/>
				</div>
			</div>
			<div className="px-8 flex flex-col lg:flex-row lg:gap-16">
				<div className=" w-1/2">
					<h2 className="h1">
						Extending the Healing Hand of Service to the Hard-to-Reach
					</h2>
				</div>
				<div className=" w-1/2 flex flex-col gap-8">
					<p className="text-lg font-medium">
						Who We Are The Sainte Thérèse Foundation is a faith-driven,
						nonprofit initiative that serves as an extension of the Sainte
						Thérèse Polyclinic, which currently provides care to approximately
						40,000 to 50,000 patients annually.
					</p>
					<p className="text-lg font-medium opacity-80">
						Founded by seasoned humanitarian professionals, we blend global
						strategic vision with local, hands-on action to bring healthcare
						closer to vulnerable rural communities.
					</p>
				</div>
			</div>

			<div></div>

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
