import React, { useState } from "react";
import logo from "./img/logo.png";
import menu from "./img/menu.png";
import NaviLink from "../Components/NaviLink";
import { FaBars, FaUserLarge } from "react-icons/fa6";
import SideMenu from "../Components/SideMenu";
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation() {
  const scrollToTop = () => {
    scroll.scrollToTop();
    
  }

  const [showNav,setShowNav]=useState(false)
  
  return (
    <>
      <div
        className="bg-black flex font-playfir
        items-center text-white  min-w-[230px]"
        name="HOME"
      >
        <div>
          <img name="HOME" src={logo} alt="" className="logo cursor-pointer " />
        </div>

        <div
          className="ml-auto
        items-center md:ml-auto hidden md:flex
        "
        >
          <Link
            className="cursor-pointer  my-2 text-lg font-bold hover:underline active:underline mx-4"
            activeClass="active"
            to="HOME"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={scrollToTop}
          >
            HOME
          </Link>
          <Link
            className="cursor-pointer my-2 text-lg font-bold hover:underline active:underline mx-4"
            to="OURSERVICES"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            OURSERVICES
          </Link>
          <Link
            className="cursor-pointer my-2 text-lg font-bold hover:underline active:underline mx-4"
            to="CONTACT"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
          >
            CONTACT
          </Link>

          <Link
            className="cursor-pointer my-2 text-lg font-bold hover:underline active:underline mx-4"
            to="CONTACT"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            APPOINTMENTS
          </Link>
          
          <a href="./SubPges/Profile.jsx">
            <FaUserLarge
              linkname="PROFILE"
              url="#profile"
              className="m-4 w-8 h-8 cursor-pointer"
            />
          </a>
          
          
        </div>
        
        <div className="ml-auto md:hidden flex justify-end">
          
          <FaBars onClick={() => setShowNav(!showNav)} className="fill-white w-8 h-8 m-5 cursor-pointer" />
  
        </div>
      </div>
      <SideMenu show={showNav}/> 
      
    </>
  );
}

export default Navigation;
