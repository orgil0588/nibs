import React from "react";
import { Link } from "react-router-dom";
function Button(props) {
  return (
    <button
      onClick={props.fn}
      className={`text-white px-4 py-2 bg-${props.color} rounded-md mx-auto my-2 lg:mx-0 lg:mr-4 hover:${props.hover} duration-300 ease-out border-transparent border w-full`}
    >
      <Link to={props.link}>{props.text}</Link>
    </button>
  );
}

export default Button;
