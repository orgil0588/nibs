import React, { useState } from "react";
import Container from "./Container";
import data from "../fakejson/compare.json";
import Chart from "./Chart";
function Compare() {
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(1);
  console.log(index);

  return (
    <Container>
      <div className="w-full relative ">
        <button
          onClick={() => setDrop(!drop)}
          className="text-white border border-white  backdrop-filter backdrop-blur-lg rounded-xl py-2 px-6 absolute  left-60"
        >
          <div
            className={`${
              drop ? `h-40 overflow-hidden overflow-y-scroll` : ""
            }`}
          >
            {console.log(drop)}
            {data[index].text}
            {data.map((e, i) => {
              return (
                <li
                  onClick={() => setIndex(i)}
                  className={`text-left my-2 text-gray-400 ${
                    drop === false ? `hidden` : `block`
                  } `}
                  key={i}
                >
                  {e.text}
                </li>
              );
            })}
          </div>
        </button>
        <button
          onClick={() => setDrop2(!drop2)}
          className="text-white border border-white rounded-xl backdrop-filter backdrop-blur-lg  py-2 px-6 absolute right-60 "
        >
          <div
            style={{ scrollbarWidth: "none" }}
            className={`${
              drop2 ? `h-40 overflow-hidden overflow-y-scroll ` : "  "
            }`}
          >
            {data[index2].text}
            {data.map((e, i) => {
              return (
                <li
                  onClick={() => setIndex2(i)}
                  className={` my-2 text-left text-gray-400 ${
                    drop2 === false ? `hidden` : `block`
                  } `}
                  key={i}
                >
                  {e.text}
                </li>
              );
            })}
          </div>
        </button>
      </div>

      <Chart index={index} index2={index2} />
      <div className="mt-12  mx-auto ">
        <div className="flex justify-between items-center mt-4 text-white">
          {
            <p className="px-4 py-1  bg-blue-500 bg-opacity-30 text-blue-500 font-semibold rounded-lg">
              {data[index].daatgaliinHuraamj + " тэрбум"}
            </p>
          }
          <div className=" rounded-md mr-4"> Даатгалын хураамж </div>

          {
            <p className="px-4 py-1  bg-blue-500 bg-opacity-30 text-blue-500 font-semibold rounded-lg">
              {data[index2].daatgaliinHuraamj + " тэрбум"}
            </p>
          }
        </div>
        <div className="flex justify-between items-center mt-4 text-white">
          {
            <p className="px-4 py-1  bg-indigo-500 bg-opacity-30 text-indigo-500 font-semibold rounded-lg">
              {data[index].nohonTolbor + " тэрбум"}
            </p>
          }
          <div className=" rounded-md mr-4"> Нөхөн төлбөр </div>

          {
            <p className="px-4 py-1  bg-indigo-500 bg-opacity-30 text-indigo-500 font-semibold rounded-lg">
              {data[index2].nohonTolbor + " тэрбум"}
            </p>
          }
        </div>
        <div className="flex justify-between items-center mt-4 text-white">
          {
            <p className="px-4 py-1  bg-purple-500 bg-opacity-30 text-purple-400 font-semibold rounded-lg">
              {data[index].niitHorongo + " тэрбум"}
            </p>
          }
          <div className=" rounded-md mr-4"> Нийт хөрөнгө </div>

          {
            <p className="px-4 py-1  bg-purple-500 bg-opacity-30 text-purple-400 font-semibold rounded-lg">
              {data[index2].niitHorongo + " тэрбум"}
            </p>
          }
        </div>
        <div className="flex justify-between items-center mt-4 text-white">
          {
            <p className="px-4 py-1  bg-pink-400 bg-opacity-30 text-pink-400 font-semibold rounded-lg">
              {data[index].tseverAshig + " тэрбум"}
            </p>
          }
          <div className=" rounded-md mr-4"> Цэвэр ашиг </div>

          {
            <p className="px-4 py-1  bg-pink-400 bg-opacity-30 text-pink-400 font-semibold rounded-lg">
              {data[index2].tseverAshig + " тэрбум"}
            </p>
          }
        </div>
        <div className="flex justify-between items-center mt-4 text-white">
          {
            <p className="px-4 py-1  bg-pink-300 bg-opacity-30 text-pink-300 font-semibold rounded-lg">
              {data[index].NootsSan + " тэрбум"}
            </p>
          }
          <div className=" rounded-md mr-4"> Нөөц сан </div>

          {
            <p className="px-4 py-1  bg-pink-300 bg-opacity-30 text-pink-300 font-semibold rounded-lg">
              {data[index2].NootsSan + " тэрбум"}
            </p>
          }
        </div>
      </div>
    </Container>
  );
}

export default Compare;
