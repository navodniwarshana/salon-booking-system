import React from "react";

import BodyContent from "./Pages/BodyContent";
import HomeWin from "./Pages/HomeWin";
import OurServices from "./Pages/OurServices";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Pages/Footer";
import Navigation from "./Pages/Navigation";

function App() {
  return (
    <div>
      <Navigation/>
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
