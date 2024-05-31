import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";


function Profile() {
  return (
    <div className="">
      <form className="space-y-4 mt-4 p-4 h-auto max-w-md mx-auto bg-gray-600 border-4 border-black rounded-2xl shadow-md">
        <div className="flex justify-between my-4 mx-5 ">
          <button>
            <FaAngleLeft className="w-8 h-8 border-2 bg-white border-black hover:fill-white hover:bg-black rounded-full" />
          </button>

          <h1 className="text-center font-playfir text-white font-bold text-3xl">
            Profile
          </h1>

          <button>
            <IoIosClose className="w-8 h-8 border-2 bg-white border-black hover:fill-white hover:bg-black rounded-full" />
          </button>
        </div>

        <div className="relative py-8">
          <div className="font-itim my-4 mt-10">
            <label
              className="absolute text-white border-1 text-xl pl-6"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8  py-4 px-4 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={"userSname"}
            />
          </div>

          <div className="font-itim my-4">
            <label
              className="absolute text-white border-1 text-xl pl-6"
              htmlFor="age"
            >
              Number
            </label>
            <input
              className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 py-4 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              value={77646366}
            />
          </div>
        </div>
        <div className="flex p-0.5 bg-white items-center justify-center text-center rounded-full  my-10">
          <button
            className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-1/2 rounded-full border-2 border-white
             hover:border-black"
            type="button"
          >
            Reset
          </button>
          <button
            className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-1/2 rounded-full border-2 border-white hover:border-black"
            type="button"
          >
            Save
          </button>
          <button
            className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-1/2 rounded-full border-2 border-white hover:border-black"
            type="button"
          >
            Remove Me
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
