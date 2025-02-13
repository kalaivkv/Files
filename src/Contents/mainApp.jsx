import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import DashBoard from './Contents/DashBoard';
import Tables from './Contents/Tables';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [users, setUsers] = useState([{ username: "admin", password: "12345" }]);

  return (

    <Router basename="/redux">  
      <MainLayout users={users} setUsers={setUsers} />
    </Router>
  );
}

function MainLayout({ users, setUsers }) {
  const location = useLocation();
  const fullWidthPages = ['/', '/signup'];
  const isFullWidthPage = fullWidthPages.includes(location.pathname);

  return (
    <div className={`app-container ${isFullWidthPage ? "full-width-page" : ""}`}>
      {!isFullWidthPage && <SideBar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Login users={users} />} />
          <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
