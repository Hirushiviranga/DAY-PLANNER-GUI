import React from 'react';
import './program.css';
import Todo from '../../images/todo.png';
import Reminder from '../../images/reminders.png';
import Timetable from '../../images/timetable.webp';

const Home = () => {
    const ButtonClick = () => {
        window.location.href = '/login/login';
    };

    return (
        <div className='home'>
            <div className='card'>
                <img src={Todo} alt='To-Do' className='card-img' />
                <p>TO-DO</p>
                <button className='card-btn' onClick={ButtonClick}>
                    CLICK HERE
                </button>
            </div>
            <div className='card'>
                <img src={Reminder} alt='Reminders' className='card-img' />
                <p>REMINDERS</p>
                <button className='card-btn' onClick={ButtonClick}>
                    CLICK HERE
                </button>
            </div>
            <div className='card'>
                <img src={Timetable} alt='Timetable' className='card-img' />
                <p>TIMETABLE</p>
                <button className='card-btn' onClick={ButtonClick}>
                    CLICK HERE
                </button>
            </div>
        </div>
    );
};

export default Home;
