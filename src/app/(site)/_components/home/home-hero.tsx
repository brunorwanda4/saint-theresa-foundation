"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Pill, Truck } from "lucide-react"; // Icons for the floating cards
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(useGSAP);

const HomeHero = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const bubblesRef = useRef<HTMLDivElement[]>([]);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			gsap.from(bubblesRef.current, {
				opacity: 0,
				y: 20,
				duration: 0.8,
				stagger: 0.2,
				delay: 0.5,
				ease: "power2.out",
			});

			gsap.to(".blob", {
				y: "+=20",
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
				duration: 3,
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={containerRef}
			className=" mx-auto min-h-[80vh] grid grid-cols-12 gap-8  relative overflow-hidden py-8"
		>
			{/* Left Content */}
			<div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
				<h1 className="text-5xl text-foreground leading-[1.1] tracking-tight">
					Extending Healing <br /> Hands to the Most Vulnerable
				</h1>
				<p className="text-lg text-slate-600 max-w-md leading-relaxed">
					Bringing healthcare closer to poor and rural communities through
					mobile clinics, digital health, and community pharmacies — guided by
					Christian compassion and dignity.
				</p>
				<div className="flex gap-4">
					<Button size="lg" className="rounded-md px-8 py-6  gap-2 group">
						Donate Now{" "}
						<IoMdArrowForward className="group-hover:translate-x-1 transition-transform" />
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="rounded-md px-8 py-6 text-base border-slate-300"
					>
						Join Our Mission
					</Button>
				</div>
			</div>

			<div className="col-span-12 lg:col-span-7 relative h-[500px] w-full">
				<div className=" relative w-72 h-43 z-20">
					<Image
						src="/images/digital-health-2.jpg"
						alt="Digital health"
						fill
						className="object-cover rounded-md"
					/>
				</div>

				{/* Main Doctor Image */}
				<div className="absolute bottom-10 left-[15%]  w-67 h-92 z-30">
					<Image
						src="/images/doctor.png"
						alt="Doctor"
						fill
						className="object-contain"
						priority
					/>
				</div>
				<div
					className="blob absolute size-60 md:size-40 rounded-full bg-primary opacity-60 to-transparent blur-2xl z-10"
					style={{ zIndex: 0 }}
				/>
				<div className="z-35 absolute bottom-10 left-[-20px] bg-white/90 backdrop-blur-md py-2 px-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 max-w-65">
					<p className="text-sm font-medium text-slate-800 leading-tight">
						2 Community Pharmacies in development
					</p>
					<div className=" size-18 relative">
						<Image
							src={"/icons/pill.png"}
							fill
							priority
							className="object-contain"
							alt="pill"
						/>
					</div>
				</div>

				{/* Floating Card: Mobile Clinics */}
				<div className="absolute bottom-24 right-4 bg-[#dce4eb] p-4 rounded-xl shadow-lg flex items-center gap-4  max-w-[220px] z-35">
					<div>
						<p className="text-[11px] uppercase tracking-wider font-bold text-slate-600">
							2 Mobile Clinics
						</p>
						<p className="text-sm font-semibold text-slate-800">
							launching by 2026
						</p>
					</div>
					<Truck className="w-8 h-8 text-slate-900" />
				</div>

				{/* Right Side Stats */}
				<div className="absolute right-0 top-0 flex flex-col gap-12 pl-10 z-35">
					<div>
						<h3 className="text-5xl font-bold text-slate-900">50,000+</h3>
						<p className="text-slate-500 font-medium">
							patients served annually
						</p>
					</div>
					<div>
						<h3 className="text-5xl font-bold text-slate-900">20+</h3>
						<p className="text-slate-500 font-medium">
							years of medical leadership experience
						</p>
					</div>
				</div>
				<div
					className="blob absolute size-60 md:size-40 rounded-full bg-secondary right-1/3 top-1/4 opacity-60 to-transparent blur-2xl z-10"
					style={{ zIndex: 0 }}
				/>
			</div>
		</section>
	);
};

export default HomeHero;
