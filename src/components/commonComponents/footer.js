import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './../../css/footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Company Info */}
          <Col md={4} sm={12} className="footer-col">
            <div className="footer-logo">
              <h3>Mfs Technical</h3>
              <p className="footer-description">
                Expert Renovation Services in Dubai.Transforming spaces with precision and excellence. Let us help you create your dream space!
              </p>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={4} sm={12} className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Button variant="link" href='/' className="footer-link">Home</Button></li>
              <li><Button variant="link" href='/about' className="footer-link">About Us</Button></li>
              <li><Button variant="link" href='/services' className="footer-link">Services</Button></li>
              <li><Button variant="link" href='/contact' className="footer-link">Contact</Button></li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4} sm={12} className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <Link to="#" className="social-icon"><FaFacebook /></Link>
              <Link to="#" className="social-icon"><FaTwitter /></Link>
              <Link to="#" className="social-icon"><FaInstagram /></Link>
              <Link to="#" className="social-icon"><FaLinkedin /></Link>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <Row>
            <Col className="text-center">
              <p>© {new Date().getFullYear()} Mfs Technical. All rights reserved.</p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
