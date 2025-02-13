import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import "./Login.css";

const Login = ({ users }) => {
  const navigate = useNavigate();
  

  const defaultUsername = "user";
  const defaultPassword = "12345";

  const [username, setUsername] = useState(defaultUsername);
  const [password, setPassword] = useState(defaultPassword);
  const [error, setError] = useState("");

  const handleLogin = () => {
    const defaultUser = { username: defaultUsername, password: defaultPassword };

    const user = users.find((user) => user.username === username && user.password === password) ||
                 (username === defaultUser.username && password === defaultUser.password ? defaultUser : null);

    if (user) {
      navigate("/DashBoard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Login</h2>
        <p className="welcome-text">Welcome Back! Please login to your account</p>
        {error && <p className="error-text">{error}</p>}

        <label className="input-label">Username</label>
        <input type="text" className="input-box" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label className="input-label">Password</label>
        <input type="password" className="input-box" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className="login-options">
          <label className="checkbox-container">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>

        <button className="login-btn" onClick={handleLogin}>Login</button>

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
          Don't have an account? <Link to="/signup" className="signup-link">Sign Up here</Link>
        </p>

        <p className="footer-text">
          2025 © One React - React Admin Dashboard <br />
          Template Made by <span className="company-name">Flatlogic LLC</span>
        </p>
      </div>
      <div className="login-image"></div>
    </div>
  );
};

export default Login;
