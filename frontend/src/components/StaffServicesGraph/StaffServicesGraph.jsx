import React from 'react'
import { Chart } from "react-google-charts";
import "./StaffServicesGraph.css"

const StaffServicesGraph = ({appointments}) => {

    function generateData(){
        let services = appointments.map(appointment => appointment.service_booked);
    }







  return (
    <div>StaffServicesGraph</div>
  )
}

export default StaffServicesGraph