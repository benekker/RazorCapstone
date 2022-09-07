import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';

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
    console.log(appointments)


  return (
    <div>
        <FullCalendar
        plugins={[ daygridPlugin]}
        initialView="dayGridMonth"
        events= {appointments}
        headerToolbar={{right: 'dayGridMonth,dayGridWeek,dayGridDay,prev,next'}}
        navLinks={true}
        />
    </div>
  )
}

export default DisplayAppointments;

