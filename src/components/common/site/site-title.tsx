interface props {
  children: React.ReactNode;
}
const SiteTitle = ({ children }: props) => {
  return (
    <div className=" bg-blue-950  px-4 py-1 font-bold text-4xl w-fit text-primary-foreground rounded-tr-3xl rounded-bl-3xl pt-0">
      {children}
    </div>
  );
};

export default SiteTitle;
