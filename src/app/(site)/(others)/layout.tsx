import LayoutBreadcrumb from '@/components/layout/layout-breadcrumb';

interface props {
  children: React.ReactNode;
}

const OthersLayout = ({ children }: props) => {
  return (
    <div className=" mt-18">
      <LayoutBreadcrumb />
      {children}
    </div>
  );
};

export default OthersLayout;
