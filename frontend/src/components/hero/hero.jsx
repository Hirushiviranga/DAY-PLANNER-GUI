/*import React from 'react'
import './hero.css'
import image1 from '../../images/image2.avif'

const hero = () => {
  return (
    <div className='hero'>
      <img src={image1} alt="" className='image1'/>
      <div class="pos">
      <div className='text1'>
        <h1>Welcome to DayPilot</h1>
        <p> your ultimate companion for planning a productive and balanced day. With intuitive tools designed to streamline your schedule and empower your goals, DayPilot is crafted for those who aspire to lead an inspiring lifestyle. Stay organized, prioritize effectively, and make every moment count.because your journey deserves precision and purpose.</p>
         </div>
         <button className='btn'>Get started</button>
    </div>
    </div>
  )
}

export default hero*/
import React from 'react';
import './hero.css';
import image1 from '../../images/image2.avif';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={image1} alt="DayPilot Image" className='image1' />
      <div className="pos">
        <div className='text1'>
          <h1>Welcome to DayPilot</h1>
          <p>Your ultimate companion for planning a productive and balanced day. With intuitive tools designed to streamline your schedule and empower your goals, DayPilot is crafted for those who aspire to lead an inspiring lifestyle. Stay organized, prioritize effectively, and make every moment count, because your journey deserves precision and purpose.</p>
        </div>
        <button className='btn'>Get started</button>
      </div>
    </div>
  );
}

export default Hero;

