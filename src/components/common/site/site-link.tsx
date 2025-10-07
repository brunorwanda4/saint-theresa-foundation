import { cn } from "@/lib/utils";
import Link from "next/link";
import { RefObject } from "react";

interface props {
  link: string;
  children: string;
  className?: string;
  ref?: RefObject<HTMLAnchorElement | null>;
}

const SiteLink = ({ children, link, className, ref }: props) => {
  return (
    <Link
      ref={ref}
      href={link}
      className={cn(
        "text-primary-foreground from-primary hover:from-secondary rounded-full bg-gradient-to-r to-blue-950 px-4 py-2 duration-200 hover:to-orange-950",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default SiteLink;
