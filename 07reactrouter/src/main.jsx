import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import User from './User/User.jsx'
import Github, { githubInfoLoader } from './Github/Github.jsx'


// ! First Method router setup

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           path: '',
//           element: <Home />
//         },
//         {
//           path: 'about',
//           element: <About />
//         },
//         {
//           path: 'contact',
//           element: <Contact />
//         }
//       ]
//     }
//   ]
// )

// ! Second Method router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={ githubInfoLoader} path='github' element={<Github />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
