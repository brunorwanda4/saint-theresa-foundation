import MyImage from "@/components/common/images/MyImage";

const LandingHero2 = () => {
  return (
    <div className="global-px to-primary via-to-primary relative flex h-[70vh] w-full items-center justify-between overflow-hidden bg-gradient-to-tl from-blue-950 from-40%">
      <div className="max-w-lg space-y-2">
        <h2 className="text-primary-foreground text-4xl font-bold">
          Together, We Build Hope
        </h2>
        <p className="text-primary-foreground text-lg">
          Join us in supporting students, families, and communities with
          education and care.
        </p>
      </div>
      <MyImage
        src="/images/image-9-b.jpg"
        original
        loading="lazy"
        className="h-[80vh] w-lg rounded-full"
      />
    </div>
  );
};

export default LandingHero2;
