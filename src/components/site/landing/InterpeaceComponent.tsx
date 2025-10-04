import SiteLink from '@/components/common/site/site-link';

const InterpeaceComponent = () => {
  return (
    <section className=" global-px ">
      <div className="flex flex-col md:gap-8 gap-4 md:flex-row">
        <div className="w-full md:w-1/2 space-y-4 hover:bg-primary/20 p-4 duration-200">
          <h2 className=" font-bold text-4xl text-blue-950">Who We Are</h2>
          <p>
            Interpeace is an international organization that prevents violence and builds lasting
            peace. We have 30 years of experience working in Africa, the Middle East, Asia, Europe
            and Latin America. <br /> Interpeace builds trust as the glue that bring societies back
            together and works to have solutions designed and led locally from the grassroot
            communities to the most senior decision-making levels.
          </p>
        </div>

        <div className="w-full md:w-1/2 space-y-4 hover:bg-primary/20 p-4 duration-200">
          <h2 className=" font-bold text-4xl text-blue-950">Our Mandate</h2>
          <p>
            Interpeace is an international organization that prevents violence and builds lasting
            peace. We have 30 years of experience working in Africa, the Middle East, Asia, Europe
            and Latin America. Interpeace builds trust as the glue that bring societies back
            together and works to have solutions designed and led locally from the grassroot
            communities to the most senior decision-making levels.
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-8">
        <SiteLink link="/programs">Our Peacebuilding Pillars</SiteLink>
      </div>
    </section>
  );
};

export default InterpeaceComponent;
