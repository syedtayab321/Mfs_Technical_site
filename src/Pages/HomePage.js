import React from 'react';
import HeroSection from '../components/MainPageComponents/HeroSection';
import ServicesSection from '../components/MainPageComponents/ServicesSection';
import PortfolioSection from '../components/MainPageComponents/PorfolioSection';
import TestimonialsSection from '../components/MainPageComponents/testominal';
import ContactSection from '../components/commonComponents/contactSection';
import FloatingWhatsAppButton from '../components/commonComponents/floatingActionButton';
import AboutPage from "../components/MainPageComponents/About";
import './../css/HomePage.css';
import './../css/About.css';
import './../css/services.css';
import './../css/Contact.css';
import TopBar from "../components/commonComponents/TopBar";
import {Button, Card, Col, Row} from "react-bootstrap";
import {FaEnvelope, FaPhone, FaWhatsapp} from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <TopBar/>
      <HeroSection />
      <AboutPage/>
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingWhatsAppButton />
       <Row className="contact-info text-center mb-5">
          <Col md={4} data-aos="flip-left">
            <Card className="contact-card">
              <Card.Body>
                <FaWhatsapp className="contact-icon" />
                <Card.Title>WhatsApp Us</Card.Title>
                <Button variant="success" href="https://wa.me/+971581329990" target="_blank">WhatsApp</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="flip-left" data-aos-delay="200">
            <Card className="contact-card">
              <Card.Body>
                <FaPhone className="contact-icon" />
                <Card.Title>Call Us</Card.Title>
                <Button variant="primary" href="tel:+971581329990">Call</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="flip-left" data-aos-delay="400">
            <Card className="contact-card">
              <Card.Body>
                <FaEnvelope className="contact-icon" />
                <Card.Title>Email Us</Card.Title>
                <Button variant="info" href="mailto:contact@mfsTechnical.com">Email Us</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </div>
  );
};

export default HomePage;
