import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Navbar/>
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout
