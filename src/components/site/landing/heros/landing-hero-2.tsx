import MyImage from '@/components/common/images/MyImage';

const LandingHero2 = () => {
  return (
    <div className=" h-full items-center overflow-hidden global-px w-full relative bg-primary flex justify-between">
      <div className=" max-w-lg space-y-2">
        <h2 className=" text-primary-foreground text-4xl font-bold">Together, We Build Hope</h2>
        <p className=" text-lg text-primary-foreground">
          Join us in supporting students, families, and communities with education and care.
        </p>
      </div>
      <MyImage
        src="/images/image-9-a.jpeg"
        original
        loading="lazy"
        className=" h-[80vh] w-lg rounded-full"
      />
    </div>
  );
};

export default LandingHero2;
