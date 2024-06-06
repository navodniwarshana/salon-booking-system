import React, { useState } from "react";
import { FaCircle,FaAngleLeft} from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";




function AddBooking() {
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

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const closeTime ="03.30 PM";

  return (
    <>
      <div className="font-playfir">
     
 
        <form className="space-y-4 mt-4 p-4 max-w-md mx-auto bg-black opacity-75 border-4 rounded-2xl md:border-black shadow-md">
        <div className="flex justify-between my-4 mx-5">
          <button>
            <FaAngleLeft className="w-8 h-8 border-2 bg-black border-white fill-white hover:border-white hover:fill-black hover:bg-white rounded-full" />
          </button>

          <h1 className="text-center font-playfir text-white font-bold text-2xl">New Appointment</h1>

          <button>
         
            <IoIosClose className="w-8 h-8 border-2 bg-black border-white fill-white hover:border-white hover:fill-black hover:bg-white rounded-full" />
          </button>
        </div>
              <div className="relative">
                {formData.name && (
                  <label
                    className="absolute text-black  text-lg font-bold pl-4  mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                )}
                <input
                  className="shadow appearance-none border-2 border-black  rounded-full w-full my-4 py-2 px-3 text-gray-700 placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                {formData.age && (
                  <label
                    className="absolute text-gray-700 text-lg pl-4  font-bold  mb-2"
                    htmlFor="age"
                  >
                    Age
                  </label>
                )}
                <input
                  className="shadow appearance-none border-2 border-black  rounded-full w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="age"
                  type="text"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                {formData.service && (
                  <label
                    className="absolute text-gray-700 text-lg  font-bold  pl-4 mb-2"
                    htmlFor="service"
                  >
                    Service Type
                  </label>
                )}
                <select
                  className="shadow appearance-none border-2 border-black  rounded-full w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                {formData.date && (
                  <label
                    className="absolute text-gray-700 text-lg pl-4 font-bold mb-2"
                    htmlFor="date"
                  >
                    Preferred Date
                  </label>
                )}
                <input
                  className="shadow appearance-none border-2 border-black  rounded-full w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                {formData.time && (
                  <label
                    className="absolute text-gray-700 text-lg pl-4 font-bold mb-2"
                    htmlFor="time"
                  >
                    Preferred Time
                  </label>
                )}
                <select
                  className="shadow appearance-none border-2 border-black  rounded-full w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select time
                  </option>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
              <div className="flex items-center justify-between rounded-full bg-black p-1 my-4">
                <button
                  className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded-full border-2 border-white "
                  type="button"
                >
                  Booking Appointment
                </button>
                
              </div>
              <div className="flex text-start justify-center"> 
                <button className="bg-black flex font-itim p-3 px-6 rounded-3xl">
                  <span><p className="text-green-600 text-start">Available Now </p>
                   <p className="text-red-600 text-start">Close at {closeTime} </p></span> 
                   <span><FaCircle className="fill-green-600 size-6"/></span>
                </button>
              </div>
             
            </form>
      </div>



    </>
  );
}
export default AddBooking;
