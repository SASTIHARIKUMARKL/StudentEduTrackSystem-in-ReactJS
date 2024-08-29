import React from "react";
import './sidebar.css';
import { FaUserFriends } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { FaDelicious } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";

const Sidebar =()=>{
    return(
        <aside className="side">
            <ul>
                <li><p><FaUserFriends /></p>Student Management</li>
                <li><p><MdManageAccounts /></p>Financial Management</li>
                <li><p><CiDiscount1 /></p>Quality Control</li>
                <li><p><FaDelicious /></p>Report Delivery</li>
                <li><p><FaFileAlt /></p>Attendance</li>
            </ul>
        </aside>
    );
}

export default Sidebar;