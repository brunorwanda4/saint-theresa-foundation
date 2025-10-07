"use client";
import MobileSiteNavItems from "@/components/common/navbar/mobile-site-nav-items";
import SiteNavContact from "@/components/common/navbar/site-nav-contact";
import SiteNavItems from "@/components/common/navbar/site-nav-items";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const SiteNav = () => {
  const isScrolled = useScrollPosition(18);

  return (
    <div
      className={cn(
        "global-px fixed z-50 flex w-full items-center justify-between transition-colors duration-300",
        isScrolled && "border-b-secondary bg-background border-b shadow-md",
      )}
    >
      <div className="max-md:flex max-md:items-center max-md:gap-4">
        {/* Mobile */}
        <div className="flex items-center gap-2">
          <Link href={`/`}>
            <div className="relative size-16">
              <Image
                className="object-contain"
                src={"/logo.png"}
                alt="saint theresa foundation"
                fill
                priority
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Nav items wrapper */}
      <div className="flex w-full justify-center">
        <div
          className={cn(
            "w-fit transition-all duration-500 ease-in-out",
            isScrolled
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-100",
          )}
        >
          <SiteNavItems />
        </div>
      </div>

      <div className="max-lg:hidden">
        <SiteNavContact />
      </div>
      <div className="flex lg:hidden">
        <MobileSiteNavItems />
      </div>
    </div>
  );
};

export default SiteNav;
