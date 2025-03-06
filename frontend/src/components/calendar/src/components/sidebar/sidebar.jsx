import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Calendar</h2>
      <button>+ Create</button>
      <div className="small-calendar">
        <p>January 2025</p>
        
      </div>
      <div className="calendar-list">
        <h3>My Calendars</h3>
        <ul>
          <li>
            <input type="checkbox" /> Tasks
          </li>
          <li>
            <input type="checkbox" /> Birthdays
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
/*import React from "react";

const Sidebar = ({ selectedDate, setSelectedDate }) => {
  return (
    <aside className="sidebar">
      <h2>Calendar</h2>
      <button>+ Create</button>
      <div className="small-calendar">
        <p>January 2025</p>
        <label htmlFor="date-select">Select Date: </label>
        <input
          type="date"
          id="date-select"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div className="calendar-list">
        <h3>My Calendars</h3>
        <ul>
          <li>
            <input type="checkbox" /> Tasks
          </li>
          <li>
            <input type="checkbox" /> Birthdays
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;*/
