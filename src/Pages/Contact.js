import React from "react";
import Facebook from "../assets/fb.png";
import Mail from "../assets/mail.png";
import Phone from "../assets/phone.png";
import Location from "../assets/location.png";
import MyComponentMap from "../Components/Map";
function Contact() {
  return (
    <div>
      <MyComponentMap isMarkerShown={true} />
      <div className=" my-10 flex flex-col md:w-8/12 mx-auto   justify-around text-white md:flex-row">
        <div className="md:w-6/12">
          <div className="flex items-center mt-4">
            <img className="mx-4" src={Facebook} alt="fb" />
            <p>
              <a href="/">National Insurances Brokerage Services</a>
            </p>
          </div>
          <div className="flex items-center mt-4">
            <img className="mx-4" src={Mail} alt="mail" />
            <p>
              <a href="/">contact@daatgalzuuch.mn</a>
            </p>
          </div>
        </div>
        <div className="md:w-6/12">
          <div className="flex items-center mt-4">
            <img className="mx-4" src={Phone} alt="phone" />
            <p>
              <a href="/">+976 77443838</a>
            </p>
          </div>
          <div className="flex items-center mt-4">
            <img className="mx-4" src={Location} alt="location" />
            <p>
              <a href="/">
                СБДүүрэг, Их Эзэн Чингис хааны талбай гудамж 8/1, Сити Тауэр
                1001 тоот
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
// <img src={Mail} />
// <img src={Phone} />
// <img src={Location} />
export default Contact;
