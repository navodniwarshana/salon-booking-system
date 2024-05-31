import React, {useEffect,useRef } from 'react'
import Profile from "./Profile"

function PopupWindowControl({onclose}) {


    const modalRef = useRef();

    const closeModal = (e) => {
      if(modalRef.current === e.target){
        onclose();
      }
        
    }
  
  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-opacity-70 backdrop-blur-sm'>
      <button onClick={onclose}>close</button>
      <Profile/>
    </div>
  )
}

export default PopupWindowControl

{/*import React, { useState } from "react";
import BodyContent from "../BodyContent";
import HomeWin from "../HomeWin";
import OurServices from "../OurServices";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import Profile from "./Profile";
import Navigation from "../Navigation";
import TestModel from "./TestModel";
//import "./App.css"

function PopupWindowControl(props) {
    const [modal,setModal]=useState(false)

    function toggelemodal() {
        setModal=(!modal)
        
    }
  return (
    <div>
     <Navigation/>
      
    <TestModel/>
           
       
    </div>
  );
}

export default PopupWindowControl;
*/}