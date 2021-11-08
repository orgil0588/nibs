import React from "react";

function Title(props) {
  return (
    <p
      className={`
  text-${props.color} 
  text-3xl font-semibold mt-40
     `}
    >
      {props.text}
    </p>
  );
}

export default Title;
