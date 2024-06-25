import React, { useEffect, useRef, useState } from "react";
import Profile from "./Profile";
import ResetPassword from "./LoginActivitys/ResetPassword";
import SignUp from "./LoginActivitys/SignUp";
import Login from "./LoginActivitys/Login";
import Appointment from "./Appointment";
import AddBooking from "./Appointment/AddBooking";
import ConfirmBook from "./Appointment/ConfirmBook";
import MyAppointments from "./Appointment/MyAppointments";

function PopupWindowControl({ modalVisible, content }) {
  const modalRef = useRef();

  const CloseModal = (e) => {
    if (modalRef.current === e.target) {
      modalVisible();
    }
  };

  const [winVisible, setWinVisible] = useState(1);

  useEffect(() => {
    document.body.style.overflow = modalVisible ? "hidden" : "auto";
  }, [modalVisible]);

  const isLogin=false;
  useEffect(() => {
  
    if (content==="APPOINTMENTS") {
      setWinVisible(4);
    }else{
      if (isLogin) {
        setWinVisible("profilesss");
      }else{
        setWinVisible("login");
      }
      
    }
  }, [content]);

  return ( 
    <div
      ref={modalRef}
      onClick={CloseModal}
      className="fixed flex pt-20 justify-center inset-0 p-20 bg-opacity-70 backdrop-blur-sm overflow-auto "
    >
      {winVisible === "close" && modalVisible()}
      {winVisible === "signUp" && <SignUp setWinVisible={setWinVisible} />}
      {winVisible === "login" && <Login setWinVisible={setWinVisible} />}
      {winVisible === "forgotPassword" && <ResetPassword setWinVisible={setWinVisible} />}
      {winVisible === "profile" && <Profile setWinVisible={setWinVisible} />}
      {/*winVisible === 4 && <Appointment setWinVisible={setWinVisible} />*/}
      {winVisible === 4 && <AddBooking setWinVisible={setWinVisible} />}
      {winVisible === 5 && <ConfirmBook setWinVisible={setWinVisible} />}
      {winVisible === 6 && <MyAppointments setWinVisible={setWinVisible} />}

    </div>
  );
}

export default PopupWindowControl;