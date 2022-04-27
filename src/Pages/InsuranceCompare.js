import React, { useState } from "react";
import Statistic from "../Components/Statisctic";
import Container from "../Components/Container";
import Compare from "../Components/Compare";
function InsuranceCompare() {
  const [showComp, setShowComp] = useState(0);

  return (
    <div className="h-screen">
      <Container>
        <div className="mt-4  text-gray-400">
          Даатгалын компаниудын санхүүгийн үзүүлэлт (2020 он)
        </div>
        <div className="flex justify-between my-12  ">
          <button
            className={`py-2 px-4 rounded-lg ${
              showComp === 0
                ? `bg-blue-500 text-white`
                : "bg-transparent border border-blue-500 text-blue-500"
            } `}
            onClick={() => setShowComp(0)}
          >
            Даатгалын статистик
          </button>
          <button
            className={`py-2 px-4 rounded-lg mr-4 ${
              showComp === 1
                ? `bg-blue-500 text-white`
                : "bg-transparent border border-blue-500 text-blue-500"
            } `}
            onClick={() => setShowComp(1)}
          >
            Харьцуулах
          </button>
        </div>
        {showComp === 0 ? <Statistic /> : <Compare />}
      </Container>
    </div>
  );
}

export default InsuranceCompare;
