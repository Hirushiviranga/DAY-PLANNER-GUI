import React from "react";
import './Navbar.css';
import logo from '../../images/logo.webp'
function App() {
  

  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Progress</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li><button className="btn">Login</button></li>

              
        </ul>

    </nav>
  );
}

export default App;
