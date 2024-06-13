import React, { useState } from "react";
import { FaCircle } from "react-icons/fa6";

function AvailableBtn(props) {
  const handleClick = (action) => {
    if (action === "forgotPassword") {
      setWinVisible(2); // Show ResetPassword component
    } else if (action === "SignUp") {
      setWinVisible(0); // Show SignUp component
    } else if (action === "GoBack") {
      setWinVisible(-1); // Close the modal
    } else if (action === "CloseWin") {
      setWinVisible(-1); // Close the modal
    } else if (action === "LoginTOProfile") {
      setWinVisible(3); // Show Profile component
    }
  };

  const [Availability, setAvailability] = useState(false);
  const [Time, setTime] = useState("3.30 pm");

  return (
    <div className="flex justify-center">
      <div
        className="font-itim w-1/2 max-w-[230px] min-w-[230px] border-4 justify-center bg-white border-black text-xl font-bold p-1 rounded-3xl lg:text-lg md:text-base"
        onClick={() => props.modalVisible("APPOINTMENTS")}
      >
        <div
          className={`${
            Availability ? " text-green-500" : " text-red-500"
          } flex  justify-between text-xl mx-4 `}
        >
          <p className="pr-4">{Availability ? "Available Now" : "Close Now"}</p>
          <FaCircle
            className={`fill-${Availability ? "green" : "red"}-500  size-6`}
          />
        </div>
        <div
          className={`${
            Availability ? " text-red-500" : " text-green-500"
          }  text-xl   items-center`}
        >
          <p className="flex pl-4 justify-start ">
            {Availability ? "Close at " : "Open at "}
            {Time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AvailableBtn;
