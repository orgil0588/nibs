import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.min.css";
import Navbar from "../Components/Header/Navbar";

import Container from "../Components/Container";

import data from "../fakejson/compare.json";
function Statistic() {
  const [exact, setExact] = useState({
    active: {
      backgroundColor: "red",
    },
  });
  const [index, setIndex] = useState(0);
  function resize() {
    if (window.innerWidth > 768) {
      return 4;
    } else {
      return 3;
    }
  }

  console.log(index);
  return (
    <div>
      <Container>
        <div className="text-white">
          <Swiper
            modules={[EffectFade]}
            effect="fade"
            spaceBetween={50}
            slidesPerView={resize()}
            centeredSlides={true}
            centeredSlidesBounds={true}
            pagination={{ clickable: true }}
          >
            {data.map((e, i) => {
              return (
                <SwiperSlide>
                  <div
                    onClick={() => setIndex(i)}
                    className="flex flex-col items-center justify-center"
                  >
                    <img
                      className={`cursor-pointer ${
                        index === i ? `opacity-100` : `opacity-50`
                      }`}
                      src={e.img}
                    />

                    <p className="text-center">{e.text}</p>
                  </div>
                </SwiperSlide>
              );
            })}
            <Container>
              <div>
                <div className="flex justify-between items-center my-8">
                  <div className="flex items-center ">
                    <div className="p-4 bg-blue-500 rounded-md mr-4"></div>
                    Даатгалын хураамж
                  </div>
                  {
                    <p className="px-4 py-1 bg-blue-500 bg-opacity-30 text-blue-500 font-semibold rounded-lg">
                      {data[index].daatgaliinHuraamj}
                    </p>
                  }
                </div>
                <div className="flex justify-between items-center my-8">
                  <div className="flex items-center ">
                    <div className="p-4 bg-indigo-500 rounded-md mr-4"></div>
                    Нөхөн төлбөр
                  </div>
                  {
                    <p className="px-4 py-1 bg-indigo-500 bg-opacity-30 text-indigo-500 font-semibold rounded-lg">
                      {data[index].nohonTolbor}
                    </p>
                  }
                </div>
                <div className="flex justify-between items-center my-8">
                  <div className="flex items-center ">
                    <div className="p-4 bg-purple-500  rounded-md mr-4"></div>
                    Нийт хөрөнгө
                  </div>
                  {
                    <p className="px-4 py-1 bg-purple-500 bg-opacity-30 text-purple-400 font-semibold rounded-lg">
                      {data[index].niitHorongo}
                    </p>
                  }
                </div>
                <div className="flex justify-between items-center my-8">
                  <div className="flex items-center ">
                    <div className="p-4 bg-pink-400 rounded-md mr-4"></div>
                    Цэвэр ашиг
                  </div>
                  {
                    <p className="px-4 py-1 bg-pink-400  bg-opacity-30 text-pink-400 font-semibold rounded-lg">
                      {data[index].tseverAshig}
                    </p>
                  }
                </div>
                <div className="flex justify-between items-center my-8">
                  <div className="flex items-center ">
                    <div className="p-4 bg-pink-300 rounded-md mr-4"></div>
                    Нөөц сан
                  </div>
                  {
                    <p className="px-4 py-1 bg-pink-300 bg-opacity-30 text-pink-300 font-semibold rounded-lg">
                      {data[index].NootsSan}
                    </p>
                  }
                </div>
              </div>
            </Container>
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Statistic;
