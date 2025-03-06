import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import CalendarGrid from "./components/calendergrid/calendergrid";
import Header from "./components/header/header";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <CalendarGrid />
      </div>
    </div>
  );
};

export default App;
