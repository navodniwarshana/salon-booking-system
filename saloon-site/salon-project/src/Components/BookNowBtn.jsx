import React from 'react'

function BookNowBtn(modalVisible) {
  return (
    <div>
         <button onClick={() => modalVisible("APPOINTMENTS")}
          className="bg-white text-black text-xl font-playfir font-bold p-2 px-3 my-6 rounded-xl lg:text-lg md:text-base"
        >
          BOOK NOW
        </button>
    </div>

    
  )
}

export default BookNowBtn