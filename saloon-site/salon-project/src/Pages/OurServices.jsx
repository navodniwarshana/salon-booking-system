import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import HairCutSection from './SubPges/OurServices/HairCutSection'
import BeardSection from './SubPges/OurServices/BeardSection'
import BodyContent from './BobyContent'


function OurServices() {
  return (
    <>
      <Navigation />
       <BodyContent>          
          <HairCutSection/>
          <BeardSection/>
      
        </BodyContent>
      <Footer/>
       
      
    </>
  
  )
}

export default OurServices