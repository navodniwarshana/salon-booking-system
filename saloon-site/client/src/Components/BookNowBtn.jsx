import React from 'react'

function BookNowBtn(props ) {
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
    }}
  return (
    <div>
         <button onClick={() => props.modalVisible("APPOINTMENTS")}
          className="bg-white border-4 border-black text-black text-xl font-playfir font-bold p-2 px-3 my-6 rounded-xl lg:text-lg md:text-base"
        >
          BOOK NOW
        </button>
    </div>

    
  )
}

export default BookNowBtn