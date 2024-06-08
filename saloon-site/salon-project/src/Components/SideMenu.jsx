import React, { useEffect, useRef, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import NaviLink from "./NaviLink";
import BookNowBtn from "./BookNowBtn";
import { Link, animateScroll as scroll } from "react-scroll";

function SideMenu({ show, modalVisible, setShowNav }) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  
  const fun = show;
  const [num, setNum] = useState(fun);
  const [className, setClassName] = useState("bg-white");

  function handleClick() {
    setNum(!num);
  }

  useEffect(() => {
    document.body.classList.add(className);

    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);

  function abc() {
    setClassName("bg-blue-800");
  }

  const modalRef = useRef();

  const closeMenu = (e) => {
    if (modalRef.current === e.target) {
      setShowNav(false);
    }
  };

  // Handle click outside of the side menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <>
      <div
        id="perant"
        ref={modalRef}
        onClick={closeMenu}
        className={`fixed top-0 mt-16 right-0 w-64 rounded-es-3xl transition-all duration-1000 justify-end block md:hidden ${
          fun ? "transform translate-x-0 " : "transform translate-x-full "
        }`}
      >
        <div className="h-5/5 rounded-es-3xl bg-black fixed">
          <FaUserLarge
            onClick={() => modalVisible("PROFILE")}
            linkname="PROFILE"
            url="#profile"
            className="mx-20 size-28 bg-white rounded-full cursor-pointer"
          />
          <div
            className="text-white ml-auto text-2xl my-4 items-center md:ml-auto font-playfir"
          >
            <ul>
              <Link
                className="cursor-pointer my-2 text-lg font-bold active:underline mx-4"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={scrollToTop}
              >
                <li className="py-4 px-8 hover:bg-slate-800">HOME</li>
              </Link>
              <Link
                className="cursor-pointer my-2 text-lg font-bold active:underline mx-4"
                to="OURSERVICES"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={abc}
              >
                <li className="py-4 px-8 hover:bg-slate-800">OURSERVICES</li>
              </Link>
              <Link
                className="cursor-pointer my-2 text-lg font-bold active:underline mx-4"
                to="CONTACT"
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
              >
                <li className="py-4 px-8 hover:bg-slate-800">CONTACT</li>
              </Link>
              <li
                onClick={() => modalVisible("APPOINTMENTS")}
                className="pb-4 px-4 pt-4 hover:bg-slate-800 cursor-pointer my-2 text-lg font-bold active:underline mx-4"
              >
                APPOINTMENTS
              </li>
            </ul>
            <div className="ml-2 px-10">
              <BookNowBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
