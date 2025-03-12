import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about'>
      <h1 className='main_header'>About Us</h1>

      {/* Introduction */}
      <h4 className='sub_header'>Welcome to DayPilot – Your Companion for an Inspiring Lifestyle</h4>
      <p className='para'>
        At DayPilot, we believe that every day is an opportunity to achieve greatness. Our mission is to simplify your life and empower you to stay organized, productive, and stress-free. 
      </p>

      {/* Our Vision */}
      <h2 className='section_header'>Our Vision</h2>
      <p className='para'>
        Our vision is to revolutionize productivity by providing intuitive and efficient tools that help individuals and businesses take control of their time. We strive to inspire a well-balanced lifestyle where productivity meets peace of mind.
      </p>

      {/* Our Mission */}
      <h2 className='section_header'>Our Mission</h2>
      <p className='para'>
        Our mission is to create a seamless planning experience through innovation, simplicity, and customization. DayPilot is designed to enhance your efficiency, enabling you to focus on what truly matters—your goals, dreams, and well-being.
      </p>

      {/* Our Services */}
      <h2 className='section_header'>Our Services</h2>
      <ul className='services_list'>
        <li><strong>Smart Task Management:</strong> Organize and prioritize your to-do lists effortlessly.</li>
        <li><strong>Appointment Scheduling:</strong> Never miss an important meeting or event.</li>
        <li><strong>Goal Tracking:</strong> Set, monitor, and achieve your personal and professional milestones.</li>
        <li><strong>Customizable Dashboard:</strong> Tailor your planner to fit your workflow and style.</li>
        <li><strong>Seamless Integration:</strong> Sync with your favorite apps and calendars for a unified experience.</li>
      </ul>

      {/* Closing Statement */}
      <p className='para'>Your journey to a more organized life starts here. Let’s plan together!</p>
    </div>
  );
};

export default About;

