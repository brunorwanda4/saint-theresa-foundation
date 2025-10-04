import MyImage from "@/components/common/images/MyImage";

const LandingHero1 = () => {
  return (
    <div className="relative h-full w-full">
      <MyImage
        src="/images/image-1-a.jpg"
        className="h-full w-full"
        priority
        original
      />
      <div className="bg-primary/80 absolute bottom-4 left-8 z-20 max-w-3xl px-8 py-4">
        <h1 className="text-primary-foreground text-xl font-medium">
          Intergenerational Dialogue: A Critical Approach to Foster
          Reconciliation and Resiliences
        </h1>
      </div>
    </div>
  );
};

export default LandingHero1;
