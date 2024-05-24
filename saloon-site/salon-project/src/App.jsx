import React from 'react'
import Navigation from './Pages/Navigation'
import HomeWin from './Pages/HomeWin'
import OurServices from './Pages/OurServices'
import ContactUs from './Pages/ContactUs'

function App() {
  return (
   <div className=' min-w-[230px]'>
       <Navigation />
       <HomeWin/>
       <OurServices/>
       <ContactUs/>
   
   </div>
  )
}

export default App
