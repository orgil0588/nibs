import React, { useRef, useState, useEffect } from "react";
import data from "../fakejson/compare.json";
function Chart(props) {
  const ref = useRef();

  const [offset, setoffSet] = useState();
  useEffect(() => {
    setoffSet(ref.current.offsetHeight);
  }, []);

  let index = props.index;
  let index2 = props.index2;
  let dt = data[index].daatgaliinHuraamj;
  let nt = data[index].nohonTolbor;
  let nh = data[index].niitHorongo;
  let ta = data[index].tseverAshig;
  let ns = data[index].NootsSan;
  let dt2 = data[index2].daatgaliinHuraamj;
  let nt2 = data[index2].nohonTolbor;
  let nh2 = data[index2].niitHorongo;
  let ta2 = data[index2].tseverAshig;
  let ns2 = data[index2].NootsSan;


  return (
    <div className="flex  mx-auto h-60 justify-evenly" ref={ref}>
      <div className="flex items-end">
        <div
          className={`bg-blue-500 w-8 mx-1`}
          style={{ height: `${(offset / 100) * dt * 1.7}px` }}
        ></div>
        <div
          className="bg-indigo-500 w-8 mx-1"
          style={{ height: `${(offset / 100) * nt * 1.7}px` }}
        ></div>
        <div
          className="bg-purple-500 w-8 mx-1"
          style={{ height: `${(offset / 100) * nh * 1.7}px` }}
        ></div>
        <div
          className="bg-pink-400 w-8 mx-1"
          style={{ height: `${(offset / 100) * ta * 1.7}px` }}
        ></div>
        <div
          className="bg-pink-300 w-8 mx-1"
          style={{ height: `${(offset / 100) * ns * 1.7}px` }}
        ></div>
      </div>
      <div className="flex items-end">
        <div
          className={`bg-blue-500 w-8 mx-1`}
          style={{ height: `${(offset / 100) * dt2 * 1.7}px` }}
        ></div>
        <div
          className="bg-indigo-500 w-8 mx-1"
          style={{ height: `${(offset / 100) * nt2 * 1.7}px` }}
        ></div>
        <div
          className="bg-purple-600 w-8 mx-1"
          style={{ height: `${(offset / 100) * nh2 * 1.7}px` }}
        ></div>
        <div
          className="bg-pink-400 w-8 mx-1"
          style={{ height: `${(offset / 100) * ta2 * 1.7}px` }}
        ></div>
        <div
          className="bg-pink-300 w-8 mx-1"
          style={{ height: `${(offset / 100) * ns2 * 1.7}px` }}
        ></div>
      </div>
    </div>
  );
}

export default Chart;
