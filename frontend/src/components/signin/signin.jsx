import React from 'react';
import './signin.css';
import User from '../../images/user.png';
import Lock from '../../images/lock.png';
import Fb from '../../images/fb.png';
import Insta from '../../images/insta.png';
import Chrome from '../../images/chrome.png';
import X from '../../images/x.png';

const SignIn = () => {
  return (
    <div className="wrapper">
      <form>
        <h1>Sign In</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <img src={User} alt="User Icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <img src={Lock} alt="Lock Icon" />
        </div>

        <button type="submit" className="btn">Sign In</button>

        <div className="register-link">
          <p>
            Already have an account? <a href="#">Login</a>
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
  );
};

export default SignIn;

