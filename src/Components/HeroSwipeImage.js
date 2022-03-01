import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.min.css";
import amar from "../assets/logos/amar.png";
import bodi from "../assets/logos/bodi.png";
import mandal from "../assets/logos/mandal.png";
import mongol from "../assets/logos/mongol.png";
import practical from "../assets/logos/practical.png";
import khaan from "../assets/logos/khaan.png";

const HeroSwipeImage = () => {
  function resize() {
    if (window.innerWidth > 768) {
      return 4;
    } else {
      return 2;
    }
  }
  const logos = [
    // ard,
    amar,
    bodi,
    // ganzam,
    mandal,
    mongol,
    khaan,
    // mig,
    // monre,
    // munkh,
    // nomin,
    practical,
    // ulaanbaatar,
  ];

  SwiperCore.use([Autoplay]);
  return (
    <div className="text-white flex items-center justify-center">
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={resize()}
        autoplay={{ delay: 2000 }}
        centeredSlidesBounds={true}
      >
        {logos.map((el) => {
          return (
            <SwiperSlide key={el}>
              <img className="w-full" src={el} alt="logos" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default HeroSwipeImage;
