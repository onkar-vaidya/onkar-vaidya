import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa'; // Ensure correct import
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://www.instagram.com/rohit.flute" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/ROHEET90" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
      </div>
      <p>&copy; 2024 Rohit Gavali. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
