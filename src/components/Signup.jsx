import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import "./Signup.css"


const Signup = ({ users, setUsers }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username || !password) {
      setError("Username and password cannot be empty");
      return;
    }

    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      setError("Username already taken");
      return;
    }

    const newUser = { username, password };
    setUsers([...users, newUser]); 
    navigate("/"); 
  };


  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Sign up</h2>
        <p className="welcome-text">Welcome Back! Please login to your account</p>
        {error && <p className="error-text">{error}</p>}
        
        <label className="input-label">Username</label>
        <input
          type="text"
          className="input-box"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />

        <label className="input-label">Password</label>
 <input
          type="password"
          className="input-box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <div className="login-options">
          <label className="checkbox-container">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>

        <button className="login-btn" onClick={handleSignup}>Signup</button>

        <div className="or-text">Or</div>

        <div className="social-login">
          <p>Login with</p>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaGithub className="icon" />
            <FaLinkedin className="icon" />
            <FaGoogle className="icon" />
          </div>
        </div>

        <p className="signup-text">
          Have an account? <Link to="/" className="signup-link">Login here</Link>
        </p>

        <p className="footer-text">
          2025 © One React - React Admin Dashboard <br />
          Template Made by <span className="company-name">Flatlogic LLC</span>
        </p>
      </div>
      <div className="login-image">
        
      </div>
    </div>
  );
};

export default Signup;
