import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './../css/projectDetail.css';

const projects = [
  {
    id: 1,
    title: 'Residential Project 1',
    image: require('./../assets/images/bedrooms.jpg'),
    description: 'A beautiful bedroom renovation project.',
    details: 'This project involved complete renovation of a bedroom, including wall painting, new flooring, and modern furniture installation.',
    price: 'AED 10,000 - AED 20,000',
    features: ['Custom Design', 'High-Quality Finishes', 'Modern Aesthetic'],
  },
  {
    id: 2,
    title: 'Residential Project 2',
    image: require('./../assets/images/kitchen.webp'),
    description: 'Modern kitchen renovation project.',
    details: 'The kitchen was revamped with high-end appliances, custom cabinets, and modern tiles.',
    price: 'AED 15,000 - AED 30,000',
    features: ['Premium Appliances', 'Custom Cabinets', 'Stylish Layout'],
  },
  {
    id: 3,
    title: 'Residential Project 3',
    image: require('./../assets/images/carpet1.jpg'),
    description: 'Modern kitchen renovation project.',
    details: 'The kitchen was revamped with high-end appliances, custom cabinets, and modern tiles.',
    price: 'AED 15,000 - AED 30,000',
    features: ['Premium Appliances', 'Custom Cabinets', 'Stylish Layout'],
  },
  {
    id: 4,
    title: 'Residential Project 4',
    image: require('./../assets/images/paniting-02.jpg'),
    description: 'Modern kitchen renovation project.',
    details: 'The kitchen was revamped with high-end appliances, custom cabinets, and modern tiles.',
    price: 'AED 15,000 - AED 30,000',
    features: ['Premium Appliances', 'Custom Cabinets', 'Stylish Layout'],
  },
  {
    id: 5,
    title: 'Residential Project 5',
    image: require('./../assets/images/gypsm1.jpg'),
    description: 'Modern kitchen renovation project.',
    details: 'The kitchen was revamped with high-end appliances, custom cabinets, and modern tiles.',
    price: 'AED 15,000 - AED 30,000',
    features: ['Premium Appliances', 'Custom Cabinets', 'Stylish Layout'],
  },
  {
    id: 6,
    title: 'Residential Project 6',
    image: require('./../assets/images/Tiling-works1.png'),
    description: 'Modern kitchen renovation project.',
    details: 'The kitchen was revamped with high-end appliances, custom cabinets, and modern tiles.',
    price: 'AED 15,000 - AED 30,000',
    features: ['Premium Appliances', 'Custom Cabinets', 'Stylish Layout'],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id)) || {};

  return (
    <section className="project-details">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="project-image">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={project.image} alt={project.title} fluid rounded />
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="project-card shadow-lg rounded">
                <Card.Body>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description">{project.description}</Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> <span className="price-range">{project.price}</span>
                  </Card.Text>
                  <Card.Text><strong>Features:</strong></Card.Text>
                  <ul className="features-list">
                    {project.features && project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <Card.Text><strong>Details:</strong></Card.Text>
                  <p className="project-details-text">{project.details}</p>
                  <Button variant="primary" size="lg" className="mt-3">Get a Quote</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetails;
