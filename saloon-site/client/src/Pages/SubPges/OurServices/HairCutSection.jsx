import React, { useEffect, useState } from "react";
import haircut from "../../img/haicut.jpeg";
import { FaCircle } from "react-icons/fa6";
import BookNowBtn from "../../../Components/BookNowBtn";
import { carouse2 } from "../../../Components/carouselimgs";

function HairCutSection(props) {
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
        <div className="w-full lg:w-1/3 mt-10 flex flex-col justify-center items-center py-10">
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
          {/*<img className=" rounded-3xl w-3/5 md:w-4/5" src={haircut} alt="img1" />
           */}
          <div className="m-6 space-x-10 flex">
            <button>
              <FaCircle
                onClick={handlePrev}
                className={`${
                  acttiveImg === 0 ? "opacity-100" : "opacity-40"
                }  active:opacity-100 transition-opacity duration-300 xl:w-6 xl:h-6 lg:w-7 lg:h-7 md:w-6 md:h-6`}
              />
            </button>
            <button>
              <FaCircle
                className={`${acttiveImg === 1 ? "opacity-100" : "opacity-40"}
            cursor-none xl:w-6 xl:h-6 lg:w-7 lg:h-7 md:w-6 md:h-6`}
              />
            </button>
            <button>
              <FaCircle
                onClick={handleNext}
                className={`${acttiveImg === 2 ? "opacity-100" : "opacity-40"}
                active:opacity-100 transition-opacity duration-300 xl:w-6 xl:h-6 lg:w-7 lg:h-7 md:w-6 md:h-6`}
              />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
          <h2 className=" font-playfir mt-10 mb-7 pr-10 text-center lg:text-left md:text-3xl text-2xl">
            Hair Cut & Finish
          </h2>

          <ul className=" list-disc pl-4 my-2 text-xl md:text-2xl ">
            <li className="my-2">Head Massage</li>
            <li className="my-2">Beard Styling</li>
            <li className="my-2">Shampoo & Conditioning</li>
            <li className="my-2">Hair/Beard Colouring</li>
          </ul>

          <BookNowBtn modalVisible={props.modalVisible} content={props.modalContent} />
        </div>
      </div>{props.children}
    </>
  );
}

export default HairCutSection;
