import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function ContactUs() {
  return (
    <div className='bg-white text-center my-10 text-black min-w-[230px]'>
      <h1 className='text-4xl font-bold font-playfir my-2'>CONTACT US</h1>
      <div className=" font-itim">
        <span className='text-2xl'>SALON INOKA</span>
        
        <p>Where Your Hair Dreams Come True <br />
        +94 71 123 4567 <br />
        saloninoka@gmail.com <br />
        <p className='flex items-center justify-center'>{<FaLocationDot/>}
        <a className='mx-2' href="https://maps.app.goo.gl/dLA6FuXv3HiDE5B38">Maps</a>
        </p>

        </p>
     
      </div>

    </div>
  )
}

export default ContactUs