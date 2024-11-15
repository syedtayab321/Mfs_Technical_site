import React from 'react';
import './../../css/topBar.css';
import logo from '../../assets/images/mfs-logo.png';

const TopBar = () => (
  <div className="top-bar">
    <div className="logo-section">
      <img src={logo} alt="Website Logo" className="logo" />
    </div>
    <div className="contact-info">
      <div className="contact-item">
        <i className="fas fa-phone-alt"></i>
        <a href="tel:+1234567890">+123 456 7890</a>
      </div>
      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a>
      </div>
      <div className="contact-item">
        <i className="fas fa-map-marker-alt"></i>
        <span>Dubai , UAE</span>
      </div>
    </div>
  </div>
);

export default TopBar;
