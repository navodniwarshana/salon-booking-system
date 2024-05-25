import React from 'react'
import Navigation from './Pages/Navigation'
import HomeWin from './Pages/HomeWin'
import OurServices from './Pages/OurServices'
import ContactUs from './Pages/ContactUs'
import Footer from './Pages/Footer'
import SideMenu from './Components/SideMenu'

function App(props) {
  return (
   <div className=''>
       <Navigation />
       <HomeWin> 
       </HomeWin>
       <OurServices/>
       <ContactUs/>
       <Footer/>
   
   </div>
  )
}

export default App
