import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.svg';
import iconNavi from '../../assets/Icon-navi.svg';
function Navbar() {
  return (
    <div className="navbar">
      <img className='logo' src={logo} alt="logo" />
      <nav>
        <img className="icon-navi" src={iconNavi} alt="icon-navi" />
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </nav>
    </div>
  )
}

export default Navbar