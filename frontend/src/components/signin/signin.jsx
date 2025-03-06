import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signin.css';
import User from '../../images/user.png';
import Lock from '../../images/lock.png';
import Fb from '../../images/fb.png';
import Insta from '../../images/insta.png';
import Chrome from '../../images/chrome.png';
import X from '../../images/x.png';
//import { Link } from 'react-router-dom';


const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    
    const handleSignup = async (e) => {
      e.preventDefault();
  
      if (!username || !password) {
          alert('Username and password are required');
          return;
      }
  
      // Ensure password is a number
      const passwordInt = parseInt(password, 10);
      if (isNaN(passwordInt)) {
          alert("Password must be a number.");
          return;
      }
  
      try {
          const response = await fetch('http://localhost:8081/signin', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ Username: username, PasswordHash: passwordInt }),
          });
  
          const data = await response.json();
          
          if (response.ok) {
              alert('Signup successful! Please login.');
              navigate('/login');
          } else {
              console.error("Signup error:", data);
              alert(data.error || 'Signup failed');
          }
      } catch (error) {
          console.error('Error during signup:', error);
          alert('An error occurred during signup');
      }
  };
  

    return (
        <div className="wrapper">
            <form onSubmit={handleSignup}>
                <h1>Sign In</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <img src={User} alt="User Icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password (Number Only)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <img src={Lock} alt="Lock Icon" />
                </div>
                <button type="submit" className="btn">Sign In</button>
                <div className="register-link">
                    
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
        <div className="register-link">
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
                </div>
            </form>
        </div>
    );
};

export default Signin;
