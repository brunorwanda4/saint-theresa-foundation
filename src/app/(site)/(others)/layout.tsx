import LayoutBreadcrumb from "@/components/layout/layout-breadcrumb";
import LandingLink from "@/components/site/landing/LandingLink";

interface props {
  children: React.ReactNode;
}

const OthersLayout = ({ children }: props) => {
  return (
    <div className="mt-18">
      <LayoutBreadcrumb />
      {children}
      <div className="h-24" />
      <LandingLink />
    </div>
  );
};

export default OthersLayout;
