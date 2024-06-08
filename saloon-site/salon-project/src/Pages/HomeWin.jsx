import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa6";
import img1 from "./img/img1.jpg";
import { carouselimgs } from "../Components/carouselimgs";
import ReactModal from "react-modal";
import BookNowBtn from "../Components/BookNowBtn";

function HomeWin(props) {
  const [acttiveImg, setActiveImg] = useState(1);

  const handleNext = () => {
    setActiveImg((acttiveImg + 1) % carouselimgs.length);
  };
  const handlePrev = () => {
    if (acttiveImg <= 0) {
      setActiveImg(carouselimgs.length - 1);
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
      <div
        className=" font-playfir flex items-center bg-white
        justify-center xl:h-5/6 lg:4/6 "
      >
        <div className="w-1/2 text-center  justify-center  p-5 py-5 hidden md:block">
          <h1
            className=" font-bold text-neutral-700 m-3 
              xl:text-6xl lg:text-5xl md:text-4xl"
          >
            SALON INOKA
          </h1>
          <h2
            className=" font-bold text-neutral-700
              xl:text-4xl lg:text-3xl md:text-2xl "
          >
            Where Your Hair <br /> Dreams Come True
          </h2>
          <button
            className="bg-black text-white text-xl font-playfir
               font-bold p-2 px-3 m-4 rounded-xl lg:text-lg md:text-base "
          >
            BOOK NOW
          </button>

          <div className="m-6 space-x-10">
            <button>
              <FaCircle
                onClick={handlePrev}
                className={`${
                  acttiveImg === 0 ? "opacity-100" : "opacity-40"
                }  active:opacity-100 
                  transition-opacity duration-300 xl:size-8 lg:size-7 md:size-6`}
              />
            </button>
            <button>
              <FaCircle
                className={` ${
                  acttiveImg === 1 ? "opacity-100" : "opacity-40"
                } transition-opacity duration-300 cursor-none active:opacity-100 xl:size-8 lg:size-7 md:size-6`}
              />
            </button>
            <button>
              <FaCircle
                onClick={handleNext}
                className={`${
                  acttiveImg === 2 ? "opacity-100" : "opacity-40"
                }  active:opacity-100 
                transition-opacity duration-300  xl:size-8 lg:size-7 md:size-6`}
              />
            </button>
          </div>
        </div>

        <div
          className=" w-1/2  justify-center items-center 
               xl:h-screen lg:py-32 md:py-20 max-w-screen-md hidden md:flex"
        >
          {carouselimgs.map((item, i) => {
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
          {/*<img className="w-4/5 rounded-3xl " src={img1} alt="img1" />*/}
        </div>
        {/*-------------------------------mobile view---------------------------*/}

        <div
          className="bg-cover  rounded-3xl mt-10 mb-5 mx-5 md:hidden flex justify-center  items-center text-center size-full min-w-[230px]"
          
          style={{ backgroundImage: `url(${carouselimgs[acttiveImg].url})` }}
        >
          <div
            className=" block text-center  justify-center text-white  pt-20 "
            style={{
              textShadow: `
                  1px 1px 0 #000000, 
                  -1px -1px 0 #000000, 
                  -1px 1px 0 #000000, 
                  1px -1px 0 #000000,
                  1px 0 0 #000000, 
                  0 1px 0 #000000, 
                  -1px 0 0 #000000, 
                  0 -1px 0 #000000
                `,
            }}
          >
            <h1
              className=" font-bold py-4 mt-16 
               text-3xl"
            >
              SALON INOKA
            </h1>
            <h2
              className=" font-bold py-4
              xl:text-4xl lg:text-3xl md:text-2xl "
            >
              Where Your Hair <br /> Dreams Come True
            </h2>
            <BookNowBtn modalVisible={props.modalVisible} />{" "}
            {/* Pass modalVisible as a prop */}
            <div className="m-6 space-x-10">
              <button>
                <FaCircle
                  onClick={handlePrev}
                  className={`${
                    acttiveImg === 0 ? "opacity-100" : "opacity-40"
                  }  hover:opacity-100
                  transition-opacity duration-300 xl:size-8 lg:size-7 md:size-6`}
                />
              </button>
              <button>
                <FaCircle
                  className={`${
                    acttiveImg === 1 ? "opacity-100" : "opacity-40"
                  } cursor-none xl:size-8 lg:size-7 md:size-6`}
                />
              </button>
              <button>
                <FaCircle
                  onClick={handleNext}
                  className={`${
                    acttiveImg === 2 ? "opacity-100" : "opacity-40"
                  }  hover:opacity-100 
                      transition-opacity duration-300 xl:size-8 lg:size-7 md:size-6 `}
                />
              </button>
            </div>
          </div>
        </div>
        {props.children}
      </div>

      {/*----------------------------------------------------------------------*/}
    </>

    ///------------
  );
}

export default HomeWin;
