import React, { useState } from 'react';
import axios from "axios";
import useAuth from '../../hooks/useAuth';
import './AppointmentPage.css';
import Button from 'react-bootstrap/Button';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';





const AppointmentPage = () => {

    const [user, token] = useAuth();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [serviceBooked, setServiceBooked] = useState()

    const makeAppointment = async (event) => {
        try{
        event.preventDefault();
        let newAppointment = {
            "date": date,
            "time": time,
            "service_booked": serviceBooked,
            
            
        }
        let response = await axios.post('http://127.0.0.1:8000/api/appointments/',
        newAppointment,
        {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    } catch (error){
        console.log(error.message)
    }
    }

  return (
    <div className='container-wrap'>
        <form className='appointmentForm' onSubmit={makeAppointment}>
            <div className='promptContainer'>
                <label for='input'><h1>When can we help you?</h1></label>
                <input
                id='input'
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}/>
            </div>
            <div className='promptContainer'>
                <label for="timeSelect"><h1>What time works for you?</h1></label>
                <select id='timeSelect' className='custom-select'value={time} onChange={(event) => {
                    setTime(event.target.value)
                }}>
                    <option value="10:00:00">10AM</option>
                    <option value="11:00">11AM</option>
                    <option value="12:00">12PM</option>
                    <option value="1:00">1PM</option>
                    <option value="2:00">2PM</option>
                    <option value="3:00">3PM</option>
                    <option value="4:00">4PM</option>
                    <option value="5:00">5PM</option>
                    <option value="6:00">6PM</option>
                </select>
            </div>
            <div className='promptContainer'>
                <label for='serviceSelect'><h1>What can we do for you?</h1></label>
                <select id='serviceSelect' value={serviceBooked} onChange={(event) => {
                    setServiceBooked(event.target.value)
                }}>
                    <option value='haircut'>Haircut</option>
                    <option value='beardtrim'>Beard Trim</option>
                    <option value='colorservice'>Color Treatment</option>
                </select>
            </div>
            <button type='submit'>Book it!</button>
        </form>
        <div>
            <FullCalendar
    plugins={[ daygridPlugin]}
    initialView="dayGridMonth"
    events={[
        {}
    ]}/>
        </div>
    </div>
    
  )
}

export default AppointmentPage;
