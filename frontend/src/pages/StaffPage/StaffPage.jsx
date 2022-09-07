import React, { useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import StaffServicesGraph from '../../components/StaffServicesGraph/StaffServicesGraph';
import "./StaffPage.css"

const StaffPage = () => {

    const [user, token] = useAuth();
    const [allAppointments, setAllAppointments] = useState([]);
    
    const getAllAppointments = async() => {
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
            setAllAppointments(appointmentArray)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(getAllAppointments, [])
    console.log(allAppointments)
  return (
    <div className='main-wrap'>
        <div>
            <h2>Welcome, {user.username}!</h2>
        </div>
        <FullCalendar
        plugins={[ daygridPlugin, timeGridPlugin]}
        hiddenDays= "0"
        eventBackgroundColor="#cf3e38"
        eventDisplay='block'
        initialView="dayGridMonth"
        events= {allAppointments}
        headerToolbar={{right: 'dayGridMonth,dayGridWeek,dayGridDay,prev,next'}}
        navLinks={true}
        />
        <StaffServicesGraph appointments = {allAppointments} />
    </div>
  )
}

export default StaffPage