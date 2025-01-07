import React from 'react';
import './login.css';
import Lock from '../../images/lock.png';
import User from '../../images/user.png'


function Login() {
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
      </form>
    </div>
    </div>
  );
}

export default Login;
