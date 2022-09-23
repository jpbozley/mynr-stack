import './Home.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Home({ checkup, schedule, taken, setTaken, next, setNext }) {

    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[now.getDay()];
    let clickHandler = () => {
        setTaken(!taken)
    }
    let nextHandler = () => {
        setNext(!next)
    }
    if (checkup === undefined) {
        return (<h1>loading...</h1>)
    }
    if (schedule === undefined) {
        return (<h1>loading...</h1>)
    }




    return (
        <div className="Home">
            <div className="Home__container">
                <h3 className="Home__stats">Your {next === true ? "upcoming" : "previous"} INR check {next === true ? "is" : "was"} on:</h3>
                <h4 className="Home__data">{next === true ? checkup.data.dateNext : checkup.data.date}</h4>
                <button className="Home__upcoming-button" onClick={nextHandler}>{next === true ? "PREVIOUS" : "UPCOMING"}</button>
            </div>
            <div className={`Home__container ${(checkup.data.lowerRange <= checkup.data.reading) && (checkup.data.reading <= checkup.data.upperRange) ? "Home__inRange" : "Home__outOfRange"}`}>
                <h3 className="Home__stats">Your last INR reading was:</h3>
                <h4 className="Home__data">{checkup.data.reading}</h4>
            </div>
            <div className="Home__container Home__container-grey">
                <h3 className="Home__stats">Your target INR range is:</h3>
                <h4 className="Home__data"> {checkup.data.lowerRange} - {checkup.data.upperRange} </h4>
            </div>
            <div className="Home__container">
                <h3 className="Home__stats">Today, you take:</h3>
                <h4 className="Home__data">{taken === true ? `${schedule.data[dayOfWeek]} mg` : `TAKEN`}</h4>
                <button className="Home__taken-button" onClick={clickHandler}>{taken === false ? `UNDO` : 'TAKE'}</button>
            </div>
            <button className="Home__edit"><Link to="/edit" className="Home__link">Edit Details</Link></button>
        </div>
    );
}

export default Home;
