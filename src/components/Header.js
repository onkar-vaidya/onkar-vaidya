import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // Path to your logo image

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Your Logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
