/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useAuth } from '../../context/Authcontext'
import { doSignInWithGoogle, doSignOut } from '../../firebase/auth'

const Navbar = () => {
  const { userLoggedIn, currentUser } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await doSignInWithGoogle();
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await doSignOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={assets.logo} alt="Alumni Logo" className="logo" />
        <p className='name'>Alumini</p>
      </div>
      <div className="navbar-center">
        <button className="navbar-button">Home</button>
        <button className="navbar-button">About Us</button>
        <button className="navbar-button">Events</button>
        <button className="navbar-button">Gallery</button>
        <button className="navbar-button">Contact</button>
      </div>
      <div className="navbar-right">
        {userLoggedIn ? (
          <div>
            <p>Welcome, {currentUser.displayName || currentUser.email}</p>
            <button className="navbar-button" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button className="navbar-button" onClick={handleGoogleLogin}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;