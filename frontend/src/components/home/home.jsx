/*import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './home.css';
import image1 from '../../images/image2.avif';
import Footer from '../footer/footer';

const Hero = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const handleSigninClick = () => {
    navigate('/signin'); 
  };

  return (
    <div className='hero'>
      <div className='hero-content'>
        <img src={image1} alt="" className='hero-image' />
        <div className='hero-text'>
          <h1>Welcome to DayPilot</h1>
          <h3>
            <p>
              Your ultimate companion for planning a productive and balanced day.
              With intuitive tools designed to streamline your schedule and empower your goals,
              DayPilot is crafted for those who aspire to lead an inspiring lifestyle.
            </p>
          </h3>
          
          <div className='btn-container'>
            <button onClick={handleLoginClick} className='login-button'>
              Login
            </button>
            <button onClick={handleSigninClick} className='signin-button'>
              Signin
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;*/
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './home.css';
import image1 from '../../images/image1.webp';
/*import image2 from '../../images/images 2.jpeg';
import image3 from '../../images/image3.avif';*/
import Footer from '../footer/footer';

const images = [image1];

const Hero = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out effect
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(false); // Start fade-in effect
      }, 1000); // Wait for fade-out before changing image
    }, 20000); // Change image every 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero'>
      <div className='hero-content'>
        <img src={images[currentImage]} alt="Rotating Plate" className={`hero-image ${fade ? 'fade' : ''}`} />
        <div className='hero-text'>
          <h1>Welcome to DayPilot</h1>
          <p>Your ultimate companion for planning a productive and balanced day.
              With intuitive tools designed to streamline your schedule and empower your goals,
              DayPilot is crafted for those who aspire to lead an inspiring lifestyle.</p>
          <div className='btn-container'>
            <button onClick={() => navigate('/login')} className='login-button'>Login</button>
            <button onClick={() => navigate('/signin')} className='signin-button'>Signin</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
