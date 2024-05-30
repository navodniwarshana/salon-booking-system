import React, { useEffect, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import NaviLink from "./NaviLink";
import BookNowBtn from "./BookNowBtn";
import { Link, animateScroll as scroll } from "react-scroll";

function SideMenu({show}) {

    const scrollToTop = () => {
      scroll.scrollToTop();
    };
// // console.log(show);

const fun=show
const[num,setnum]=useState(fun)
 const [className, setClassName] = useState('bg-white');

console.log(num +" num")
console.log(num+" setNum")


function handleClick(){
  setnum(!num)
  console.log(num+" num")
  console.log(num+" setNum")
  
}

useEffect(() => {
  // Apply the class to the body element
  document.body.classList.add(className);
  

  // Cleanup function to remove the class when the component is unmounted
  return () => {
    document.body.classList.remove(className);
  };
}, [className]);

function abc() {
  setClassName('bg-blue-800')
}

      
  console.log(show +"  in sidemenu " );
  return (
    <> 
      <div id="perant" className= {`fixed top-0 mt-16 right-0 w-64   rounded-es-3xl transition-all duration-1000  justify-end block md:hidden ${fun ? 'transform translate-x-0' : 'transform translate-x-full'}`}>    
        <div className=" h-5/5  rounded-es-3xl bg-black fixed ">
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
              <Link
                className="cursor-pointer  my-2 text-lg font-bold  active:underline mx-4"
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
                <li  className="py-4 px-8 hover:bg-slate-800">CONTACT</li>{" "}
              </Link>

              <li className="pb-4 px-4 pt-4 hover:bg-slate-800">
                <NaviLink linkname="APPOINTMENTS" url="#myAppointments" />
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
