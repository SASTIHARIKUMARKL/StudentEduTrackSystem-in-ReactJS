import React from "react";
import './content.css';
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaStreetView } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaClinicMedical } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";


const Content =()=>{
    return(
        <div className="content">
            <div className="stats">
                <div className="stat-item red"><p><FaUser /></p> Regular Students</div>
                <div className="stat-item purple"><p><FaUserTie /></p> Remedial Students</div>
                <div className="stat-item green"><p><FaStreetView /></p> In Paid Clubs</div>
            </div>
            <h3>Menu</h3>
            <div className="menu">
            <div className="menu-item"><p><FaUser /></p> Regular Enrollment</div>
            <div className="menu-item"><p><FaBook /> </p>Remedial Enrollment </div>
            <div className="menu-item"><p><FaStreetView /></p> Club Management</div>
            <div className="menu-item"><p><FaChalkboardTeacher /></p> Classroom Management</div>
            <div className="menu-item"><p><FaEnvelope /></p> SMS / EMAIL</div>
            <div className="menu-item"><p><FaFileAlt /></p> Attendance</div>
            <div className="menu-item"><p><FaClinicMedical /></p> Clinic</div>
            </div>
        </div>
    );
}

export default Content;