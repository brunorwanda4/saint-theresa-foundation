import { LandingLinks } from '@/lib/const/landing-link-const';

const LandingLink = () => {
  return (
    <section className=" global-px grid grid-cols-4 gap-8">
      {LandingLinks.map((item, i) => (
        <div key={i} className="  flex flex-col items-center">
          <item.icon className=" text-primary" />
          <h4 className=" font-bold text-lg">{item.title}</h4>
          <p className=" text-center text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default LandingLink;
