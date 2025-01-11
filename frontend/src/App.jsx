import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/hero';
import Program from './components/program/program';
import About from './components/about/about';
import Contact from './components/contact/contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Program/>
      <About/>
      <Contact/>
      
    </div>
  )
}

export default App
