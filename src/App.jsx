import React, { useState, lazy, Suspense, startTransition } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import './App.css';


const DashBoard = lazy(() => import('./Contents/DashBoard'));
const Tables = lazy(() => import('./Contents/Tables'));
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));


startTransition(() => { 
  import('./Contents/DashBoard').then(() => console.log("Dashboard preloaded"));
  import('./Contents/Tables').then(() => console.log("Tables preloaded"));
});

function App() {
  const [users, setUsers] = useState([{ username: "admin", password: "12345" }]);

  return (
    <Router>
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
        <Suspense fallback={<div className="loading"></div>}>
          <Routes>
            <Route path="/" element={<Login users={users} />} />
            <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
