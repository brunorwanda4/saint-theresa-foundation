"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import MyImage from "@/components/common/images/MyImage";
import { stories } from "@/lib/const/stories-const";

export default function StoriesPage() {
	const [index, setIndex] = useState(0);

	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const featuredStoryRef = useRef(null);
	const storyCardsRef = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef(null);

	const addToCardsRef = (el: HTMLDivElement | null, i: number) => {
		storyCardsRef.current[i] = el;
	};

	useEffect(() => {
		const interval = setInterval(
			() => setIndex((i) => (i + 1) % stories.length),
			6000,
		);
		return () => clearInterval(interval);
	}, []);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			// Header animation
			const tl = gsap.timeline();
			tl.from(titleRef.current, {
				opacity: 0,
				y: -20,
				duration: 0.8,
				ease: "power2.out",
			}).from(
				descriptionRef.current,
				{
					opacity: 0,
					y: -20,
					duration: 0.6,
					ease: "power2.out",
				},
				"-=0.4",
			);

			// Story cards animation on scroll
			gsap.from(storyCardsRef.current, {
				scrollTrigger: {
					trigger: ".grid",
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play none none reverse",
				},
				y: 60,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2,
				ease: "power2.out",
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	// Enhanced featured story transition
	useEffect(() => {
		if (featuredStoryRef.current) {
			const tl = gsap.timeline();

			tl.to(featuredStoryRef.current, {
				opacity: 0,
				y: 30,
				scale: 0.95,
				duration: 0.4,
				ease: "power2.in",
			}).to(featuredStoryRef.current, {
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.6,
				ease: "back.out(1.4)",
			});
		}
	}, [index]);

	// Hover animations (same as above)
	const handleCardHover = (i: number) => {
		const card = storyCardsRef.current[i];
		if (card) {
			gsap.to(card, {
				scale: 1.05,
				y: -5,
				duration: 0.3,
				ease: "power2.out",
			});
		}
	};

	const handleCardHoverOut = (i: number) => {
		const card = storyCardsRef.current[i];
		if (card) {
			gsap.to(card, {
				scale: 1,
				y: 0,
				duration: 0.3,
				ease: "power2.out",
			});
		}
	};

	return (
		<section ref={containerRef} className="mt-8 min-h-screen">
			<div className="global-px mb-8 max-w-4xl">
				<h1 ref={titleRef} className="text-foreground mb-3 text-4xl font-bold">
					Stories of Hope
				</h1>
				<p ref={descriptionRef} className="">
					Real voices, real change — powered by compassion and community.
				</p>
			</div>

			<div className="global-px bg-foreground py-8">
				<div
					ref={featuredStoryRef}
					className="border-foreground hover:border-primary bg-primary-foreground mx-auto mb-20 w-fit cursor-pointer border p-8 shadow-lg"
					onMouseEnter={() => {
						gsap.to(featuredStoryRef.current, {
							scale: 1.02,
							y: -3,
							duration: 0.3,
							ease: "power2.out",
						});
					}}
					onMouseLeave={() => {
						gsap.to(featuredStoryRef.current, {
							scale: 1,
							y: 0,
							duration: 0.3,
							ease: "power2.out",
						});
					}}
				>
					<div className="flex flex-col items-center gap-4 md:flex-row">
						<MyImage
							src={stories[index].image}
							alt={stories[index].name}
							className="size-52 object-cover"
						/>
						<div>
							<h2 className="text-primary text-xl font-semibold">
								{stories[index].name}
							</h2>
							<p className="mt-2 max-w-md italic">"{stories[index].text}"</p>
						</div>
					</div>
				</div>

				<div className="grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
					{stories.map((story, i) => (
						<div
							key={story.name}
							ref={(el) => addToCardsRef(el, i)}
							onMouseEnter={() => handleCardHover(i)}
							onMouseLeave={() => handleCardHoverOut(i)}
							className="relative h-80 w-full cursor-pointer overflow-hidden"
						>
							<MyImage
								src={story.image}
								original
								loading="lazy"
								className="h-full w-full object-cover"
							/>
							<div className="absolute bottom-0 h-fit w-full bg-blue-950/70 px-4 py-2">
								<h4 className="text-primary-foreground font-medium">
									{story.name}
								</h4>
								<p className="text-primary-foreground mt-2 text-sm">
									{story.text}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
