import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";
import Title from "../Components/Title";
import Tushig from "../assets/tushig.png";
import Badmaa from "../assets/badmaa.png";
import Urangoo from "../assets/urangoo.png";

function About() {
  const [index, setIndex] = useState(0);
  const avatars = [Tushig, Badmaa, Urangoo];
  const text = ["Түшиг", "Бадамсүрэн", "Урангоо"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setIndex(0);
      }, 1);
      setTimeout(() => {
        setIndex(1);
      }, 2000);
      setTimeout(() => {
        setIndex(2);
      }, 4000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <div className="flex flex-col justify-between items-center mt-20 md:flex-row">
          <div className="w-10/12 ">
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
          <div className="flex flex-col items-center">
            <img className="w-full" src={avatars[index]} />
            <div className="text-white mt-4 text-lg font-semibold">
              {text[index]}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
