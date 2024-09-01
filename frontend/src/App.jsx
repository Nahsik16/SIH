/* eslint-disable no-unused-vars */
import React from 'react'

import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Members from './pages/Members/Members.jsx'
import Events from './pages/Events/Events.jsx'
import Donations from './pages/Donations/Donations.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/donations" element={<Donations/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App