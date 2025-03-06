import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/home/home';
import Program from './components/program/program';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Login from './components/login/login';
import SignIn from './components/signin/signin';
import Todo from './components/todo/todo';
import Reminder from './components/reminders/reminders';
import Calendar from './components/calendar/src/App';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/timetable" element={<Calendar />} />
      </Routes>
    </Router>
  );
};

export default App;

