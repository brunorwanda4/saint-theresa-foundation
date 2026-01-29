import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { IoMdArrowForward } from "react-icons/io";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WhoWeAre = () => {
	return (
		<div className=" flex gap-4">
			<div className=" w-1/3">
				<h1 className="h1">Who We Are</h1>
			</div>
			<div className=" w-2/3">
				<p className="p ">
					The Sainte Thérèsa Foundation is a faith-driven nonprofit extension of
					the Sainte Thérèse Polyclinic that brings essential care to
					underserved communities through{" "}
					<strong>mobile medical vehicles</strong> and digital health tools.
					Guided by 40 years of combined leadership in public health and global
					governance, the foundation focuses on expanding access to medicine and
					preventive screenings across Rwanda and Kenya. <br /> <br />
					Rooted in the <strong>little way</strong> of St. Thérèse, our mission
					has already reached over 800 beneficiaries with free health services
					designed to restore human dignity.
				</p>
				<Link
					href={"/about"}
					className={cn(
						"rounded-md px-8 py-6  gap-2 group mt-4",
						buttonVariants({ size: "lg", variant: "outline" }),
					)}
				>
					Learn More{" "}
					<GoArrowRight className="group-hover:translate-x-1 transition-transform" />
				</Link>
			</div>
		</div>
	);
};

export default WhoWeAre;
