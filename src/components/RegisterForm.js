// components/RegisterForm.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  

  return (    
      

    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Register</h2>
        <form >
          <div className="form-group">
            <label htmlFor="username"><FontAwesomeIcon icon={faEnvelope} className="fa-icon" /> Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter username"
              name="username"
              value={username}
              onChange={onChange}
              required
            />
          </div>
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
          <button type="submit" className="btn btn-primary btn-block">Register</button>
        </form>
        <p className="mt-3 text-center">
          already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
