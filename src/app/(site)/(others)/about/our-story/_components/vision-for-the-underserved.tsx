import Carousel from "@/components/carousel";
import FoundersImages from "./founders-images";

const VisionForTheUnderserved = () => {
	const visions = [
		{
			title: "43% of Rwandans",
			description: "Still live in rural areas with limited access to clinics",
		},
		{
			title: "82% of the rural poor",
			description: "Cannot afford essential medication",
		},
		{
			title: "1 in 3 people",
			description:
				"Lack proper healthcare due to financial or geographical barriers",
		},
	];

	const leaders = [
		{
			image: "/images/our/ahayo-1.jpeg",
			title: "AHAYO Marie Anita ",
			description: "",
		},
		{
			image: "/images/founder.jpg",
			title: "Jean Paul Mugiraneza ",
			description: "",
		},
		{
			image: "/images/our/ahayo-5.jpg",
			title: "AHAYO Marie Anita ",
			description: "",
		},
		{
			image: "/images/our/founder.jpg",
			title: "Jean Paul Mugiraneza ",
			description: "",
		},
	];

	return (
		<main className="  space-y-8 lg:space-y-16">
			<div className=" flex flex-col gap-4 lg:gap-8 lg:flex-row">
				<h2 className="h1 lg:w-1/3">A Vision for the Underserved</h2>
				<p className=" text-lg font-medium lg:text-xl lg:w-1/2 ">
					Despite the success of the polyclinic, the founders recognized a
					staggering reality
				</p>
			</div>
			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{visions.map((vision, index) => (
					<div
						key={`${index}-${vision.title}`}
						className="flex flex-col gap-2 bg-foreground text-background p-4 lg:p-8 min-h-32 rounded-md justify-center items-center"
					>
						<h3 className="h1 text-center ">{vision.title}</h3>
						<p className="p text-center">{vision.description}</p>
					</div>
				))}
			</div>
			<div className=" flex flex-col lg:flex-row-reverse lg:gap-8 gap-4 items-start justify-between">
				<section className="relative flex flex-col items-center w-full lg:w-1/2 ">
					<div className="max-w-full mx-auto w-full">
						<Carousel
							className="min-h-120"
							imageClassName="min-h-120"
							containerClassName="min-h-120"
							projects={leaders}
						/>
					</div>
				</section>
				<p className=" text-lg lg:w-1/2">
					Driven by these statistics and the "little way" of St. Thérèse of
					Lisieux, founders <strong>AHAYO Marie Anita</strong> and{" "}
					<strong>Jean Paul Mugiraneza </strong>established the foundation to
					take healing <strong>beyond hospital walls</strong>. They combined
					their 40 years of expertise in public health, governance, and
					peacebuilding to create a model rooted in{" "}
					<strong>human dignity and social solidarity</strong>.
				</p>
			</div>
		</main>
	);
};

export default VisionForTheUnderserved;
