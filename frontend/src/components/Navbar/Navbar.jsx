/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useAuth } from '../../context/AuthContext'
import { doSignInWithGoogle, doSignOut } from '../../firebase/auth'
import { useNavigate } from 'react-router-dom'


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
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={assets.logo} alt="Alumni Logo" className="logo" />
        <p className='name'>Alumni</p>
      </div>
      <div className="navbar-center">
        <button className="navbar-button" onClick={() => navigate('/')}>Home</button>
        <button className="navbar-button" onClick={() => navigate('/about')}>About Us</button>
        <button className="navbar-button" onClick={() => navigate('/members')}>Members</button>
        <button className="navbar-button" onClick={() => navigate('/events')}>Events</button>
        <button className="navbar-button" onClick={() => navigate('/job')}>Job Posted</button>
        <button className="navbar-button" onClick={() => navigate('/gallery')}>Gallery</button>
        <button className="navbar-button" onClick={() => navigate('/donations')}>Donations</button>
        <button className="navbar-button" onClick={() => navigate('/profile')} >Profile</button>
      </div>
      <div className="navbar-right">
        {userLoggedIn ? (

          <div>
            {/* <p>{currentUser.displayName || currentUser.email}</p> */}

            <button className="navbar-button" onClick={() => navigate('/register')}>Register</button>

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