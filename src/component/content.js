import React, { useState } from "react";
import './content.css';
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaStreetView } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaClinicMedical } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";

const Content = () => {
    const [regularStudents, setRegularStudents] = useState(0);
    const [remedialStudents, setRemedialStudents] = useState(0);
    const [inPaidClubs, setInPaidClubs] = useState(0);

    const incrementCounter = (setCounter) => {
        setCounter(prevCount => prevCount + 1);
    };
    return (
        <div className="content">
            <div className="stats">
                <div className="stat-item red" onClick={() => incrementCounter(setRegularStudents)}>
                    <p><FaUser /></p> {regularStudents} Regular Students
                </div>
                <div className="stat-item purple" onClick={() => incrementCounter(setRemedialStudents)}>
                    <p><FaUserTie /></p> {remedialStudents} Remedial Students
                </div>
                <div className="stat-item green" onClick={() => incrementCounter(setInPaidClubs)} >
                    <p><FaStreetView /></p> {inPaidClubs} In Paid Clubs
                </div>
            </div>
            <h3>Menu</h3>
            <div className="menu">
                <div className="menu-item"><p><FaUser /></p> Regular Enrollment</div>
                <div className="menu-item"><p><FaBook /></p> Remedial Enrollment</div>
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