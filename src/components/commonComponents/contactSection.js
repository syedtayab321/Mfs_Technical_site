import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => (
  <section className="contact-section" id="contact">
    <Container>
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">We'd love to hear from you! Reach out to us for any inquiries or quote requests.</p>
      <Row>
        <Col md={6}>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" className="form-input" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" className="form-input" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" className="form-input" />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-button">Send Message</Button>
          </Form>
        </Col>
        <Col md={6} className="contact-info">
          <div className="contact-info-item">
            <FaEnvelope size={24} className="contact-icon" />
            <p>Email: <a href="mailto:info@renovatedubai.com">info@renovatedubai.com</a></p>
          </div>
          <div className="contact-info-item">
            <FaPhoneAlt size={24} className="contact-icon" />
            <p>Phone: +971 123 456 789</p>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt size={24} className="contact-icon" />
            <p>Location: Dubai, UAE</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ContactSection;
