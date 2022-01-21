import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Container from "../Components/Container";
import Button from "../Components/Button";
function OnlineInsurance() {
  const [registerWeb, setRegisterWeb] = useState(null);
  const [stateNumberWeb, setStateNumberWeb] = useState(null);
  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const secretKey = btoa(
      `${process.env.REACT_APP_BASIC_AUTH_USERNAME}:${process.env.REACT_APP_BASIC_AUTH_PASSWORD}`
    );
    console.log(secretKey);
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
        console.log(result.data.failureMessages.message[0].failureMessage)
      )
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Container>
        {error && <div className="mx-4 text-red-400">{error}</div>}
        <form className="flex flex-col text-white mx-4">
          <label>Регистрийн дугаар</label>
          <input
            className="p-2 bg-transparent border border-gray-800 rounded-lg text-gray-600  "
            type="text"
            onChange={(e) => {
              setRegisterWeb(e.target.value.trim());
              setError(null);
            }}
          />
          <label>Тээврийн хэрэгслийн улсын дугаар</label>
          <input
            className="p-2 bg-transparent border border-gray-800 rounded-lg text-gray-600  "
            type="text"
            onChange={(e) => {
              setStateNumberWeb(e.target.value.trim());
              setError(null);
            }}
          />
          <div className="" onClick={submitHandler}>
            <Button color="blue-600" hover="bg-blue-800" text="Үргэлжлүүлэх" />
          </div>
        </form>
      </Container>
    </div>
  );
}

export default OnlineInsurance;
