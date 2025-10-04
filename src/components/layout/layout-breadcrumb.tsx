"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { formatText } from "@/lib/helper/format-text";
import { usePathname } from "next/navigation";

export default function LayoutBreadcrumb() {
  const pathname = usePathname();

  if (!pathname) return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((seg, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(seg);
    return { label, href };
  });

  return (
    <Breadcrumb className="global-px">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-primary">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {crumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === crumbs.length - 1 ? (
                <BreadcrumbPage className="capitalize">
                  {formatText(crumb.label)}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  href={crumb.href}
                  className="text-primary capitalize"
                >
                  {formatText(crumb.label)}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
