import React from "react";
import { FaBars } from "react-icons/fa6";
import logo from "../img/logo.png";
import AddBooking from "./Appointment/AddBooking";
import ConfirmBook from "./Appointment/ConfirmBook";
import MyAppointments from "./Appointment/MyAppointments";
import Login from "./LoginActivitys/Login";

function Appointment() {
  return (
    <>
    <div>
        <div
          className="bg-black flex font-playfir
        items-center text-white  min-w-[230px]"
        >
          <div>
            <a href="#home">
              <img src={logo} alt="" className="logo" />
            </a>
          </div>

          <div
            className=" ml-auto
        items-center md:ml-auto hidden md:flex
        "
          >
            <h1 className="text-3xl pr-16">Booking</h1>
          </div>
          <div className="ml-auto  flex justify-end">
            <FaBars className="fill-white w-8 h-8 m-5" />
          </div>
        </div>

        <AddBooking />
        <ConfirmBook />
        <MyAppointments />
        <Login/>
      </div>
      
    </>
  );
}

export default Appointment;
