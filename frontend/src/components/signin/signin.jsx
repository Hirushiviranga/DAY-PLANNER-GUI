import React from 'react';
import './signin.css';
import User from '../../images/user (2).png';
import Lock from '../../images/lock.png';
import Fb from '../../images/fb.png';
import Insta from '../../images/insta.png';
import Chrome from '../../images/chrome.png';
import X from '../../images/x.png';

const SignIn = () => {
  return (
    <div>
        
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
          <img src={Fb} alt="Facebook Icon" />
          <img src={Insta} alt="Instagram Icon" />
          <img src={Chrome} alt="Chrome Icon" />
          <img src={X} alt="X Icon" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
