import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import kitchenImage from '../../assets/images/kitchen.webp';
import bathroomImage from '../../assets/images/bathroom.png';
import homeImage from '../../assets/images/background.webp';
import floor from '../../assets/images/image1.jpg';
import painting from '../../assets/images/paniting-02.jpg';
import electrical from '../../assets/images/electrical.jpg';

const services = [
  {
    id: 'KitchenRenovation',
    title: 'Kitchen Remodeling',
    description: 'Upgrade your kitchen with modern and functional designs.',
    image: kitchenImage,
  },
  {
    id: 'Flooring',
    title: 'Flooring Remodeling',
    description: 'Step into a world where style meets functionality,',
    image: floor,
  },
  {
    id: 'Painting',
    title: 'Painting',
    description: 'In the realm of interior design, painting is the transformative brushstroke',
    image: painting,
  },
  {
    id: 'ElectricalWork',
    title: 'Electric work',
    description: 'In the modern world, electricity is the lifeblood of our homes and businesses',
    image: electrical,
  },
  {
    id: 'bathroomRenovation',
    title: 'Bathroom Renovation',
    description: 'Transform your bathroom into a spa-like oasis.',
    image: bathroomImage,
  },
  {
    id: 'fullHomeRenovation',
    title: 'Full Home Renovation',
    description: 'Complete renovation services to bring your vision to life.',
    image: homeImage,
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <Container>
        <h2>Our Services</h2>
        <Row>
          {services.map((service) => (
            <Col key={service.id} md={4}>
              <Link to={`/serviceDetails/${service.id}`} className="links">
                <Card className={`service-card fade-in ${isVisible ? 'show' : ''}`}>
                  <Card.Img variant="top" src={service.image} />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
