import React from 'react'
import breard from "../../img/beard.jpeg"
import { FaCircle } from "react-icons/fa6";

function BeardImgSection() {2
  return (
   
     <div className="w-full lg:w-1/3 mt-10 flex flex-col justify-center items-center py-10">
          <img className="w-4/5 rounded-3xl" src={breard} alt="img1" />

          <div className="m-6 space-x-10 flex">
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
    
  )
}

export default BeardImgSection