import React, { useState } from "react";

import BodyContent from "./Pages/BodyContent";
import HomeWin from "./Pages/HomeWin";
import OurServices from "./Pages/OurServices";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Pages/Footer";
import Navigation from "./Pages/Navigation";
import ScrollingHeader from "./Pages/SubPges/ScrollingHeader";
import ReactModal from "react-modal";
import PopupWindowControl from "./Pages/SubPges/PopupWindowControl";

function App() {
  
const [showModal,setShowModal]= useState(false)


  return (
    <div className="h-screen flex flex-col items-center gap-6 bg-[#3a3d46] text-white">
      <h1>get the book</h1>
      <button onClick={()=>setShowModal(true)} className="bg-red-800 p-4">get the book</button>
      {showModal && <PopupWindowControl onclose={()=>setShowModal(false)}/>}
      {<ScrollingHeader/>}
      <Navigation />
      <BodyContent>
        <HomeWin />
        <OurServices />
        <ContactUs />
      </BodyContent>
      <Footer />
    </div>
  );
}

export default App;
