import React, { useState } from "react";

function Faqs(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="text-white md:w-8/12 mx-4 md:mx-auto ">
      <div
        onClick={() => setShow(!show)}
        className="flex cursor-pointer bg-blue-500 px-6  rounded-lg items-center my-4 "
      >
        {show ? (
          <i class="fi fi-rr-minus-small text-xl mr-4 mt-2"></i>
        ) : (
          <i class="fi fi-rr-add text-xl mr-4 mt-2"></i>
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
