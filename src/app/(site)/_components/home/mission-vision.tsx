import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MissionVision = () => {
	return (
		<div className="bg-foreground text-background p-8 rounded-2xl flex flex-col gap-6">
			<h2 className="h2">Our Mission and Vision</h2>
			<div className=" flex flex-row  gap-6">
				<div className="p-4 rounded-xl bg-primary">
					<h4 className="h4">Mission</h4>
					<p className="p">
						Enhancing well-being for underserved communities through mobile
						healthcare, digital tools, and community pharmacies, rooted in human
						dignity and Christian compassion.
					</p>
				</div>
				<div className="p-4 rounded-xl bg-muted">
					<h4 className="h4">Vision</h4>
					<p className="p">
						A Rwanda where every individual, regardless of economic status or
						geography, can access affordable, quality healthcare and essential
						medicines.
					</p>
				</div>
			</div>
			<div className=" flex flex-row justify-center items-center">
				<Link
					href={"/about/vision-mission"}
					className={cn(
						"rounded-md   gap-2 group mt-4 ",
						buttonVariants({ size: "lg", variant: "outline" }),
						"bg-foreground",
					)}
				>
					Learn More{" "}
					<GoArrowRight className="group-hover:translate-x-1 transition-transform" />
				</Link>
			</div>
		</div>
	);
};

export default MissionVision;
