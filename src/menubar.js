import React from 'react';
import './assets/Accountants/css/Sidebar.css';
import {Link,withRouter } from "react-router-dom";
import Patient from "./images/Patient.png";
import Doctor from "./images/Doctor1.png";
import Appointment from "./images/Appointment.png";
import MedicalStaff from "./images/MedicalStaff.png";
import Labot from "./images/Labot.png";
import Ambulance from "./images/Ambulance.png";
import Pharmecy from "./images/Pharmecy.png";
import Financial from "./images/foms.jpg";

function Menubar(){

    return(

        <div className="Msidebar">
         
         <h6 id="pict1">Patient</h6>
         <h6 id="pict2">Doctor</h6>
         <h6 id="pict3">E-Channeling</h6>
         <h6 id="pict4">Medical Staff</h6>
         <h6 id="pict5">Labs/Scans</h6>
         <h6 id="pict6">Ambulance</h6>
         <h6 id="pict7">Pharmacy</h6>
         <h6 id="pict7">Finance department</h6>

        <div id="Sidebar" className="menu">
        <a to="" id="patient"><img src={Patient} width="40" height="80"/></a>
        <a to="" id="doctor"><img src={Doctor} width="40" height="80"/></a>
        <a to="" id="appointment"><img src={Appointment} width="40" height="80"/></a>
        <a to="/ViewingAppointments" id="mStaff"><img src={MedicalStaff} width="40" height="80"/></a>
        <a to="/" id="labot"><img src={Labot} width="40" height="80"/></a>
        <a to="" id="ambulance"><img src={Ambulance} width="40" height="80"/></a>
        <a to="" id="pharmecy"><img src={Pharmecy} width="40" height="80"/></a>
        <Link to={"/FinanceStaff"}><img src={Financial} width="40" height="80"/></Link> 
         
      </div>
     </div>
    ); 
}

export default Menubar;