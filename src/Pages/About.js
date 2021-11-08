import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import Navbar from "../Components/Header/Navbar";
import Container from "../Components/Container";
import Title from "../Components/Title";
import Tushig from "../assets/tushig.png";
import Badmaa from "../assets/badmaa.png";
import Urangoo from "../assets/urangoo.png";

function About() {
  const avatars = [Tushig, Badmaa, Urangoo];

  // avatars.map((e) => {
  //   console.log(e);
  //   return (dummy = e);
  // });
  return (
    <div>
      <Navbar />
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-full ">
            <h1 className="text-white text-3xl text-center font-semibold mt-7 w-8/12 mx-auto md:text-5xl  lg:text-left lg:w-full lg:leading-normal">
              National Insurance <br /> Brokerage Services
            </h1>
            <p
              className="text-gray-400 text-center mx-auto mt-4 mb-8 font-lg md:w-8/12 lg:text-left lg:w-8/12
            lg:mx-0 lg:leading-normal lg:text-lg "
            >
              Нэйшнл Иншуранс Брокерэйж Сервисэс ХХК хувьд 2020 оны 10 сарын
              26-ы өдөр Монгол Улсын Компанийн Тухай Хуулийн дагуу үүсгэн
              байгуулагдаж холбогдох хууль тогтоомж, дүрэм журмыг заасан
              шаардлагуудыг ханган Санхүүгийн Зохицуулах Хороо (СЗХ)-оос
              даатгалын зуучлагчийн үйл ажиллагаа эрхлэх тусгай зөвшөөрөл авсан
              хязгаарлагдмал хувьцаат компани юм.
            </p>
          </div>
          <div className="text-white"></div>
        </div>
      </Container>
    </div>
  );
}

export default About;
