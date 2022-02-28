import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "../assets/logo-xs.png";
import Burger from "../assets/menu.png";
import Cancel from "../assets/cancel.png";

function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <nav
        className={` w-full flex justify-between items-center text-white py-4 border-b border-gray-800 ${
          isOpen ? `flex flex-col` : "flex"
        } `}
      >
        <div className={`${isOpen ? `hidden` : `flex`}`}>
          <img src={Logo} alt="images" />

          {/* <p className="ml-4 font-semibold hidden lg:block">
            National Insurance <br /> Brokerage Services
          </p> */}
        </div>

        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="cursor-pointer absolute top-6 right-2 lg:hidden"
        >
          {!isOpen ? (
            <img className="w-10 rounded p-2 " src={Burger} alt="images" />
          ) : (
            <img className="w-10 rounded p-2" src={Cancel} alt="images" />
          )}
        </div>
        <div
          className={`${
            isOpen
              ? ` flex flex-col w-full h-full mx-auto items-start mt-24`
              : "hidden"
          } lg:block`}
        >
          <Link className="p-4 text-baseline font-regular" to="/">
            Эхлэл
          </Link>
          <Link className="p-4 text-baseline font-regular" to="/about">
            Бидний тухай
          </Link>
          {/* <Link className="p-4 text-baseline font-regular" to="/service">
            Үйлчилгээ
          </Link> */}
          <Link className="p-4 text-baseline font-regular" to="/contact">
            Холбоо барих
          </Link>
        </div>
        <div
          className={`${
            isOpen
              ? ` flex flex-col  w-full  mx-auto items-start justify-between mt-10  `
              : "hidden"
          } lg:block`}
        >
          <Link
            className="px-4 py-2 text-baseline font-regular bg-blue-500 hover:bg-blue-700 rounded-lg"
            to="/onlineInsurance"
          >
            Цахим даатгал
          </Link>
          <Link
            className="px-4 py-2 text-baseline font-regular bg-transparent mt-4"
            to="/InsuranceCompare"
          >
            Даатгалын статистик
          </Link>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
