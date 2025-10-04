import SiteFooter from '@/components/common/footer/site-footer';
import SiteNav from '@/components/common/navbar/Site-nav';

interface props {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: props) => {
  return (
    <div className=" w-full ">
      <SiteNav />
      <main className=" min-h-screen  w-full pt-16 pb-8">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
