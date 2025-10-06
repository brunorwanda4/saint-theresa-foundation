import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import SiteTitle from "@/components/common/site/site-title";
import { resources } from "@/lib/const/resources-const";
import { formatDate } from "@/lib/utils/formatDate";
import Link from "next/link";

const LandingResources = () => {
  return (
    <section className="global-px">
      <SiteTitle>Resources</SiteTitle>
      <main className="mt-8 grid w-full grid-cols-3 gap-4">
        {resources.map((item, i) => (
          <div
            key={i}
            className="relative h-80 w-full duration-200 hover:scale-105"
          >
            <MyImage
              src={item.image}
              original
              loading="lazy"
              className="h-full w-full"
            />
            <div className="absolute bottom-0 h-30 w-full bg-blue-950/70 px-4 py-2">
              <h4 className="text-primary-foreground font-medium">
                <Link href={`/resource/${item.id}`}>{item.title}</Link>
              </h4>
              <span className="text-primary-foreground text-sm">
                {formatDate(item.uploadedAt)}
              </span>
            </div>
          </div>
        ))}
      </main>
      <div className="mt-8 flex items-center justify-center">
        <SiteLink link="/impact/stories">Read more</SiteLink>
      </div>
    </section>
  );
};

export default LandingResources;
