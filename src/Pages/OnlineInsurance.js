import React, { useState } from "react";
import axios from "axios";
import Container from "../Components/Container";
import Button from "../Components/Button";
function OnlineInsurance() {
  const [registerWeb, setRegisterWeb] = useState(null);
  const [stateNumberWeb, setStateNumberWeb] = useState(null);
  const [error, setError] = useState(null);
  const [checkInsurace, setCheckInsurance] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    const secretKey = btoa(
      `${process.env.REACT_APP_BASIC_AUTH_USERNAME}:${process.env.REACT_APP_BASIC_AUTH_PASSWORD}`
    );

    if (registerWeb === null || stateNumberWeb === null) {
      setError("РД эсвэл автомашины улсын дугаараа зөв оруулна уу");
      setRegisterWeb("");
      setStateNumberWeb("");
    } else if (registerWeb.length !== 8 || stateNumberWeb.length !== 7) {
      setError("РД эсвэл автомашины улсын дугаараа зөв оруулна уу");
      setRegisterWeb("");
      setStateNumberWeb("");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_REST_API}/check_insurance`,

          new URLSearchParams({
            register: registerWeb,
            stateNumber: stateNumberWeb,
          }),
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded",

              Authorization: `Basic ${secretKey}`,
            },
          }
        )

        .then((result) =>
          setCheckInsurance(
            result.data.failureMessages.message[0].failureMessage
          )
        )
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="h-screen">
      <Container>
        {error && <div className="mx-4 text-red-400">{error}</div>}
        {checkInsurace !== "" ? (
          <div className="text-center mt-10 text-gray-100 font-bold">
            {checkInsurace}
          </div>
        ) : (
          <form className="flex flex-col mt-10 text-white mx-4 md:w-8/12 md:mx-auto ">
            <label className="mt-4">Регистрийн дугаар</label>
            <input
              placeholder="РД12345678"
              className="p-2 bg-transparent border border-gray-800 rounded-lg text-gray-600 placeholder-gray-600 "
              type="text"
              onChange={(e) => {
                setRegisterWeb(e.target.value.trim());
                setError(null);
              }}
            />
            <label className="mt-4">Тээврийн хэрэгслийн улсын дугаар</label>
            <input
              placeholder="1234УУД"
              className="p-2 bg-transparent border border-gray-800 rounded-lg text-gray-600 placeholder-gray-600 "
              type="text"
              onChange={(e) => {
                setStateNumberWeb(e.target.value.trim());
                setError(null);
              }}
            />
            <div className="mt-4" onClick={submitHandler}>
              <Button
                color="blue-600"
                hover="bg-blue-800"
                text="Үргэлжлүүлэх"
              />
            </div>
          </form>
        )}
      </Container>
    </div>
  );
}

export default OnlineInsurance;
