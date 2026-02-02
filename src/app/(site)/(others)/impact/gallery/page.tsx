"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { galleryImages } from "@/lib/data/gallery";
import ContactWithUs from "../../about/_component/contact-with-us";
import { OpenImages } from "./_components/open-images";

export default function GalleryPage() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
	const videoSectionRef = useRef<HTMLDivElement>(null);
	const videoButtonRef = useRef<HTMLButtonElement>(null);

	const handlePlay = () => {
		const v = videoRef.current;
		if (!v) return;
		v.play();
		v.controls = true;
		setIsPlaying(true);
		// Animate the play button away
		if (videoButtonRef.current) {
			gsap.to(videoButtonRef.current, {
				opacity: 0,
				scale: 0.8,
				duration: 0.3,
				ease: "power2.out",
				onComplete: () => {
					if (videoButtonRef.current) {
						videoButtonRef.current.style.display = "none";
					}
				},
			});
		}
	};

	const handleImageClick = (index: number) => {
		setSelectedImageIndex(index);
		setIsImageDialogOpen(true);
	};

	return (
		<main className="min-h-screen py-8 pt-24 lg:gap-y-16 gap-8 flex flex-col global-px">
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-8 max-w-5xl">
				<motion.h1 className="h1 lg:w-1/2"> Photo & Video Gallery</motion.h1>
				<p className="lg:w-1/2 max-w-2xl leading-relaxed">
					A glimpse into our work and the lives touched by the Sainte Thérèse
					Foundation.
				</p>
			</div>
			<div className="grid md:gap-6 gap-2 grid-cols-2 md:grid-cols-3">
				{galleryImages
					.map((image, originalIndex) => ({ image, originalIndex }))
					.filter(
						({ originalIndex }) =>
							originalIndex < 6 || originalIndex >= galleryImages.length - 6,
					)
					.map(({ image, originalIndex }) => (
						<div
							key={`${image}-${originalIndex}`}
							onClick={() => handleImageClick(originalIndex)}
							className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
						>
							<Image
								src={image}
								alt={image}
								width={500}
								height={400}
								className="h-60 w-full transform object-cover transition"
							/>
						</div>
					))}
			</div>
			<div ref={videoSectionRef} className="mt-8">
				<div className="relative">
					<video
						ref={videoRef}
						className="w-full rounded-lg shadow-xl"
						poster="/images/image-11.jpeg"
						preload="metadata"
					>
						<source src="/videos/video-1.mp4" type="video/mp4" />
					</video>
					{!isPlaying && (
						<button
							ref={videoButtonRef}
							type="button"
							onClick={handlePlay}
							aria-label="Play mission video"
							className="absolute inset-0 grid place-items-center rounded-lg bg-black/30 transition-colors"
						>
							<span className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 font-medium text-black shadow-lg">
								<Play className="h-5 w-5" />
								Play video
							</span>
						</button>
					)}
				</div>
			</div>
			<ContactWithUs />
			{/* Image Dialog */}
			<OpenImages
				images={galleryImages}
				initialIndex={selectedImageIndex}
				isOpen={isImageDialogOpen}
				onOpenChange={setIsImageDialogOpen}
				component={<div style={{ display: "none" }} />}
			/>
		</main>
	);
}
