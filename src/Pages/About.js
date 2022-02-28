import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";

import Container from "../Components/Container";
import Tushig from "../assets/tushig.png";
import Urangoo from "../assets/badmaa.png";
import Badmaa from "../assets/urangoo.png";

function About() {


  const avatars = [
    {
      images: Tushig,
      text: "Түшиг",
    },
    {
      images: Urangoo,
      text: "Урангоо",
    },
    {
      images: Badmaa,
      text: "Бадамсүрэн",
    },
  ];
  SwiperCore.use([Autoplay]);
  return (
    <div>
   
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 ">
          <div className="col-span-2 ">
            <h1 className="text-white text-2xl text-center font-semibold mt-7 w-8/12 mx-auto md:text-4xl  md:text-left lg:w-full lg:leading-normal">
              National Insurance <br /> Brokerage Services
            </h1>
            <p
              className="text-gray-400 text-center mx-auto mt-4 mb-8 font-lg md:w-8/12 md:text-left lg:w-8/12
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
          <div className="flex justify-center items-center">
            <Swiper
              modules={[EffectFade]}
              effect="fade"
              spaceBetween={1}
              slidesPerView={1}
              autoplay={{ delay: 2000 }}
              centeredSlidesBounds={true}
            >
              {avatars.map((el, index) => {
                return (
                  <SwiperSlide className="flex flex-col justify-center items-center ">
                    <img className="w-60 h-60 " src={el.images} alt="avatars" />
                    <p className="text-gray-100 font-bold mt-8 text-center">{el.text}</p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
