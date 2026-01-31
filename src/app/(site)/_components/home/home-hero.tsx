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
			className=" mx-auto min-h-[80vh] grid grid-cols-12 gap-8  relative  py-8"
		>
			{/* Left Content */}
			<div className="col-span-12 lg:col-span-5  flex flex-col lg:gap-8 gap-4">
				<h1 className="h1">
					Health Care for All Extending the Healing Hand of Service
				</h1>
				<p className="p lg:max-w-md max-w-2xl">
					Inspired by the "little way" of St. Thérèse, we provide underserved
					communities with equitable access to preventive screenings, mobile
					clinics, and digital health tools to ensure that geography and income
					never stand in the way of human dignity.
				</p>
				<div className="flex gap-4">
					<Link href="/get-involved/partner" className=" w-fit">
						<Button size="lg" className="rounded-md px-8 py-6  gap-2 group">
							Partner With Us
							<IoMdArrowForward className="group-hover:translate-x-1 cursor-pointer  transition-transform" />
						</Button>
					</Link>
					<Link
						href="/get-involved/volunteer"
						className=" w-fit cursor-pointer"
					>
						<Button
							variant="outline"
							size="lg"
							className="rounded-md px-8 py-6 text-base border-slate-300"
						>
							Join Our Mission
						</Button>
					</Link>
				</div>
			</div>

			<div className="col-span-12 lg:col-span-7 relative h-[500px] w-full ">
				<div className=" relative w-72 h-43 z-20">
					<Image
						src="/images/digital-health-2.jpg"
						alt="Digital health"
						fill
						className="object-cover rounded-md "
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
					className="blob absolute size-60 md:size-40 rounded-full bg-primary opacity-60 to-transparent blur-2xl z-10 "
					style={{ zIndex: 0 }}
				/>
				<div className="z-35 absolute bottom-10 lg:left-[-20px] bg-background/40  backdrop-blur-md lg:py-2 lg:px-4 px-2 rounded-2xl shadow-xl flex items-center gap-4 border border-background max-w-65">
					<p className="text-sm font-medium text-slate-800 leading-tight">
						2 Community Pharmacies in development
					</p>
					<div className=" lg:size-18 relative size-14">
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
				<div className="absolute bottom-24 right-4 bg-muted-foreground/20 p-4 rounded-xl shadow-lg flex items-center gap-4  max-w-[220px] z-35">
					<div>
						<p className="text-[11px] uppercase tracking-wider font-bold ">
							2 Mobile Clinics
						</p>
					</div>
					<div className=" lg:size-14 relative size-10">
						<Image
							src={"/icons/ambulance.png"}
							fill
							priority
							className="object-contain"
							alt="pill"
						/>
					</div>
				</div>

				{/* Right Side Stats */}
				<div className="absolute right-0 top-0 flex flex-col gap-12 pl-10 z-35 max-md:hidden">
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
					className="max-md:top-2 max-md:right-2 blob absolute size-60 md:size-40 rounded-full bg-secondary right-1/3 top-1/4 opacity-60 to-transparent blur-2xl z-10"
					style={{ zIndex: 0 }}
				/>
			</div>
		</section>
	);
};

export default HomeHero;
