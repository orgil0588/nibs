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

  console.log(dt, nt, nh, ta, ns);
  return (
    <div className="flex w-10/12 mx-auto h-60 justify-evenly" ref={ref}>
      <div className="flex items-end">
        <div
          className={`bg-blue-500 w-4 mx-4`}
          style={{ height: `${(offset / 100) * dt}px` }}
        ></div>
        <div
          className="bg-blue-500 w-4 mx-4"
          style={{ height: `${(offset / 100) * nt}px` }}
        ></div>
        <div
          className="bg-blue-600 w-4 mx-4"
          style={{ height: `${(offset / 100) * nh}px` }}
        ></div>
        <div
          className="bg-blue-700 w-4 mx-4"
          style={{ height: `${(offset / 100) * ta}px` }}
        ></div>
        <div
          className="bg-blue-900 w-4 mx-4"
          style={{ height: `${(offset / 100) * ns}px` }}
        ></div>
      </div>
      <div className="flex items-end">
        <div
          className={`bg-blue-500 w-4 mx-4`}
          style={{ height: `${(offset / 100) * dt2}px` }}
        ></div>
        <div
          className="bg-blue-500 w-4 mx-4"
          style={{ height: `${(offset / 100) * nt2}px` }}
        ></div>
        <div
          className="bg-blue-600 w-4 mx-4"
          style={{ height: `${(offset / 100) * nh2}px` }}
        ></div>
        <div
          className="bg-blue-700 w-4 mx-4"
          style={{ height: `${(offset / 100) * ta2}px` }}
        ></div>
        <div
          className="bg-blue-900 w-4 mx-4"
          style={{ height: `${(offset / 100) * ns2}px` }}
        ></div>
      </div>
    </div>
  );
}

export default Chart;
