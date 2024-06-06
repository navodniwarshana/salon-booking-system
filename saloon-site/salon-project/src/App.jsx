import React, { useState } from "react";
import BodyContent from "./Pages/BodyContent";
import HomeWin from "./Pages/HomeWin";
import OurServices from "./Pages/OurServices";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Pages/Footer";
import Navigation from "./Pages/Navigation";
import ScrollingHeader from "./Pages/SubPges/ScrollingHeader";
import PopupWindowControl from "./Pages/SubPges/PopupWindowControl";
import SideMenu from "./Components/SideMenu";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  showModal ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");

  function modalVisible(content = null) {
    setShowModal(!showModal);
    setModalContent(content);
  }
  const abcd=useState("abc use in app")
  return (
    <>
      <div>
        <ScrollingHeader modalVisible={modalVisible} />
        <Navigation modalVisible={modalVisible} />
        <SideMenu abcd={abcd}/>
        <BodyContent>
          <HomeWin />
          <OurServices />
         
          <ContactUs />
        </BodyContent>
        <Footer />
        {showModal && <PopupWindowControl modalVisible={modalVisible} content={modalContent} abcd={abcd} />}
        
      </div>
    </>
  );
}

export default App;
