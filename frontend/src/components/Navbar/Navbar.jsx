import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <img src={logo} alt="DayPilot Logo" className='logo' />
        <ul className='nav-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/program">Programs</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
