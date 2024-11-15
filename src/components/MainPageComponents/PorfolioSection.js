import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './../../css/portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Residential Project 1',
    image: require('../../assets/images/bedrooms.jpg'),
    description: 'A beautiful bedroom renovation project.',
  },
  {
    id: 2,
    title: 'Residential Project 2',
    image: require('../../assets/images/kitchen.webp'),
    description: 'Modern kitchen renovation project.',
  },
  {
    id: 3,
    title: 'Residential Project 3',
    image: require('../../assets/images/carpet1.jpg'),
    description: 'Carpet installation project.',
  },
  {
    id: 4,
    title: 'Residential Project 4',
    image: require('../../assets/images/paniting-02.jpg'),
    description: 'Wall painting renovation project.',
  },
  {
    id: 5,
    title: 'Residential Project 5',
    image: require('../../assets/images/gypsm1.jpg'),
    description: 'Gypsum ceiling installation project.',
  },
  {
    id: 6,
    title: 'Residential Project 6',
    image: require('../../assets/images/Tiling-works1.png'),
    description: 'Tiling work for residential spaces.',
  },
];

const PortfolioSection = () => {
  // Define animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="portfolio-section">
      <Container>
        <h2 className="section-title text-center mb-4">Our Portfolio</h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={4} key={project.id}>
              <Link
                to={`/project-details/${project.id}`}
                className="portfolio-card-link"
                style={{ textDecoration: 'none' }}
              >
                <motion.div
                  className="portfolio-card-wrapper"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="portfolio-card shadow-lg rounded">
                    <Card.Img variant="top" src={project.image} className="portfolio-card-image" />
                    <Card.Body>
                      <Card.Title className="portfolio-card-title">{project.title}</Card.Title>
                      <Card.Text className="portfolio-card-text">{project.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioSection;
