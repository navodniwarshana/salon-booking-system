import React, { useEffect, useRef, useState } from "react";
import Profile from "./Profile";

import ResetPassword from "./LoginActivitys/ResetPassword";
import SignUp from "./LoginActivitys/SignUp";
import Login from "./LoginActivitys/Login";

function PopupWindowControl({ modalVisible }) {
  const modalRef = useRef();

  const CloseModal = (e) => {
    if (modalRef.current === e.target) {
      modalVisible();
    }
  };

 // const arr = [<SignUp />, <Login />, <ResetPassword />, <Profile />];
  

  const [i, setI] = useState(0);

  const [winVisible, setWinVisible] = useState(1);
  const isLogin = false;

  //useEffect(() => {
  //  if (isLogin) {
  //    setI(0);
  //  } else {
  //    setI(1);
  //  }
  //}, [isLogin]);

  useEffect(() => {
    switch (winVisible) {
      case 0:
        setI(0);
        break;
      case 1:
        setI(1);
        break;
      case 2:
        setI(2);
        break;
      case 3:
        setI(3);
        break;
      default:
        break;
    }
  }, [winVisible]);

  useEffect(() => {
    document.body.style.overflow = modalVisible ? "hidden" : "hidden";
  }, [modalVisible]);

  const [childData, setChildData] = useState('');

  const handleDataFromChild = (data) => {
    setChildData(data);
    winVisible(data);
  };

  return (
    <div
      ref={modalRef}
      onClick={CloseModal}
      className="fixed items-center justify-center inset-0 p-20 bg-opacity-70 backdrop-blur-sm overflow-auto"
    >
      {/*React.cloneElement(arr[i], { setWinVisible })*/}
      <SignUp>{winVisible}</SignUp>
      <Login>{{winVisible} sendDataToParent={handleDataFromChild}}</Login>
      <ResetPassword >{winVisible}</ResetPassword>
      <Profile>{winVisible}</Profile>
    </div>
  );
}

export default PopupWindowControl;
