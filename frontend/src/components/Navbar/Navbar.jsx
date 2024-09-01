/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate= useNavigate();

  return (
    <div className='navbar'>
    <div className="navbar-left">
      <img src={assets.logo} alt="Alumni Logo" className="logo" />
      <p className='name'>Alumini</p>
    </div>
    <div className="navbar-center">
      <button className="navbar-button" onClick={() => navigate('/')}>Home</button>
      <button className="navbar-button" onClick={() => navigate('/about')}>About Us</button>
      <button className="navbar-button">Events</button>
      <button className="navbar-button">Gallery</button>
      <button className="navbar-button">Contact</button>
    </div>
    <div className="navbar-right">
      <button className="navbar-button">Login</button>
    </div>
  </div>
  
  )
}

export default Navbar