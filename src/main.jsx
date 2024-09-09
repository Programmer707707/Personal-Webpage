import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
     {
      path: "/",
      element: <Home/>,
      index: true
     },
     {
      path: "about",
      element: <About/>,
      index: true
     },
     {
      path: "contact",
      element: <Contact/>,
      index: true
     },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
