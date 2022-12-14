import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from '../../hooks/useAuth';
import './AppointmentPage.css';
import DisplayAppointments from '../../components/DisplayAppointments/DisplayAppointments';

const AppointmentPage = () => {
    const [user, token] = useAuth();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState()
    const [serviceBooked, setServiceBooked] = useState('')
    const [allAppointments, setAllAppointments] = useState([]);
    
    
    var convertTime = require('convert-time');

    const getAllAppointments = async() => {
        try{
            let response = await axios.get('http://127.0.0.1:8000/api/appointments/all/', {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
           setAllAppointments(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(getAllAppointments, [])
    console.log(allAppointments)


    const makeAppointment = async (event) => {
        try{
        event.preventDefault();
        let newAppointment = {
            "date": date,
            "time": convertTime(time),
            "service_booked": serviceBooked,
            "name": name,
            "email": email
            
            
        }
        let response = await axios.post('http://127.0.0.1:8000/api/appointments/',
        newAppointment,
        {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        alert('Your appointment has been booked!')
    } catch (error){
        console.log(error.message)
        alert('We failed to book your appointment, please make sure all fields are properly filled out!')
    }
    }
    let timeSlots =
    [convertTime("10:00:00"),
    convertTime("11:00:00"),
    convertTime("12:00:00"),
    convertTime("13:00:00"),
    convertTime("14:00:00"),
    convertTime("15:00:00"),
    convertTime("16:00:00"),
    convertTime("17:00:00"),
    convertTime("18:00:00"),
    ]

    const selectedDateAppointments = allAppointments
    .filter(appointment => appointment.date === date)
    .map(appointment => appointment.time);

    const options = timeSlots.map(timeslot => {
        return (
            !selectedDateAppointments.includes(timeslot) && (
                <option key={timeslot} value={timeslot}>
                    {timeslot}
                </option>
            )
        )
    })

  return (
    <div className='container-wrap'>
        <form className='appointmentForm' onSubmit={makeAppointment}>
            <div className='promptContainer'>
                <label for='input'><h2>When can we help you?</h2></label>
                <input
                id='input'
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}/>
            </div>
            <div className='promptContainer'>
                <label for="timeSelect"><h2>Please Select a Time:</h2></label>
                <select id='timeSelect' className='custom-select'value={time} onChange={(event) => {
                    setTime(event.target.value)
                }}>
                    {options}
                </select>
            </div>
            <div className='promptContainer'>
                <label for='serviceSelect'><h2>What can we do for you?</h2></label>
                <select id='serviceSelect' value={serviceBooked} onChange={(event) => {
                    setServiceBooked(event.target.value)
                }}>
                    <option disabled>Please select a service</option>
                    <option value='haircut'>Haircut</option>
                    <option value='beardtrim'>Beard Trim</option>
                    <option value='colorservice'>Color Treatment</option>
                </select>
            </div>
            <div className='personal-info'>
                {/* <label for='nameInput'>Name:</label> */}
                <input id='nameInput' placeholder='Enter Your Name' type='text' value={name} onChange={(event) => setName(event.target.value)}/>
                {/* <label for='emailInput'>Email:</label> */}
                <input id='emailInput' placeholder='Enter Your Email' type='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <button type='submit'>Book it!</button>
        </form>
        <div>
            <DisplayAppointments />
        </div>
    </div>
    
  )
}

export default AppointmentPage;
