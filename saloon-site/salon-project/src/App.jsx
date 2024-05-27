import React from 'react'
import Navigation from './Pages/Navigation'
import Footer from './Pages/Footer'
import BodyContent from './Pages/BobyContent'
import HomeWin from './Pages/HomeWin'
import ContactUs from './Pages/ContactUs'
import HairCutSection from './Pages/SubPges/OurServices/HairCutSection'
import BeardSection from './Pages/SubPges/OurServices/BeardSection'
import HeraderOurServices from './Pages/SubPges/OurServices/HeraderOurServices'
import Section from './Pages/Section'

function App() {
  return (
   <div className='min-w-[375px]'>
       <Navigation />
      
       <BodyContent>
          <HomeWin/>
          <HeraderOurServices/>
          <HairCutSection id='ourserv'/>
          <BeardSection/>
          <ContactUs/>
       </BodyContent>
       <Footer/>
   
   </div>
  )
}

export default App
