import Image from "next/image";
import { cn } from "@/lib/utils";

const ThingsWeDid = () => {
	const thingsWeDid = [
		{
			title: "Annual Patients Served",
			total: "50,000+",
			description:
				"Providing quality healthcare through our established partner polyclinic in Rwamagana.",
			image: "/icons/patient.png",
			className: " bg-muted-foreground text-background",
		},
		{
			title: "Outreach Beneficiaries",
			total: "800+",
			description:
				"Vulnerable individuals reached during our specialized preventive health screening missions.",
			image: "/icons/reach.png",
			className: " bg-foreground text-background",
		},
		{
			title: "Years of Medical Excellence",
			total: "13+",
			description:
				"Serving the Eastern Province community with dedicated medical care since 2013.",
			image: "/icons/calendar.png",
			className: " bg-secondary text-background",
		},
		{
			title: "Essential Health Screenings",
			total: "4",
			description:
				"Free diagnostic services provided for BMI, blood pressure, glucose levels, and HIV.",
			image: "/icons/essential-oil.png",
			className:
				"bg-gradient-to-br from-primary to-info  from-10% to-90% text-background",
		},
	];
	return (
		<div className=" ">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{thingsWeDid.map((thing) => (
					<div
						key={thing.title}
						className={cn(
							"group min-h-44 lg:min-h-52 p-4 bg-primary rounded-md flex flex-col justify-between",
							thing.className,
						)}
					>
						<div>
							<p className="opacity-80">{thing.title}</p>
							<p className="text-sm">{thing.description}</p>
						</div>
						<div className="flex items-end justify-between">
							<span className="h1">{thing.total}</span>
							<Image
								src={thing.image}
								alt={thing.title}
								width={32}
								height={32}
								loading="lazy"
								className="invert group-hover:animate-bounce"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ThingsWeDid;
