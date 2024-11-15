import React from 'react';
import {Row, Col, Card, ListGroup, Carousel, Button } from 'react-bootstrap';
import { FaHammer, FaTools, FaCheckCircle, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import './../css/servicesDetails.css';
import image1 from './../assets/images/background1.png';
import image2 from './../assets/images/home.jpg';
import image3 from './../assets/images/background1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUsDetailsScreen = () => {
  AOS.init({ duration: 2700 });
  return (
    <div className="detail-about-us-section">
      <div className='coursel-container'>
        {/* Carousel Section */}
        <Carousel className="mb-5" fade>
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src={image1} alt="First slide" />
            <Carousel.Caption>
              <h3>Expert Kitchen Remodeling</h3>
              <p>Transforming your kitchen into a modern and functional space.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src={image2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Quality Bathroom Renovation</h3>
              <p>Elegant designs that fit your style and budget.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src={image3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Professional Painting Services</h3>
              <p>Giving your walls a fresh and vibrant look.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* About Section */}
        <h1 className="text-center mt-5 mb-4">About Mfs Technical</h1>
        <p className="text-center mb-5">
          Welcome to Mfs Technical, your trusted provider for comprehensive handyman and renovation services. Our mission is to deliver exceptional service, with a commitment to quality and customer satisfaction in every project we undertake.
        </p>

        {/* What We Do and Our Commitment Section */}
        <Row className="mb-5">
          <Col md={6} data-aos="fade-right">
            <Card className="about-card">
              <Card.Body>
                <Card.Title><FaHammer /> What We Do</Card.Title>
                <Card.Text>
                  We specialize in a wide range of handyman services, from minor repairs to major renovations. Our team is skilled in various areas including:
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item><FaCheckCircle className="icon" /> Kitchen Remodeling</ListGroup.Item>
                  <ListGroup.Item><FaCheckCircle className="icon" /> Bathroom Renovation</ListGroup.Item>
                  <ListGroup.Item><FaCheckCircle className="icon" /> Painting and Interior Decor</ListGroup.Item>
                  <ListGroup.Item><FaCheckCircle className="icon" /> Electrical and Plumbing</ListGroup.Item>
                  <ListGroup.Item><FaCheckCircle className="icon" /> Flooring and Tiling</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} data-aos="fade-left">
            <Card className="about-card">
              <Card.Body>
                <Card.Title><FaTools /> Our Commitment</Card.Title>
                <Card.Text>
                  At Mfs Technical, we believe in excellence, reliability, and customer-centered service. We are committed to:
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item><FaCheckCircle className="icon" /> Quality workmanship</ListGroup.Item>
                  <ListGroup.Item><FaCheckCircle className="icon" /> Timely project completion</ListGroup.Item>
                  <ListGroup.Item><FaCheckCircle className="icon" /> Transparent pricing</ListGroup.Item>
                  <ListGroup.Item><FaCheckCircle className="icon" /> Respect for your property</ListGroup.Item>
                  <ListGroup.Item><FaCheckCircle className="icon" /> Long-lasting results</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Why Choose Us Section */}
        <Row className="why-choose-us mb-5">
          <Col>
            <h2 className="text-center" data-aos="zoom-in">Why Choose Us?</h2>
            <p className="text-center">
              With years of experience in the industry, we’ve established ourselves as a trusted partner for homeowners and businesses alike. Here’s why clients choose us:
            </p>
            <Row>
              <Col md={4} data-aos="fade-up">
                <Card className="service-card text-center">
                  <img src={image2} alt="Experienced Professionals" className="service-image" />
                  <Card.Body>
                    <Card.Title>Experienced Professionals</Card.Title>
                    <Card.Text>
                      Our team of experts brings years of experience to every project, ensuring quality and efficiency.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} data-aos="fade-up" data-aos-delay="200">
                <Card className="service-card text-center">
                  <img src={image3} alt="Wide Range of Services" className="service-image" />
                  <Card.Body>
                    <Card.Title>Wide Range of Services</Card.Title>
                    <Card.Text>
                      We handle all types of handyman tasks, so you can count on us for all your home improvement needs.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} data-aos="fade-up" data-aos-delay="400">
                <Card className="service-card text-center">
                  <img src={image1} alt="Customer Satisfaction" className="service-image" />
                  <Card.Body>
                    <Card.Title>Customer Satisfaction</Card.Title>
                    <Card.Text>
                      We prioritize customer satisfaction, ensuring you are happy with our work every step of the way.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Interactive Contact Cards Section */}
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
    </div>
  );
};

export default AboutUsDetailsScreen;
