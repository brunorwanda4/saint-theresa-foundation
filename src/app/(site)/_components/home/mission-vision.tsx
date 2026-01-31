import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MissionVision = () => {
	return (
		<div className="bg-foreground text-background lg:p-8 p-4 rounded-2xl flex flex-col gap-4 lg:gap-6">
			<h2 className="h2">Our Mission and Vision</h2>
			<div className=" flex flex-col lg:flex-row  lg:gap-6 gap-4">
				<div className="p-4 rounded-xl bg-primary">
					<Link href={"/about/vision-mission"} className="w-fit">
						<h4 className="h4">Mission</h4>
					</Link>
					<p className="p">
						Enhancing well-being for underserved communities through mobile
						healthcare, digital tools, and community pharmacies, rooted in human
						dignity and Christian compassion.
					</p>
				</div>
				<div className="p-4 rounded-xl bg-muted">
					<Link href={"/about/vision-mission"} className="w-fit">
						<h4 className="h4">Vision</h4>
					</Link>
					<p className="p">
						A Rwanda where every individual, regardless of economic status or
						geography, can access affordable, quality healthcare and essential
						medicines.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MissionVision;
