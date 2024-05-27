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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
