import './Schedule.scss';
import { Link } from 'react-router-dom';
function Schedule({ schedule }) {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek = days[now.getDay()];
    if (schedule === undefined) {
        return (<h1>loading...</h1>)
    }

    return (
        < div className="Schedule" >
            <div className="Schedule__container">
                <ul className="Schedule__list">
                    <li className={`Schedule__list-item ${(dayOfWeek === 'Monday') ? "Schedule__list-item__active" : ""}`}>
                        <div>Monday: </div>
                        <div>{schedule.data.Monday} mg </div></li>
                    <li className={`Schedule__list-item ${(dayOfWeek === 'Tuesday') ? "Schedule__list-item__active" : ""}`}>
                        <div>Tuesday: </div>
                        <div>{schedule.data.Tuesday} mg</div></li>
                    <li className={`Schedule__list-item ${(dayOfWeek === "Wednesday") ? "Schedule__list-item__active" : ""}`}>
                        <div>Wednesday: </div>
                        <div>{schedule.data.Wednesday} mg</div></li>
                    <li className={`Schedule__list-item ${(dayOfWeek === "Thursday") ? "Schedule__list-item__active" : ""}`}>
                        <div>Thursday: </div>
                        <div>{schedule.data.Thursday} mg</div></li>
                    <li className={`Schedule__list-item ${(dayOfWeek === "Friday") ? "Schedule__list-item__active" : ""}`}>
                        <div>Friday: </div>
                        <div>{schedule.data.Friday} mg</div></li>
                    <li className={`Schedule__list-item ${(dayOfWeek === "Saturday") ? "Schedule__list-item__active" : ""}`}>
                        <div>Saturday: </div>
                        <div>{schedule.data.Saturday} mg</div></li>
                    <li className={`Schedule__list-item ${(dayOfWeek === "Sunday") ? "Schedule__list-item__active" : ""}`}>
                        <div>Sunday: </div>
                        <div>{schedule.data.Sunday} mg</div></li>
                </ul>
            </div>
            <button className="Schedule__button"><Link className="Schedule__link" to="/schedule/edit">Edit Schedule</Link></button>

        </div >
    );
}

export default Schedule;
