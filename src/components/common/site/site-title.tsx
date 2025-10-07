import { RefObject } from "react";

interface props {
  children: React.ReactNode;
  ref?: RefObject<HTMLHeadingElement | null>;
}
const SiteTitle = ({ children, ref }: props) => {
  return (
    <div
      ref={ref}
      className="text-primary-foreground w-fit rounded-tr-3xl rounded-bl-3xl bg-blue-950 px-4 py-1 pt-0 text-4xl font-bold"
    >
      {children}
    </div>
  );
};

export default SiteTitle;
