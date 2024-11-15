import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <Container>
      <h2>What Our Clients Say</h2>
      <Row>
        <Col md={4}>
          <Card className="testimonial-card">
            <Card.Body>
              <Card.Text>"Excellent service, on time, and highly professional!"</Card.Text>
              <Card.Footer>- Sarah A.</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="testimonial-card">
            <Card.Body>
              <Card.Text>"Excellent service, on time, and highly professional!"</Card.Text>
              <Card.Footer>- Ahmed B.</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="testimonial-card">
            <Card.Body>
              <Card.Text>"Excellent service, on time, and highly professional!"</Card.Text>
              <Card.Footer>- Shiekh Sallah.</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default TestimonialsSection;
