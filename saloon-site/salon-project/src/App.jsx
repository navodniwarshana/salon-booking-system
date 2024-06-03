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
  const [showModal, setShowModal] = useState(false);
  
  showModal?document.body.style.overflow="hidden":document.body.style.overflow="auto";
  function modalVisible() {
    setShowModal(!showModal);
    //console.log(setShowModal+" show modal")
  }
  //onclose={() => setShowModal(false)} 

  return (
    <>
      <div>
        {<ScrollingHeader modalVisible={modalVisible}/>}
        <Navigation modalVisible={modalVisible}/>
        <BodyContent>
          <HomeWin />
          <OurServices />
          <ContactUs />
        </BodyContent>
        <Footer />
        {showModal && (
          <PopupWindowControl modalVisible={modalVisible} />
          

        )} 
        </div>
    </>
  );
}

export default App;
