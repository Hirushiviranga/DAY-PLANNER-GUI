import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/hero'
import Program from './components/program/program'
import Login from './components/login/login'
import Signin from './components/signin/signin'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Program/>
      <Login/>
      <Signin/>

    </div>
  )
}

export default App
