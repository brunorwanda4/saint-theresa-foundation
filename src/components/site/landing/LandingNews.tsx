import MyImage from '@/components/common/images/MyImage';
import SiteLink from '@/components/common/site/site-link';
import SiteTitle from '@/components/common/site/site-title';
import { news } from '@/lib/const/news-const';
import { formatDate } from '@/lib/utils/formatDate';
import Link from 'next/link';

const LandingNews = () => {
  return (
    <section className=" global-px">
      <SiteTitle>News</SiteTitle>
      <main className=" grid grid-cols-3 mt-8 gap-4">
        {news.map((item, i) => (
          <div key={i} className=" w-full h-80 relative hover:scale-105 duration-200">
            <MyImage src={item.image} original loading="lazy" className=" w-full h-full" />
            <div className=" absolute bottom-0 bg-blue-950/70 px-4 py-2 w-full h-30">
              <h4 className=" text-primary-foreground font-medium">
                <Link href={`/resource/${item.id}`}>{item.title}</Link>
              </h4>
              <span className=" text-primary-foreground text-sm">
                {formatDate(item.publishedAt)}
              </span>
            </div>
          </div>
        ))}
      </main>
      <div className=" flex justify-center items-center mt-8">
        <SiteLink link="/news">Read more</SiteLink>
      </div>
    </section>
  );
};

export default LandingNews;
