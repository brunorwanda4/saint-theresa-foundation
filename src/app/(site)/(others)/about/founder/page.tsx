import MyImage from "@/components/common/images/MyImage";
import { leaders } from "@/lib/const/member-const";

const AboutFounderPage = () => {
  return (
    <div className="global-px pt-8">
      <div className="flex flex-row gap-3">
        <MyImage
          src={leaders[0].image}
          alt={leaders[0].name}
          className="h-80 min-w-60 object-cover"
          useSkeleton
        />
        <div className="">
          <h4 className="font-semibold">{leaders[0].name}</h4>
          <span className="text-primary text-sm">{leaders[0].role}</span>
          <p className="max-w-xl text-sm">{leaders[0].bio}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounderPage;
