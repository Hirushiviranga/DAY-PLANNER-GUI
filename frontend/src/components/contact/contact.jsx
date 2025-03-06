import React from 'react';
import './contact.css';
import Msg from '../../images/msg.png';
import Phone from '../../images/mobile.png';
import Address from '../../images/location.avif';
import Email from '../../images/email.png';

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='main-header'>
        <img src={Msg} alt="Message Icon" className='icon' /> Contact Us
      </h1>
      
      <h3 className='sub-header'>Get in Touch with DayPilot</h3>
      
      <ul className='contact-list'>
        <li><img src={Phone} alt="Phone Icon" /> Mobile: +(94) 768330194</li>
        <li><img src={Address} alt="Address Icon" /> Address: No.77, Flower Avenue, Colombo, Sri Lanka</li>
        <li><img src={Email} alt="Email Icon" />support@daypilot.com</li>
      </ul>
    </div>
  );
};

export default Contact;

