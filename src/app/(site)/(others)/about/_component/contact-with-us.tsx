import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ContactWithUs = () => {
	return (
		<div className="bg-gradient-to-br from-primary to-info  from-10% to-90% text-background lg:p-8 p-4 rounded-2xl flex flex-col  justify-between">
			<div>
				<span className="text-lg opacity-80 ">
					Join us in extending the healing hand of service.
				</span>{" "}
				<h1 className="h1 max-w-md">Partner with Our Mission</h1>
			</div>
			<Link
				className={cn(
					"group mt-8 w-fit",
					buttonVariants({
						variant: "outline",
						size: "lg",
						className: "bg-transparent",
					}),
				)}
				href={"/contact"}
			>
				Contact Us{" "}
				<GoArrowRight className="group-hover:translate-x-1 transition-transform" />
			</Link>
		</div>
	);
};

export default ContactWithUs;
