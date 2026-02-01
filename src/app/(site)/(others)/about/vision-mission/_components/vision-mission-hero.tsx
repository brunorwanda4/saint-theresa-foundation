import Image from "next/image";

const VisionMissionHero = () => {
	return (
		<div className=" flex  w-full">
			<div className="lg:w-1/3 w-1/2 items-center flex">
				<h2 className="lg:text-3xl md:text-2xl text-xl font-medium">
					The{" "}
					<strong className="text-primary">Sainte Thérèse Foundation</strong> is
					guided by a clear strategic roadmap that aims to eliminate barriers to
					healthcare through faith-inspired service and professional medical
					expertise.
				</h2>
			</div>
			<div className="relative  lg:w-2/3 w-1/2 h-[350px]">
				<Image
					src="/images/d/6.jpg"
					alt="Slanted"
					fill
					style={{
						clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
					}}
					className="object-cover rounded-r-2xl"
				/>
			</div>
		</div>
	);
};

export default VisionMissionHero;
