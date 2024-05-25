import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import NaviLink from "./NaviLink";
import BookNowBtn from "./BookNowBtn";

function SideMenu() {
  return (
    <>
      <div className=" flex  justify-end block md:hidden">
        <div className=" h-4/5  rounded-es-3xl bg-black fixed">
          <a href="#profile">
            <FaUserLarge
              linkname="PROFILE"
              url="#profile"
              className="mx-20 size-28 bg-white rounded-full"
            />
          </a>

       
          <div
            className="text-white ml-auto text-2xl my-4 
               items-center md:ml-auto font-playfir"
          >
            <ul>
            <li className="py-4 px-8"><NaviLink linkname="HOME" url="#home" className="p-10" /></li>
            <li className="py-4 px-8"><NaviLink linkname="OUR SERVICES" url="#SERVICES" /></li>
            <li className="py-4 px-8"><NaviLink linkname="CONTACT" url="#CONTACT" /></li>
            <li className="pt-4 pb-2 px-8"><NaviLink linkname="My Appointments" url="#myAppointments" /></li>
            </ul>
            <div className="ml-2 px-16"><BookNowBtn/></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
