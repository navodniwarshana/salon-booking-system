import React from 'react'
import Navigation from './Pages/Navigation'
import Footer from './Pages/Footer'
import BobyContent from './Pages/BobyContent'
import HomeWin from './Pages/HomeWin'
import OurServices from './Pages/OurServices'
import ContactUs from './Pages/SubPges/ContactUs'

function App() {
  return (
   <div className='min-w-[375px]'>
       <Navigation />
       <BobyContent>
          <HomeWin  />
          <OurServices/>
          <ContactUs/>
       </BobyContent>
       <Footer/>
   
   </div>
  )
}

export default App
