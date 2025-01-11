import React from 'react';
import './log.css';
import Lock from '../../images/lock.png';
import User from '../../images/user.png';
import Fb from '../../images/fb.png'; 
import Insta from '../../images/insta.png';
import Chrome from '../../images/chrome.png';
import X from '../../images/x.png';

const Log = () => {
  return (
    <div>
      <div className="wrapper">
        <form>
          <h1>Login</h1>

          <div className="input-box">
            <label htmlFor="username" className="visually-hidden">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              required
            />
            <img src={User} alt="User Icon" />
          </div>

          <div className="input-box">
            <label htmlFor="password" className="visually-hidden">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
            />
            <img src={Lock} alt="Lock Icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn">Login</button>

          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>

          <div className="links">
            <h4>or</h4>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={Fb} alt="Facebook Icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Insta} alt="Instagram Icon" />
            </a>
            <a href="https://www.google.com/chrome" target="_blank" rel="noopener noreferrer">
              <img src={Chrome} alt="Chrome Icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={X} alt="Twitter Icon" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Log;
