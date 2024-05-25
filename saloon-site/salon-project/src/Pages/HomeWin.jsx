import React from "react";
import { FaCircle } from "react-icons/fa6";
import img1 from "./img/img1.jpg";

function HomeWin(props) {
  return (
    <>
      <div
          className=" font-playfir flex items-center bg-slate-400
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
                    className=" opacity-40 hover:opacity-100 
                  transition-opacity duration-300 xl:size-8 lg:size-7 md:size-6"
                  />
                </button>
                <button>
                  <FaCircle className="xl:size-8 lg:size-7 md:size-6" />
                </button>
                <button>
                  <FaCircle
                    className="size-8 opacity-40 hover:opacity-100 
                  transition-opacity duration-300 xl:size-8 lg:size-7 md:size-6 "
                  />
                </button>
              </div>
            </div>

            <div
              className=" w-1/2  justify-center items-center 
               xl:h-screen lg:py-32 md:py-20 max-w-screen-md hidden md:flex"
            >
              <img className="w-4/5 rounded-3xl " src={img1} alt="img1" />
            </div>
          {/*-------------------------------mobile view---------------------------*/}  
            <div
              className="bg-cover opacity-100 rounded-3xl mt-10 mb-5 mx-5 md:hidden flex justify-center  items-center text-center size-full min-w-[230px]"
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className="block text-center  justify-center   pt-20 ">
                <h1
                  className=" font-bold text-neutral-700 mt-16 
               text-3xl"
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
               font-bold p-2 px-3 m-2 rounded-xl lg:text-lg md:text-base "
                >
                  BOOK NOW
                </button>

                <div className="m-6 space-x-10">
                  <button>
                    <FaCircle
                      className=" opacity-40 hover:opacity-100 
                  transition-opacity duration-300 xl:size-8 lg:size-7 md:size-6"
                    />
                  </button>
                  <button>
                    <FaCircle className="xl:size-8 lg:size-7 md:size-6" />
                  </button>
                  <button>
                    <FaCircle
                      className=" opacity-40 hover:opacity-100 
                      transition-opacity duration-300 xl:size-8 lg:size-7 md:size-6 "
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
