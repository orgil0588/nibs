import Navbar from "../Components/Header/Navbar";
import Container from "../Components/Container";
import HeroImgXs from "../assets/Hero-xs.png";
import HeroImgMd from "../assets/hero-md.png";
import HeroImgLg from "../assets/hero-lg.png";
import Title from "../Components/Title";
import Button from "../Components/Button";
import HeroSwipeImage from "../Components/HeroSwipeImage";
import FeatureItems from "../Components/FeatureItems";
import data from "../fakejson/news.json";
import NewsItems from "../Components/NewsItems";
import Faqs from "../Components/Faqs";
import ContactInfo from "../Components/ContactInfo";
import ContactForm from "../Components/ContactForm";
function App() {
  function fnc() {
    console.log("propsoor damjsan function");
  }
  let newsArr = [];
  for (let i = 0; i < 6; i++) {
    newsArr.push(data[i]);
  }

  console.log(fnc);
  return (
    <div>
      <Navbar />
      <Container>
        <main className="w-full flex flex-col lg:flex-row lg:mt-14 ">
          <div className="lg:w-6/12 mx-auto">
            <h1 className="text-white text-3xl text-center font-semibold mt-7 w-8/12 mx-auto md:text-5xl  lg:text-left lg:w-full lg:leading-normal">
              Цахим даатгал зуучлалын систем
            </h1>
            <p
              className="text-gray-400 text-center mx-auto mt-4 mb-8 font-lg md:w-8/12 lg:text-left lg:w-8/12
            lg:mx-0 lg:leading-normal lg:text-lg "
            >
              Бид даатгалын үйлчилгээний хүртээмжийг нэмэгдүүлэх, өртгийг
              бууруулж, шуурхай найдвартай үйлчилгээг харилцагчдад хүргэх
              зорилготой...
            </p>
            <div className="flex flex-col items-center lg:flex-row lg:justify-start">
              <Button
                fn={fnc}
                color="blue-500"
                hover="bg-blue-700"
                text="Цахим даатгал"
              />
              <Button hover="border-blue-500" text="Даатгалын статистик" />
            </div>
          </div>

          <img
            className="mx-auto w-10/12 md:max-w-lg  lg:w-full"
            src={HeroImgXs}
            srcSet={`${HeroImgXs} 300w, ${HeroImgMd} 642w, ${HeroImgLg} 1280w`}
          />
        </main>
        <div className="my-20 md:my-32 lg:my-40">
          <HeroSwipeImage />
        </div>
        <section>
          <Title text="Бидний тухай" color="blue-500" />
          <FeatureItems />
        </section>
        <div className="flex justify-between items-center">
          <Title text="Мэдээ мэдээлэл" color="blue-500" />
          <a href="/news" className="mr-4 mt-40">
            <Button
              fn={fnc}
              color="blue-500"
              hover="bg-blue-700"
              text="Бүх мэдээг үзэх"
            />
          </a>
        </div>

        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 ">
          {newsArr.map((e) => {
            return (
              <NewsItems
                imgUrl={e.img}
                title={e.title}
                date={e.date}
                url={e.url}
              />
            );
          })}
        </div>
        <Title text="Түгээмэл асуулт хариулт" color="blue-500" />
        <Faqs question="Асуулт 1" answer="хариулт 1" />
        <Faqs question="Асуулт 1" answer="хариулт 1" />
        <Faqs question="Асуулт 1" answer="хариулт 1" />
        <Faqs question="Асуулт 1" answer="хариулт 1" />
        <Faqs question="Асуулт 1" answer="хариулт 1" />
        <Title text="Холбоо барих" color="blue-500" />
        <ContactInfo />
        <ContactForm />
      </Container>
    </div>
  );
}

export default App;
