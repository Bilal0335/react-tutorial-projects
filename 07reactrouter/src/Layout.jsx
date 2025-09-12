import React from 'react'
import Headers from './Header/Header'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Home />
      <Footer />
    </>
  )
}

export default Layout