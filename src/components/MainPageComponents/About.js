import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import image1 from '../../assets/images/home.jpg'
import {Link} from "react-router-dom";
const AboutPage = () => {
  return (
    <section className="about-page">
      <Container>
        <Row className="about-row">
          <Col md={6} className="about-text">
            <h2>About Us</h2>
            <p className="about-description">
              Welcome to our platform! We are a dedicated team offering a variety of services to
              help you create your dream space. Whether it's home renovation, interior design, or
              more, we are here to bring your vision to life with expertise and passion.
            </p>
            <Button variant="primary" className="about-btn"><Link to='/about-details' className='btn-link'>Learn More</Link></Button>
          </Col>
          <Col md={6} className="about-image">
            <Image
              src={image1}
              alt="Team"
              fluid
              className="about-team-image"
            />
          </Col>
        </Row>
        <Row className="about-row">
          <Col md={12}>
            <div className="about-vision">
              <h3>Our Vision</h3>
              <p>
                Our vision is to create spaces that reflect the personality and needs of each
                individual. We believe in blending functionality with aesthetic appeal, ensuring
                every project we work on exceeds expectations.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
