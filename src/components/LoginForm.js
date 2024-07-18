// components/LoginForm.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './LoginForm.css'; // Import custom CSS for LoginForm

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

 

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} className="fa-icon" /> Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"><FontAwesomeIcon icon={faLock} className="fa-icon" /> Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
