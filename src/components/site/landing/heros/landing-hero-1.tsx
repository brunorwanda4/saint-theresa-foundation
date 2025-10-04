import MyImage from '@/components/common/images/MyImage';

const LandingHero1 = () => {
  return (
    <div className=" h-full w-full relative">
      <MyImage src="/images/image-1-a.jpg" className=" h-full w-full" priority original />
      <div className=" absolute z-20 bottom-4 bg-primary/80 px-8 py-4 left-8 max-w-3xl">
        <h1 className=" text-xl font-medium text-primary-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit amet consectetur, adipisicing
          elit amet consectetur, adipisicing elit.
        </h1>
      </div>
    </div>
  );
};

export default LandingHero1;
