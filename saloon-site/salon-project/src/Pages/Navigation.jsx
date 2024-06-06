import React, { useState } from "react";
import logo from "./img/logo.png";
import { FaBars, FaUserLarge } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";
import Headroom from "react-headroom";
import SideMenu from "../Components/SideMenu";
import NaviLink from "../Components/NaviLink";

function Navigation({ modalVisible, setWinVisible }) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [showNav, setShowNav] = useState(false);

  
  
  
 
  return (
    <>
      <Headroom>
        <div className="bg-black flex font-playfir items-center text-white min-w-[230px]" name="HOME">
          <div>
            <img name="HOME" src={logo} alt="" className="logo cursor-pointer" />
          </div>
          <div className="ml-auto items-center md:ml-auto hidden md:flex">
            <Link
              className="cursor-pointer my-2 text-lg font-bold hover:underline active:underline mx-4"
              activeClass="active"
              to="HOME"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={scrollToTop}
            >
              <NaviLink linkname=" HOME" url="/" />
            </Link>
            <Link
              className="cursor-pointer my-2 text-lg font-bold hover:underline active:underline mx-4"
              to="OURSERVICES"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              OUR SERVICES
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

            <button onClick={() => modalVisible("APPOINTMENTS")} className="cursor-pointer my-2 text-lg font-bold hover:underline active:underline mx-4">
              APPOINTMENTS
            </button>

            <button onClick={() => modalVisible("PROFILE")}>
              <NaviLink linkname={<FaUserLarge className="mx-4 w-8 h-8 cursor-pointer" />} />
            </button>
          </div>
          <div className="ml-auto md:hidden flex justify-end">
            <FaBars onClick={() => setShowNav(!showNav)} className={`fill-white w-8 h-8 m-5 ${showNav ? 'hidden' : 'block'}`} />
            <IoIosClose onClick={() => setShowNav(!showNav)} className={`${showNav ? 'w-9 h-9 mr-5 border-2 bg-black border-white cursor-pointer hover:fill-black hover:bg-white rounded-full' : 'hidden'}`} />
          </div>
        </div>
        <SideMenu show={showNav} setWinVisible={setWinVisible} />
        <div className="w-full h-0.5 bg-white"></div>
      </Headroom>
    </>
  );
}

export default Navigation;
