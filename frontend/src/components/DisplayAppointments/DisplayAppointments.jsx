import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import "./DisplayAppointments.css"

const DisplayAppointments = () => {

    const [user, token] = useAuth();
    const [appointments, setAppointments] = useState([])

    const getAppointments = async() => {
        try{
            let response = await axios.get('http://127.0.0.1:8000/api/appointments/all/', {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            let appointmentArray = response.data.map((appointment) => {
                return {
                    id: appointment.id, title: "Appointment Booked", start: `${appointment.date}T${appointment.time}`,
                }
            })
            setAppointments(appointmentArray)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(getAppointments, [])
    


  return (
    <div>
        <FullCalendar
        height={900}
        plugins={[ daygridPlugin, timeGridPlugin]}
        hiddenDays= "0"
        eventBackgroundColor="#cf3e38"
        eventDisplay='block'
        initialView="dayGridMonth"
        events= {appointments}
        headerToolbar={{right: 'dayGridMonth,dayGridWeek,dayGridDay,prev,next'}}
        navLinks={true}
        />
    </div>
  )
}

export default DisplayAppointments;

