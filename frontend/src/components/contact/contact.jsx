/*import React from 'react';
import './contact.css';
import Msg from '../../images/msg.png';
import Phone from '../../images/mobile.png';
import address from'../../images/location.avif';
import email from '../../images/email.png';

const Contact= () => {

  return (
    <div className='contact'>
       <h1 className='main_header'><img src={Msg} alt="" className='img'/>Contact us</h1>
     
       <h3 className='sub_header'>Get in Touch with Day Pilot </h3> 
     
       <ul>
        <li><img src={Phone} alt="" className='img'/>Mobile:+(94)68330194</li>
        <li><img src={address} alt="" className='img'/>Address:No.77,Flower Avenue,Colombo,SriLanka</li>
        <li><img src={email} alt="" className='img'/>Email:hviranga88@gamil.com</li>
       </ul>
       </div>

  );
};

export default Contact;*/
import React from 'react'; 
import './contact.css';
import Msg from '../../images/msg.png';
import Phone from '../../images/mobile.png';
import Address from '../../images/location.avif';
import Email from '../../images/email.png';

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='main_header'>
        <img src={Msg} alt="Message Icon" className='img' />
        Contact Us
      </h1>
      <h3 className='sub_header'>Get in Touch with Day Pilot</h3>
      <ul>
        <li>
          <img src={Phone} alt="Phone Icon" className='img' />
          Mobile: +(94)68330194
        </li>
        <li>
          <img src={Address} alt="Address Icon" className='img' />
          Address: No.77, Flower Avenue, Colombo, Sri Lanka
        </li>
        <li>
          <img src={Email} alt="Email Icon" className='img' />
          Email: hviranga88@gmail.com
        </li>
      </ul>
    </div>
  );
};

export default Contact;

