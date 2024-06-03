import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

function ResetPassword(props) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendOtp = () => {
    console.log("OTP sent to", emailOrPhone);
  };

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      console.log("Password reset successfully");
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <>
      <div className={`${props.children === 2 ? "block" : "hidden"}`}>
        <form className="space-y-4 mt-4 p-4 h-auto max-w-md mx-auto bg-black opacity-75 border-4 border-black rounded-2xl shadow-md">
          <div className="flex justify-between my-4 mx-5">
            <button>
              <FaAngleLeft className="w-8 h-8 border-2 bg-white border-black hover:fill-white hover:bg-black rounded-full" />
            </button>

            <h1 className="text-center font-playfir text-white font-bold text-2xl">
              Reset Password
            </h1>

            <button>
              <IoIosClose className="w-8 h-8 border-2 bg-white border-black hover:fill-white hover:bg-black rounded-full" />
            </button>
          </div>

          <div className="relative py-8">
            <div className="font-itim my-4 mt-10">
              <label
                className="absolute text-white border-1 text-xl pl-6"
                htmlFor="emailOrPhone"
              >
                Email or Phone Number
              </label>
              <input
                className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                id="emailOrPhone"
                type="text"
                placeholder="Enter Your Email or Phone Number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-center text-center rounded-full p-1 my-8">
              <button
                className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-1/2 rounded-full border-2 border-white"
                type="button"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            </div>

            <div className="font-itim my-4">
              <label
                className=" absolute text-white border-1 text-xl pl-6"
                htmlFor="otp"
              >
                OTP
              </label>
              <input
                className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                id="otp"
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <p className="text-green-500 text-xl pl-4 py-1"> verifyed</p>
            </div>

            <div className="font-itim my-4">
              <label
                className="absolute text-white border-1 text-xl pl-6"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                id="newPassword"
                type="password"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="font-itim my-4">
              <label
                className="absolute text-white border-1 text-xl pl-6"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border-2 border-black text-lg rounded-full w-full mt-8 pt-4 py-2 px-3 text-black placeholder-opacity-100 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-center text-center rounded-full p-1 my-8">
              <button
                className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-1/2 rounded-full border-2 border-white"
                type="button"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
