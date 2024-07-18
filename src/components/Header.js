import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header style={{ marginTop: "-250px" }} className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">Escapekar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/Login">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing">Listing</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
          </ul>
        </div>
      </nav>
      <div className="header-content text-center">
        <h1>Let's Explore Your Awesome City</h1>
        <p>Find great places to stay, eat, shop, or visit from local experts.</p>
      </div>
    </header>
  );
};

export default Header;
