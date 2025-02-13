import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './SideBar.css';  
import logo from './logo.svg'; 
import dashboard from './dashboard.svg';
import Typo from './Typo.svg';
import tables from './tables.svg';
import Ui from './Ui.svg';
import settings from './settings.svg';
import Account from './Account.svg';
import logout from './logout.svg';
import { FiMenu } from "react-icons/fi";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

  
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
       <>
        <button className="menu-toggle" onClick={toggleSidebar}>
            <FiMenu size={30} />
        </button>

        <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>      
            <div className="title">
                <div className="one">
                    <img src={logo} alt="Logo" /> 
                </div>
                <div className="text">Flatlogic One</div>
            </div>

            <div className="menu">
                <div className="app">
                    <h3>APP</h3>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
                        <p> <img src={dashboard} alt="" /> Dashboard</p>
                    </NavLink>
                </div>
                <div className="template">
                    <h3>TEMPLATE</h3>
                    <NavLink to="/typography" className={({ isActive }) => isActive ? "active" : ""}>
                        <p> <img src={Typo} alt="" /> Typography</p>
                    </NavLink>
                    <NavLink to="/tables" className={({ isActive }) => isActive ? "active" : ""}>
                        <p> <img src={tables} alt="" /> Tables</p>
                    </NavLink>
                    <NavLink to="/ui-elements" className={({ isActive }) => isActive ? "active" : ""}>
                        <p> <img src={Ui} alt="" /> UI Elements</p>
                    </NavLink>
                </div>
            </div>

            <div className="bottom">
                <NavLink to="/settings" className={({ isActive }) => isActive ? "active" : ""}>
                    <p> <img src={settings} alt="" /> Settings</p>
                </NavLink>
                <NavLink to="/account" className={({ isActive }) => isActive ? "active" : ""}>
                    <p> <img src={Account} alt="" /> Account</p>
                </NavLink>
                <NavLink to="/logout" className={({ isActive }) => isActive ? "active" : ""}>
                    <p> <img src={logout} alt="" /> Logout</p>
                </NavLink>
            </div>
        </div>
       </>
    );
}

export default SideBar;
