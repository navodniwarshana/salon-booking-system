import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

function SignUp({ setWinVisible }) {

  const [username, setUsername] = useState("");
  const [usernameAvailable, setUsernameAvailable] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  // Mock function to check username availability
  const checkUsernameAvailability = () => {
    // Mock check, replace with actual API call
    setUsernameAvailable(username !== "takenusername");
  };

  const handleClick = (action) => {
    if (action === "forgotPassword") {
      setWinVisible(2); // Show ResetPassword component
  
    } else if (action === "logIn") {
      setWinVisible(1); // Show SignUp component
    }
     else if (action === "GoBack") {
      setWinVisible(1); // Show SignUp component
    }
     else if (action === "CloseWin") {
      setWinVisible(-1); // Show SignUp component
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  //setWinVisible(1); // Navigate back to the previous window (e.g., login or home)


  return (
    <>
      <div>
        <form className="space-y-4 mt-4 px-16 h-auto max-w-md mx-auto bg-black opacity-75 border-4 border-black rounded-2xl shadow-md">
          <div className="flex justify-between my-4 mx-5">
            <button>
              <FaAngleLeft onClick={() => handleClick("GoBack")} className="w-8 h-8 border-2 bg-black border-white fill-white hover:border-white hover:fill-black hover:bg-white rounded-full" />
            </button>

            <h1 className="text-center font-playfir text-white font-bold text-2xl">
              Sign Up
            </h1>

            <button>
              <IoIosClose onClick={() => handleClick("CloseWin")} className="w-8 h-8 border-2 bg-black border-white fill-white hover:border-white hover:fill-black hover:bg-white rounded-full" />
            </button>
          </div>

          <div className="relative py-8">
            <div className="font-itim my-4 mt-10">
              <label className="absolute text-white border-1 text-xl pl-6" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="font-itim my-4">
              <label className="absolute text-white border-1 text-xl pl-6" htmlFor="age">
                Age
              </label>
              <input
                className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                id="age"
                type="number"
                placeholder="Enter Your Age"
              />
            </div>

            <div className="font-itim my-4">
              <label className="absolute text-white border-1 text-xl pl-6" htmlFor="gender">
                Gender
              </label>
              <select
                className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                id="gender"
              >
                <option value="">Select Your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="font-itim my-4">
              <label className="absolute text-white border-1 text-xl pl-6" htmlFor="contact">
                Contact Number
              </label>
              <input
                className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="text"
                placeholder="Enter Your Contact Number"
              />
            </div>

            <div className="font-itim my-4">
              <label className="absolute text-white border-1 text-xl pl-6" htmlFor="address">
                Address
              </label>
              <input
                className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Enter Your Address"
              />
            </div>

            <div className="font-itim my-4">
              <label className="absolute text-white border-1 text-xl pl-6" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter Your Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameAvailable(null);
                }}
                onBlur={checkUsernameAvailability}
              />
              {username && (
                <p
                  className={`pl-6 mt-2 ${
                    usernameAvailable === null
                      ? "text-gray-500"
                      : usernameAvailable
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {usernameAvailable === null
                    ? "Checking availability..."
                    : usernameAvailable
                    ? "Username is available"
                    : "Username is not available"}
                </p>
              )}
            </div>

            <div className="font-itim my-4">
              <label className="absolute text-white border-1 text-xl pl-6" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>

            <div className="font-itim my-4">
              <label className="absolute text-white border-1 text-xl pl-6" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Your Password"
              />
            </div>

            <div className="flex items-center ml-6 my-4">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <label htmlFor="rememberMe" className="ml-2 text-white font-playfir text-lg">
                Remember Me
              </label>
            </div>

            <div className="flex items-center justify-center text-center rounded-full p-1 my-8">
              <p  className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-1/2 rounded-full border-2 border-white active:underline"
              type="button"
              onClick={() => handleClick("signUp")} >
                
                Sign Up</p>
                
              
            </div>
            <div className="text-white text-center">
            
                <p onClick={() => handleClick("logIn")} className="m-2 text-lg t
                font-itim hover:text-xl hover:font-bold active:underline">
                  Log In
                </p>
             
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
