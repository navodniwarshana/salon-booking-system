  import React, { useEffect, useRef, useState } from "react";
  import Profile from "./Profile";
  import ResetPassword from "./LoginActivitys/ResetPassword";
  import SignUp from "./LoginActivitys/SignUp";
  import Login from "./LoginActivitys/Login";
  import Appointment from "./Appointment"

  function PopupWindowControl({ modalVisible }) {
    const modalRef = useRef();

    const CloseModal = (e) => {
      if (modalRef.current === e.target) {
        modalVisible();
      }
    };

    const [winVisible, setWinVisible] = useState(1);
    const isLogin = false;

    useEffect(() => {
      document.body.style.overflow = modalVisible ? "hidden" : "hidden";
    }, [modalVisible]);

    return (
      <div
        ref={modalRef}
        onClick={CloseModal}
        className="fixed items-center justify-center inset-0 pt-20 p-40 bg-opacity-70 backdrop-blur-sm overflow-auto"
      >
        {winVisible === -1 && modalVisible()}
        {winVisible === 0 && <SignUp setWinVisible={setWinVisible} />}
        {winVisible === 1 && <Login setWinVisible={setWinVisible} />}
        {winVisible === 2 && <ResetPassword setWinVisible={setWinVisible} />}
        {winVisible === 3 && <Profile setWinVisible={setWinVisible} />}
        {winVisible === 4 || <Appointment.jsx />}
      </div>
    );

    
  }

  export default PopupWindowControl;
