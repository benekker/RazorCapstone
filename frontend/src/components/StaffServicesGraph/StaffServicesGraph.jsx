import React, {useEffect, useState} from 'react'
import { Chart } from "react-google-charts";
import "./StaffServicesGraph.css"


const StaffServicesGraph = ({allAppointments}) => {


    function generateHaircutData(){
        let haircutArray = allAppointments.filter(appointment => appointment.service_booked.includes("haircut"));
        let haircutCount = haircutArray.length
        let sum = haircutCount * 20
        return sum
    }

    function generateBeardTrimData(){
      let beardTrimArray = allAppointments.filter(appointment => appointment.service_booked.includes("beardtrim"));
      let beardTrimCount = beardTrimArray.length
      let sum = beardTrimCount * 14
      return sum
    }

    function generateColorServiceData(){
      let colorServiceArray = allAppointments.filter(appointment => appointment.service_booked.includes("colorservice"));
      let colorServiceCount = colorServiceArray.length
      let sum = colorServiceCount * 25
      return sum
    }




     const data = [
        ["Service", "$"],
        ["Haircut", generateHaircutData()],
        ["Beard trim", generateBeardTrimData()],
        ["Color service", generateColorServiceData()]
      ];
      
     const options = {
        title: "$ per Service Booked",
        is3D: true
      };
  return (
    <div>
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  )
}

export default StaffServicesGraph