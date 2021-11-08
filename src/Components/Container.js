import React from "react";

function Container(props) {
  return (
    <div className="px-4 mx-auto md:px-12 lg:max-w-7xl">{props.children}</div>
  );
}

export default Container;
