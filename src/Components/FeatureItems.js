import React from "react";
import Feature1 from "../assets/feature-1.png";
import Feature2 from "../assets/feature-2.png";
import Feature3 from "../assets/feature-3.png";
import Feature4 from "../assets/feature-4.png";
import Features from "./Features";
function FeatureItems() {
  return (
    <div className="w-full mx-auto mt-10 ">
      <div className="flex items-center justify-center flex-col lg:flex-row ">
        <Features
          img={Feature1}
          highlight="Даатгуулах бүрт бэлэгтэй:"
          text="  Даатгалын хураамжаас хамаарч Гүүдсек ҮЦК-д данс нээлгэх эрх, Монос
        Группийн хувьцаа худалдан авах эрх, Хүртэээмжтэй Хөгжил Санаачилга ХЗХ-д
        хадгаламж нээж өгөх"
        />
        <Features
          img={Feature2}
          highlight="Бүрэн цахимжсан:"
          text=" Хэрэглэгч гар утас, таблет зэрэг ухаалаг хэрэгслийг ашиглан хамгийн хурдан шуурхай, найдвартай, хялбар аргаар даатгуулах боломжтой. "
        />
      </div>
      <div className="flex items-center justify-center flex-col lg:flex-row ">
        <Features
          img={Feature3}
          highlight="Хэрэглэгч төвт үйлчилгээ: "
          text="Хэрэглэгчийн хэрэгцээ шаардлагаас хамааран даатгалын үйлчилгээг ялгаатай хэлбэрээр хүргэх боломжтой."
        />
        <Features
          img={Feature4}
          highlight="Төлбөрийн уян хатан нөхцөл: "
          text="Хэрэглэгч бүх төрлийн төлбөрийн системээр төлбөр төлөх боломжтой."
        />
      </div>
    </div>
  );
}

export default FeatureItems;
