import React from "react";
import Feature from "../assets/feature-1.png";
function Features(props) {
  return (
    <div className="flex mx-4 mb-8  items-center ">
      <img className="w-14 h-14 mr-4" src={props.img} />
      <p className="text-gray-500 ">
        <span className="text-semibold text-white mr-2">{props.highlight}</span>
        {props.text}
      </p>
    </div>
  );
}

export default Features;
