import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

function Login({ setWinVisible }) {
  const handleClick = (action) => {
    if (action === "forgotPassword") {
      setWinVisible(2); // Show ResetPassword component
    } else if (action === "SignUp") {
      setWinVisible(0); // Show SignUp component
    } else if (action === "GoBack") {
      setWinVisible(-1); // Close the modal
    } else if (action === "CloseWin") {
      setWinVisible(-1); // Close the modal
    } else if (action === "LoginTOProfile") {
      setWinVisible(3); // Show Profile component
    }
  };

  return (
    <div className="block">
      <form className="space-y-4 mt-4 p-4 max-w-md mx-auto bg-black opacity-75 border-4 rounded-2xl md:border-black shadow-md">
        <div className="flex justify-between my-4 mx-5">
          <button type="button" onClick={() => handleClick("GoBack")}>
            <FaAngleLeft className="w-8 h-8 border-2 bg-black border-white fill-white hover:border-white hover:fill-black hover:bg-white rounded-full" />
          </button>
          <h1 className="text-center font-playfir text-white font-bold text-2xl">
            Log In
          </h1>
          <button type="button" onClick={() => handleClick("CloseWin")}>
            <IoIosClose className="w-8 h-8 border-2 bg-black border-white fill-white hover:border-white hover:fill-black hover:bg-white rounded-full" />
          </button>
        </div>
        <div className="relative py-8">
          <div className="font-itim my-4 mt-20">
            <label
              className="absolute text-white border-1 text-xl pl-6"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter Your Username"
            />
          </div>
          <div className="font-itim">
            <label
              className="absolute text-white border-1 text-xl pl-6"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter Your Password"
            />
            <div className="flex items-center justify-center text-center rounded-full p-1 my-4">
              <button
                onClick={() => handleClick("LoginTOProfile")}
                className="bg-black cursor-pointer hover:bg-white text-white hover:text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-1/2 rounded-full border-2 border-white"
                type="button"
              >
                Log In
              </button>
            </div>
            <div className="text-white text-center">
              <p
                onClick={() => handleClick("forgotPassword")}
                className="mt-8 text-lg hover:text-xl hover:font-bold active:underline cursor-pointer"
              >
                Forgot Password
              </p>
              <br />
              <p
                onClick={() => handleClick("SignUp")}
                className=" text-lg hover:text-xl hover:font-bold active:underline cursor-pointer"
              >
                Sign Up
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;