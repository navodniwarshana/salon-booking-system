import React from 'react'
import { FaAngleLeft,FaCircle } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

function MyAppointments() {
  return (
    <div className="font-itim space-y-4 my-4 p-4  text-white max-w-md mx-auto bg-gray-600 border-4 border-black rounded-xl ">
        <div className="flex justify-around">
          <button>
            <FaAngleLeft className="w-8 h-8 border-2 bg-black border-white hover:fill-black hover:bg-white  rounded-full" />
          </button>

          <h1 className="text-center text-2xl font-playfir">My Appointments</h1>
          <button>
           
            <IoIosClose className="w-8 h-8 border-2 bg-black border-white hover:fill-black hover:bg-white  rounded-full" />
          </button>
        </div>
        <div>
        <div className="text-center justify-center text-white block my-4">
          <ul>
            <li>text from add booking</li>
            <li className="mb-2">text from add booking</li>
            <li>text from add booking</li>

            <li className="mb-2">text from add booking</li>
            <li>text from add booking</li>
            <li>text from add booking</li>
          </ul>
          <div className='w-full h-1 my-4 bg-white'></div>
        </div>
        
        <div className="text-center block my-4">
          <ul>
            <li>text from add booking</li>
            <li className="mb-2">text from add booking</li>
            <li>text from add booking</li>

            <li className="mb-2">text from add booking</li>
            <li>text from add booking</li>
            <li>text from add booking</li>
          </ul>
          <div className='w-full h-1 my-4 bg-white'></div>
        </div>
        <div className="flex text-start justify-center"> 
                <button className="bg-black flex font-itim p-3 px-6 rounded-3xl">
                  <span><p className="text-green-600 text-start pr-2 ">Available Now </p>
                   <p className="text-red-600 text-start">Close at {3.30} </p></span> 
                   <span><FaCircle className="fill-green-600 size-6"/></span>
                </button>
              </div>
        <div className="flex items-center justify-between rounded-full bg-black p-1 my-4">
                
                <button
                  className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded-full border-2 border-white "
                  type="button"
                >
                  Booking Appointment
                </button>
              </div>
              
        </div>
    </div>
  )
}

export default MyAppointments