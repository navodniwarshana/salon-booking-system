import React from "react";
import logo from "./img/logo.png";
import {
  FaSquareFacebook,
  FaInstagram,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import {} from "react-icons/fa6";
import BookNowBtn from "../Components/BookNowBtn";

function Footer() {
  const services = [
    "Cut and Hair Care",
    "Head Massage",
    "Beard Styling",
    "Shampoo & Conditioning",
    "Hair/Beard Colouring",
    "Beard Grooming",
    "Beard Trim",
    "Beard Colour",
    "Beard Styling",
    "Shave",
    "Luxury Shave & Beard Spa",
  ];
  return (
    <>
       <div className="bg-black text-white justify-around items-center text-center block md:flex p-4">
      <div className="justify-center items-center mb-8 w-full md:w-2/5 lg:w-1/3 p-4">
        <div className="flex justify-center items-center mb-8">
          <img src={logo} alt="Logo" className="w-32 h-auto" />
        </div>
        <p>
          Salon Inoka - Gent's Hair Salon, nestled in the heart of Dodawatta,
          Deraniyagala, Sri Lanka, is a beacon of style and tradition. For over
          two generations, we've been dedicated to crafting impeccable men's
          grooming experiences, blending classic techniques with modern trends.
          Our heritage of excellence is now infused with a fresh energy, catering
          to the new wave of youth seeking sophistication and style. Step into
          Salon Inoka and discover the epitome of timeless elegance and
          contemporary flair in men's hairstyling.
        </p>
      </div>

      <div className="w-full md:w-2/5 lg:w-1/3 p-4 self-start flex flex-col items-center">
        <h2 className="font-playfir text-2xl font-bold mb-4">Services</h2>
        <div className="w-3/5 h-1 my-2 bg-white md:hidden" />
        <ul className="list-none space-y-1">
          {services.map((service, index) => (
            <li key={index} className="text-md font-itim">
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-[24rem] mx-auto p-4 flex flex-col justify-center items-center w-full md:w-2/5 lg:w-1/3 self-start my-4 md:my-0">
        <h2 className="text-2xl font-playfir font-bold mb-4">Follow Us On</h2>
        <div className="w-full h-1 my-2 bg-white md:hidden" />
        <div className="font-itim flex flex-col justify-center items-center space-y-4">
          <div className="flex items-center space-x-2">
            <FaSquareFacebook className="w-8 h-8 pr-1" />
            <p>Facebook</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaInstagram className="w-8 h-8" />
            <p>Instagram</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaSquareWhatsapp className="w-8 h-8 pr-1" />
            <p>Whatsapp</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/5 lg:w-1/3 p-4 self-start">
  <h2 className="font-playfir font-bold text-2xl mb-4">Opening hours</h2>
  <div className="w-3/5 h-1 my-2 bg-white mx-auto md:hidden" />
  <p className="font-itim">
    We are available <br /> 7 days a week from <br /> 8.30am to 5.30pm
  </p>
  
  <div className="mt-2 md:mt-10"><BookNowBtn/></div>
</div>

    </div>
    </>
  );
}

export default Footer;
