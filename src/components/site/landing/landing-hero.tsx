"use client";
import LandingHero1 from "@/components/site/landing/heros/landing-hero-1";
import LandingHero2 from "@/components/site/landing/heros/landing-hero-2";
import { useRef } from "react";
import Slider, { Settings } from "react-slick";

const LandingHero = () => {
  const sliderRef = useRef(null);
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="">
      <Slider ref={sliderRef} {...settings} className="h-[70vh]">
        <div>
          <LandingHero1 />
        </div>
        <div>
          <LandingHero2 />
        </div>
      </Slider>
    </section>
  );
};

export default LandingHero;
