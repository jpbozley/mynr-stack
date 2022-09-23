import './EditSchedule.scss'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function EditSchedule({ setSchedule, schedule }) {
    const formRef = useRef();
    const navigate = useNavigate();

    let scheduleHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/schedule', {
            Monday: formRef.current.Monday.value,
            Tuesday: formRef.current.Tuesday.value,
            Wednesday: formRef.current.Wednesday.value,
            Thursday: formRef.current.Thursday.value,
            Friday: formRef.current.Friday.value,
            Saturday: formRef.current.Saturday.value,
            Sunday: formRef.current.Sunday.value,

        }
        )
            .then(response => setSchedule(response))
        navigate('/schedule')
    }


    return (
        <div className="editSchedule">
            <form className="editSchedule__form" ref={formRef} onSubmit={scheduleHandler}>
                <div className="editSchedule__container">
                    <label htmlFor="Monday">Monday:</label>
                    <input type="text" name="Monday" defaultValue={schedule.data.Monday} />
                </div>
                <div className="editSchedule__container">
                    <label htmlFor="Tuesday">Tuesday:</label>
                    <input type="text" name="Tuesday" defaultValue={schedule.data.Tuesday} />
                </div>
                <div className="editSchedule__container">
                    <label htmlFor="Wednesday">Wednesday:</label>
                    <input type="text" name="Wednesday" defaultValue={schedule.data.Wednesday} />
                </div>
                <div className="editSchedule__container">
                    <label htmlFor="Thursday">Thursday:</label>
                    <input type="text" name="Thursday" defaultValue={schedule.data.Thursday} />
                </div>
                <div className="editSchedule__container">
                    <label htmlFor="Friday">Friday:</label>
                    <input type="text" name="Friday" defaultValue={schedule.data.Friday} />
                </div>
                <div className="editSchedule__container">
                    <label htmlFor="Saturday">Saturday:</label>
                    <input type="text" name="Saturday" defaultValue={schedule.data.Saturday} />
                </div>
                <div className="editSchedule__container">
                    <label htmlFor="Sunday">Sunday:</label>
                    <input type="text" name="Sunday" defaultValue={schedule.data.Sunday} />
                </div>
                <button className="editSchedule__button">Submit</button>
            </form>
        </div>
    );
}

export default EditSchedule;
