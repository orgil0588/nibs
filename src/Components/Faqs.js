import React, { useState } from "react";

function Faqs(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="text-blue-500 font-semibold  md:w-8/12 mx-4 md:mx-auto ">
      <div
        onClick={() => setShow(!show)}
        className="flex cursor-pointer bg-blue-800 bg-opacity-30 px-6  rounded-lg items-center my-4 "
      >
        {show ? (
          
          <div className="text-xl mr-4 my-2">-</div>
        ) : (
          <div className="text-xl mr-4 my-2">+</div>
        )}

        <p> {props.question}</p>
      </div>
      <p className={`${!show ? `hidden` : `block`} ml-8 text-gray-400`}>
        {props.answer}
      </p>
    </div>
  );
}

export default Faqs;
