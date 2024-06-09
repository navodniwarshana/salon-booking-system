import React, { useEffect, useState } from "react";
import BeardImgSection from "./BeardImgSection";
import breard from "../../img/beard.jpeg"
import { FaCircle } from "react-icons/fa6";
import BookNowBtn from "../../../Components/BookNowBtn";
import { carouse2 } from "../../../Components/carouselimgs";
import AvailableBtn from "../../../Components/AvailableBtn";

function BeardSection(props) {
  const [acttiveImg, setActiveImg] = useState(1);

  const handleNext = () => {
    setActiveImg((acttiveImg + 1) % carouse2.length);
  };
  const handlePrev = () => {
    if (acttiveImg <= 0) {
      setActiveImg(carouse2.length - 1);
    } else {
      setActiveImg(acttiveImg - 1);
    }
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      handleNext();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [acttiveImg]);

  return (
    <>
      <div className="bg-black text-white flex flex-col md:flex-row justify-around items-center">

        <div className=" md:hidden flex "> <BeardImgSection modalVisible={props.modalVisible} content={props.modalContent} /></div>
        
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

         <div className="mr-14 my-4 md:mr-16">
         <AvailableBtn modalVisible={props.modalVisible} content={props.modalContent}   />
          </div>
         
        </div>
    
        <div className="w-full lg:w-1/3 mt-10  flex-col justify-center items-center py-10 hidden md:flex">
        {carouse2.map((item, i) => {
            return (
              <img
                className={` ${
                  acttiveImg === i ? "block" : "hidden"
                } w-4/5 h-96 rounded-3xl transition-opacity duration-300 `}
                src={item.url}
                alt={item.alt}
                key={item.id}
              />
            );
          })}
          {/*<img className="w-4/5 rounded-3xl " src={breard} alt="img1" />*/}

          <div className="m-6 space-x-10 hidden md:flex">
            <button>
              <FaCircle 
              onClick={handlePrev}
              className={`${acttiveImg === 0 ? "opacity-100" : "opacity-40"}
              active:opacity-100 transition-opacity duration-300 xl:w-6 xl:h-6 lg:w-7 lg:h-7 md:w-6 md:h-6`} />
            </button>
            <button>
              <FaCircle
              onClick={handleNext}
              className={`${acttiveImg === 1 ? "opacity-100" : "opacity-40"}
              cursor-none xl:w-6 xl:h-6 lg:w-7 lg:h-7 md:w-6 md:h-6`} />
            </button>
            <button>
              <FaCircle 
              onClick={handleNext}
              className={`${acttiveImg === 2 ? "opacity-100" : "opacity-40"} active:opacity-100 transition-opacity duration-300 xl:w-6 xl:h-6 lg:w-7 lg:h-7 md:w-6 md:h-6`} />
            </button>
          </div>
        </div>
      </div>{props.children}
    </>
  );
}

export default BeardSection;
