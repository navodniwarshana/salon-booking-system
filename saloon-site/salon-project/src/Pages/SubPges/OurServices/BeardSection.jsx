import React from "react";
import BeardImgSection from "./BeardImgSection";
import breard from "../../img/beard.jpeg"
import { FaCircle } from "react-icons/fa6";
import BookNowBtn from "../../../Components/BookNowBtn";

function BeardSection() {
  return (
    <>
      <div className="bg-black text-white flex flex-col md:flex-row justify-around items-center">

        <div className=" md:hidden flex "> <BeardImgSection/></div>
        
        <div className="w-full lg:w-1/3 flex flex-col items-center pl-16 lg:items-start">
          <h2 className=" font-playfir mt-10 mb-7 pr-10 text-center lg:text-left md:text-3xl text-2xl">
            Beard Trim
          </h2>

          <ul className=" list-disc pl-4 my-2 text-lg md:text-2xl ">
            <li className="my-2">Beard Colour</li>
            <li className="my-2">Beard Styling</li>
            <li className="my-2">Shave</li>
            <li className="my-2">Luxury Shave & Beard Spa</li>
          </ul>

         <div className="mr-0 md:mr-16"> <BookNowBtn/></div>
         
        </div>
    
        <div className="w-full lg:w-1/3 mt-10  flex-col justify-center items-center py-10 hidden md:flex">
          <img className="w-4/5 rounded-3xl " src={breard} alt="img1" />

          <div className="m-6 space-x-10 hidden md:flex">
            <button>
              <FaCircle className="opacity-40 hover:opacity-100 transition-opacity duration-300 xl:w-6 xl:h-6 lg:w-7 lg:h-7 md:w-6 md:h-6" />
            </button>
            <button>
              <FaCircle className="xl:w-6 xl:h-6 lg:w-7 lg:h-7 md:w-6 md:h-6" />
            </button>
            <button>
              <FaCircle className="opacity-40 hover:opacity-100 transition-opacity duration-300 xl:w-6 xl:h-6 lg:w-7 lg:h-7 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeardSection;
