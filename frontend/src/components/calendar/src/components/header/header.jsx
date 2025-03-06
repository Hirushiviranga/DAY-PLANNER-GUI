import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-controls">
        <button>Today</button>
        <button>&lt;</button>
        <button>&gt;</button>
        <h2>January 2025</h2>
      </div>
      <div className="header-options">
        <button>Week</button>
        <button>Month</button>
      </div>
    </header>
  );
};

export default Header;
