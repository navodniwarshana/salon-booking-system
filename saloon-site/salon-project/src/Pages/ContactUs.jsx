import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ContactUspage from "./SubPges/ContactUs";
import BodyContent from "./BodyContent";

function ContactUs() {
  return (
    <>
    <Navigation/>
    <BodyContent>
      <ContactUspage/>
    </BodyContent>
    <Footer/>
    
    </>
  );
}

export default ContactUs;
