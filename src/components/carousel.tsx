"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselProps {
	projects: {
		image: string;
		title: string;
		description: string;
	}[];
}

export default function Carousel({ projects }: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [prevIndex, setPrevIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setPrevIndex(currentIndex);
			setCurrentIndex((prev) => (prev + 1) % projects.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [currentIndex, projects.length]);

	return (
		<div className="w-full">
			<div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-black">
				<div className="absolute inset-0 z-0">
					<Image
						key={`bg-${prevIndex}`}
						src={projects[prevIndex].image}
						alt="background"
						fill
						className="object-cover"
						priority
					/>
				</div>

				<AnimatePresence>
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 0.7,
							ease: "easeInOut",
						}}
						className="absolute inset-0 z-10 w-full h-full"
					>
						<Image
							src={projects[currentIndex].image}
							alt={projects[currentIndex].title}
							fill
							quality={95}
							className="object-cover"
							priority
						/>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
