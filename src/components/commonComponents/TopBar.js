import React from 'react';
import './../../css/topBar.css';

const TopBar = () => (
  <div className="top-bar">
    <div className="contact-info">
      <div className="contact-item">
        <i className="fas fa-phone-alt"></i>
        <a href="tel:+971581329990">+971 5813 29990</a>
      </div>
      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <a href="mailto:info@MfsTechnical.com">info@MfsTechnical.com</a>
      </div>
      <div className="contact-item">
        <i className="fas fa-map-marker-alt"></i>
        <span>Dubai, UAE</span>
      </div>
    </div>
  </div>
);

export default TopBar;
