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
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);

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
