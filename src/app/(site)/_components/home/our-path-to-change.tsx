import PathToChangeCard from "@/components/cards/path-to-change-card";

const OurPathToChange = () => {
	const pathToChange = [
		{
			step: "Bridge the Access Gap",
			action:
				"Deploying mobile clinics to reach rural populations facing geographical barriers.",
			image: "/images/ambulance.jpg",
		},
		{
			step: "Ensure Medicine Equity",
			action:
				"Establishing community pharmacies to provide subsidized medication to those in financial need.",
			image: "/images/pharmacy-1.jpg",
		},
		{
			step: "Innovate Through Technology",
			action:
				"Using e-consultation and digital tools to connect remote patients with quality medical expertise.",
			image: "/images/mobile-clinic.jpg",
		},
		{
			step: "Cultivate Community Resilience",
			action:
				"Focusing on preventive screenings and health education to stop illnesses before they start.",
			image: "/images/image-2.jpeg",
		},
		{
			step: "Empower Local Leadership",
			action:
				"Training community health workers and local leaders to ensure long-term, self-sustaining health promotion.",
			image: "/images/d/2.jpg",
		},
		{
			step: "Foster Global Solidarity",
			action:
				"Collaborating with international partners to expand our reach from rural Rwanda to Kenya and beyond.",
			image: "/images/global-solidarity.avif",
		},
	];
	return (
		<section className=" space-y-8 flex flex-col justify-between h-full">
			<h1 className=" h1">Our Core Programs</h1>
			<main className=" grid grid-cols-3 gap-3">
				{pathToChange.map((item, index) => (
					<PathToChangeCard
						key={`${index}-${item.step}`}
						title={item.step}
						description={item.action}
						link=""
						image={item.image}
					/>
				))}
			</main>
		</section>
	);
};

export default OurPathToChange;
