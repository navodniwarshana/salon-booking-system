import React from 'react'
import haircut from '../../img/haicut.jpeg'
import { FaCircle } from "react-icons/fa6";

function HairCutSection() {

  const hairCare =    <ul>
  <li>Head Massage</li>
  <li>Beard Styling</li>
  <li>Shampoo & Conditioning</li>
  <li>Hair/Beard Colouring</li>
</ul>;

  return (
    <>
       <div className='bg-black text-white flex flex-col md:flex-row justify-around items-center'>
      <div className="w-full lg:w-1/3 mt-10 flex flex-col justify-center items-center py-10">
        <img className=" rounded-3xl w-3/5 md:w-4/5" src={haircut} alt="img1" />

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

      <div className='w-full lg:w-1/3 flex flex-col items-center lg:items-start'>
        <h2 className=' font-playfir mt-10 mb-7 pr-10 text-center lg:text-left md:text-3xl text-2xl'>Hair Cut & Finish</h2>

        <ul className=' list-disc pl-4 my-2 text-xl md:text-2xl '>
          <li className='my-2'>Head Massage</li>
          <li className='my-2'>Beard Styling</li>
          <li className='my-2'>Shampoo & Conditioning</li>
          <li className='my-2'>Hair/Beard Colouring</li>
        </ul>

        <button
          className="bg-white text-black text-xl font-playfir font-bold p-2 px-3 my-6 rounded-xl lg:text-lg md:text-base"
        >
          BOOK NOW
        </button>
      </div>
    </div>
    </>
   
  )
}

export default HairCutSection