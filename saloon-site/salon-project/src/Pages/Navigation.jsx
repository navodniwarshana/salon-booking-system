import React from "react";
import logo from "./img/logo.png";
import menu from "./img/menu.png";
import NaviLink from "../Components/NaviLink";
import { FaBars, FaUserLarge } from "react-icons/fa6";
import SideMenu from "../Components/SideMenu";
import OurServices from "./OurServices";

function Navigation() {
  return (
    <>
      <div
        className="bg-black flex font-playfir
        items-center text-white  min-w-[230px]"
      >
        <div>
          <a href="/">
            <img src={logo} alt="" className="logo" />
          </a>
        </div>

        <div
          className="flex ml-auto
        items-center md:ml-auto hidden md:flex
        "
        >
          <NaviLink linkname="HOME" url="/" />
          <NaviLink linkname="OUR SERVICES" url="/OurServices.jsx" />
          <NaviLink linkname="CONTACT" url="/ContactUs.jsx" />

          <a href="./SubPges/Profile.jsx">
            <FaUserLarge
              linkname="PROFILE"
              url="#profile"
              className="m-4 w-8 h-8"
            />
          </a>
        </div>
        <div className="ml-auto md:hidden flex justify-end">
          <FaBars className="fill-white w-8 h-8 m-5" />
        </div>
      </div>
     {/* <SideMenu /> */} 
    </>
  );
}

export default Navigation;