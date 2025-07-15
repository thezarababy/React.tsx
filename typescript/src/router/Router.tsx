import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '../layout/HomeLayout'
import Home from '../pages/Home'
import Services from '../pages/Services'
import About from '../pages/About'

 export const mainRoute = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);


 


