import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import OurServices from './Pages/OurServices.jsx';
import ContactUs from './Pages/ContactUs.jsx'
import AppointmentMenu from './Pages/SubPges/AppointmentMenu.jsx';
import PopupWindowControl from './Pages/SubPges/PopupWindowControl.jsx'
import { IoMdAddCircleOutline } from 'react-icons/io';
import ResetPassword from './Pages/SubPges/LoginActivitys/ResetPassword.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/OurServices.jsx",
    element: <OurServices/> ,
  },
  {
    path: "/ContactUs.jsx",
    element: <ContactUs/> ,
  },
  {
    path: "/AppointmentMenu.jsx",
    element: <AppointmentMenu/>, //My- use a logic to booking are null, goto booking now
  },
  {
    path: "/PopupWindowControl.jsx",
    element: <PopupWindowControl/>,
  },

  {
    path: "/ResetPassword.jsx",
    element: <ResetPassword/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
