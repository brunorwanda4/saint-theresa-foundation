"use client";
import gsap from "gsap";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { gallery } from "@/lib/data/gallery";
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

	const galleryImages = gallery.map((item) => item.src);

	return (
		<section className="global-px min-h-screen py-20">
			<div className="mb-12 space-y-2">
				<h1 className="text-foreground text-4xl font-bold">
					Photo & Video Gallery
				</h1>
				<p>
					A glimpse into our work and the lives touched by the Sainte Thérèse
					Foundation.
				</p>
			</div>
			<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
				{gallery.map((item, i) => (
					<div
						key={item.src}
						onClick={() => handleImageClick(i)}
						className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
					>
						<Image
							src={item.src}
							alt={item.caption}
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
			{/* Image Dialog */}
			<OpenImages
				images={galleryImages}
				initialIndex={selectedImageIndex}
				isOpen={isImageDialogOpen}
				onOpenChange={setIsImageDialogOpen}
				component={<div style={{ display: "none" }} />}
			/>
		</section>
	);
}
