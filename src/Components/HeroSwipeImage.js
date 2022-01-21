import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.min.css";
import amar from "../assets/logos/amar.png";
import ard from "../assets/logos/ard.png";
import bodi from "../assets/logos/bodi.png";
import ganzam from "../assets/logos/ganzam.png";
import mandal from "../assets/logos/mandal.png";
import mig from "../assets/logos/mig.png";
import mongol from "../assets/logos/mongol.png";
import monre from "../assets/logos/monre.png";
import munkh from "../assets/logos/munkh.png";
import nomin from "../assets/logos/nomin.png";
import practical from "../assets/logos/practical.png";
import tenger from "../assets/logos/tenger.png";
import ulaanbaatar from "../assets/logos/ulaanbaatar.png";

const HeroSwipeImage = (props) => {
  const [windowSize, setWindowSize] = useState();
  function resize() {
    if (window.innerWidth > 768) {
      return 4;
    } else {
      return 2;
    }
  }
  const logos = [
    ard,
    amar,
    bodi,
    ganzam,
    mandal,
    mig,
    monre,
    munkh,
    nomin,
    practical,
    tenger,
    ulaanbaatar,
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
            <SwiperSlide>
              <img className="w-full" src={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default HeroSwipeImage;
