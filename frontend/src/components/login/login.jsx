/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import User from "../../images/user.png";
import Lock from "../../images/lock.png";
import Fb from '../../images/fb.png';
import Insta from '../../images/insta.png';
import Chrome from '../../images/chrome.png';
import X from '../../images/x.png';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  
const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  // Ensure password is a number
  const passwordInt = parseInt(password, 10);
  if (isNaN(passwordInt)) {
      setError("Password must be a number.");
      return;
  }

  try {
      // Send the correct database column names in the request
      const response = await axios.post("http://localhost:8081/login", {
          Username: username,   // Matches the database column
          PasswordHash: passwordInt, // Matches the database column
      });

      if (response.data.success) {
          alert("Login Successful");
          navigate("/todo");
      } else {
          setError("Invalid credentials");
      }
  } catch (err) {
      setError("Error connecting to the server");
      console.error("Login error:", err);
  }
};


  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>

        {error && <p className="error-message">{error}</p>}

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <img src={User} alt="User Icon" />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img src={Lock} alt="Lock Icon" />
        </div>

        <button type="submit" className="btn">Login</button>
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
                        Don't have an account? <Link to="/signin">Sign In</Link>
                    </p></div>
      </form>
    </div>
  );
};

export default LogIn;*/
/*import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./login.css";
import User from "../../images/user.png";
import Lock from "../../images/lock.png";
import Fb from '../../images/fb.png';
import Insta from '../../images/insta.png';
import Chrome from '../../images/chrome.png';
import X from '../../images/x.png';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const cardType = location.state?.cardType || "todo"; // Default to "todo" if no cardType is provided

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Ensure password is a number
    const passwordInt = parseInt(password, 10);
    if (isNaN(passwordInt)) {
        setError("Password must be a number.");
        return;
    }

    try {
        // Send the correct database column names in the request
        const response = await axios.post("http://localhost:8081/login", {
            Username: username,   // Matches the database column
            PasswordHash: passwordInt, // Matches the database column
        });

        if (response.data.success) {
            alert("Login Successful");
            // Navigate to the appropriate page based on cardType
            navigate(`/${cardType}`);
        } else {
            setError("Invalid credentials");
        }
    } catch (err) {
        setError("Error connecting to the server");
        console.error("Login error:", err);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <img src={User} alt="User Icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img src={Lock} alt="Lock Icon" />
        </div>
        <button type="submit" className="btn">Login</button>
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
            Don't have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;*/
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./login.css";
import User from "../../images/user.png";
import Lock from "../../images/lock.png";
import Fb from '../../images/fb.png';
import Insta from '../../images/insta.png';
import Chrome from '../../images/chrome.png';
import X from '../../images/x.png';
import { Link } from 'react-router-dom';
import Navbar from "../navbar/navbar";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const cardType = location.state?.cardType || "todo"; // Default to "todo" if no cardType is provided

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Ensure password is a number
    const passwordInt = parseInt(password, 10);
    if (isNaN(passwordInt)) {
        setError("Password must be a number.");
        return;
    }

    try {
        // Send the correct database column names in the request
        const response = await axios.post("http://localhost:8081/login", {
            Username: username,   // Matches the database column
            PasswordHash: passwordInt, // Matches the database column
        });

        if (response.data.success) {
            alert("Login Successful");
            // Navigate to the appropriate page based on cardType
            if (cardType === "timetable") {
              navigate("/timetable");
            } else if (cardType === "reminders") {
              navigate("/reminder");}
              else{
              navigate(`/${cardType}`);
            }
        } else {
            setError("Invalid credentials");
        }
    } catch (err) {
        setError("Error connecting to the server");
        console.error("Login error:", err);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <img src={User} alt="User Icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img src={Lock} alt="Lock Icon" />
        </div>
        <button type="submit" className="btn">Login</button>
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
            Don't have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;


