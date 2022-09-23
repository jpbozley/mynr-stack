import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Home from './Pages/Home/Home';
import Medications from './Pages/Medications/Medications';
import Schedule from './Pages/Schedule/Schedule';
import EditDetails from './Pages/EditDetails/EditDetails';
import EditSchedule from './Pages/EditSchedule/EditSchedule';
import Header from './Components/Header/Header';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {

  //checkups
  const [checkup, setCheckup] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8080/checkups`)
      .then(response => {
        setCheckup(response)
      })
  }, [])



  //schedule
  const [schedule, setSchedule] = useState()
  useEffect(() => {
    axios.get(`http://localhost:8080/schedule`)
      .then(response => {
        setSchedule(response)
      })
  }, [])

  const [taken, setTaken] = useState(true)
  const [next, setNext] = useState(true)
  //medications
  const [medications, setMedications] = useState()
  useEffect(() => {
    axios.get('http://localhost:8080/medications')
      .then(response => {
        setMedications(response)
      })
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home checkup={checkup} schedule={schedule} taken={taken} setTaken={setTaken} next={next} setNext={setNext} />}></Route>
          <Route path="/medications" element={<Medications medications={medications} setMedications={setMedications} />}></Route>
          <Route path="/schedule" element={<Schedule schedule={schedule} />}></Route>
          <Route path="/edit" element={<EditDetails setCheckup={setCheckup} checkup={checkup} />}></Route>
          <Route path="/schedule/edit" element={<EditSchedule setSchedule={setSchedule} schedule={schedule} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
