import React from "react";
import Facebook from "../assets/fb.png";
import Mail from "../assets/mail.png";
import Phone from "../assets/phone.png";
import Location from "../assets/location.png";
function ContactInfo() {
  return (
    <div className="flex flex-col md:w-8/12 mx-auto   justify-around text-white md:flex-row">
      <div className="md:w-6/12">
        <div className="flex items-center mt-4">
          <img className="mx-4" src={Facebook} />
          <p>
            <a href="/">National Insurances Brokerage Services</a>
          </p>
        </div>
        <div className="flex items-center mt-4">
          <img className="mx-4" src={Mail} />
          <p>
            <a href="/">contact@nibs.mn</a>
          </p>
        </div>
      </div>
      <div className="md:w-6/12">
        <div className="flex items-center mt-4">
          <img className="mx-4" src={Phone} />
          <p>
            <a href="/">+976 70707070</a>
          </p>
        </div>
        <div className="flex items-center mt-4">
          <img className="mx-4" src={Location} />
          <p>
            <a href="/">
              СБДүүрэг, Их Эзэн Чингис хааны талбай гудамж 8/1, Сити Тауэр 1002
              тоот
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
// <img src={Mail} />
// <img src={Phone} />
// <img src={Location} />
export default ContactInfo;