import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Element } from 'react-scroll'

function ContactUspage() {
  return (
    <>
      
      <div className="bg-white text-center  mb-16 text-black " name='CONTACT'>
        <h1 className="text-3xl font-bold font-playfir my-4 md:text-4xl">
          CONTACT US
        </h1>
        <div className=" font-itim">
          <span className="text-xl md:text-2xl">SALON INOKA</span>

          <p>
            Where Your Hair Dreams Come True <br />
            +94 71 123 4567 <br />
            saloninoka@gmail.com <br />
            <p className="flex items-center justify-center">
              {<FaLocationDot />}
              <a
                className="mx-2"
                href="https://maps.app.goo.gl/dLA6FuXv3HiDE5B38"
              >
                Maps
              </a>
            </p>
          </p>
        </div>
      </div>
    
    </>
  );
}

export default ContactUspage;
