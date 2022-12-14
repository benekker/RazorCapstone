import React, { useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
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
           setAllAppointments(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(getAllAppointments, [])
    
    let eventArray = allAppointments.map((appointment) => {
        return {
            id: appointment.id, title:`${appointment.name} | ${appointment.email} | ${appointment.service_booked}`, start: `${appointment.date}T${appointment.time}`,
        }
    })
    
  return (
    <div className='main-wrap'>
        <div>
            <h2>Welcome, {user.username}!</h2>
        </div>
        <FullCalendar
        height={650}
        plugins={[listPlugin]}
        hiddenDays= "0"
        eventBackgroundColor="#cf3e38"
        eventDisplay='block'
        initialView="listWeek"
        events= {eventArray}
        headerToolbar={{right: 'prev,next'}}
        navLinks={true}
        />
        <StaffServicesGraph allAppointments={allAppointments}/>
    </div>
  )
}
// daygridPlugin, timeGridPlugin,
export default StaffPage;