import React, {useState} from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './../css/servicesDetails.css';
import kitchenImage from '../assets/images/kitchen.webp';
import bathroomImage from '../assets/images/bathroom.png';
import homeImage from '../assets/images/background.webp';
import floor from './../assets/images/image1.jpg';
import painting from './../assets/images/paniting-02.jpg';
import electrical from './../assets/images/electrical.jpg';
import OrderModal from "../components/commonComponents/OrdersModals";

const ServiceDetailScreen = () => {
  const { id } = useParams();
  const [showOrderModal, setShowOrderModal] = useState(false);

  const openModal = () => setShowOrderModal(true);
  const closeModal = () => setShowOrderModal(false);
  const serviceDetails = {
    KitchenRenovation: {
      title: 'Kitchen Renovation',
      description:
        'Our kitchen renovation service offers customized designs tailored to your space. With premium materials and an eye for functionality, we transform your kitchen into a modern and inviting area perfect for cooking and entertaining.',
      image: kitchenImage,
      price: 'AED 5000 - AED 15000',
      features: [
        'Custom Cabinetry & Countertops',
        'Modern Lighting Solutions',
        'Energy-Efficient Appliances',
      ],
    },
    bathroomRenovation: {
      title: 'Bathroom Renovation',
      description:
        'Transform your bathroom into a luxurious retreat with high-end finishes, modern fixtures, and a layout designed to maximize space and comfort.',
      image: bathroomImage,
      price: 'AED 3000 - AED 10000',
      features: ['Luxury Fixtures', 'Space-Saving Layouts', 'Eco-Friendly Options'],
    },
    fullHomeRenovation: {
      title: 'Full Home Renovation',
      description:
        'Our comprehensive home renovation services cover every aspect of your home, from layout redesigns to finishing touches, ensuring a cohesive and stylish look.',
      image: homeImage,
      price: 'AED 10000 - AED 50000',
      features: ['Complete Overhaul', 'Personalized Design', 'Quality Craftsmanship'],
    },
    Flooring: {
      title: 'Flooring',
      description:
        'Upgrade your floors with a wide selection of high-quality materials, including hardwood, laminate, and tiles, that add elegance and durability to your space.',
      image: floor,
      price: 'AED 5000 - AED 20000',
      features: ['Durable Materials', 'Easy Maintenance', 'Elegant Finishes'],
    },
    Painting: {
      title: 'Painting Services',
      description:
        'Our professional painting service gives your walls a fresh look with vibrant colors and smooth finishes, enhancing your home’s aesthetic.',
      image: painting,
      price: 'AED 3000 - AED 15000',
      features: ['Color Consultation', 'Precision Application', 'Quality Paints'],
    },
    ElectricalWork: {
      title: 'Electrical Work',
      description:
        'Ensure the safety and efficiency of your home’s electrical systems with our expert services, including rewiring, installation, and repairs.',
      image: electrical,
      price: 'AED 1500 - AED 10000',
      features: ['Certified Electricians', 'Eco-Friendly Options', 'Reliable Service'],
    },
  };

  const service = serviceDetails[id] || {};

  return (
    <>
       <OrderModal
           show={showOrderModal}
           handleClose={closeModal}
           serviceName={service.title}
           Price={service.price}
       />
       <section className="service-detail-screen">
      <Container>
        <Row>
          <Col md={6}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={service.image} alt={service.title} fluid className="service-image rounded" />
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="service-info">
                <h2 className="service-title display-5">{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <p className="service-price"><strong>Price Range:</strong> {service.price}</p>
                <h4 className="features-title mt-4">Features:</h4>
                <ul className="service-features">
                  {service.features &&
                    service.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <i className="fa fa-check-circle"></i> {feature}
                      </li>
                    ))}
                </ul>
                <div className='btns'>
                  <Button variant="success" href="https://wa.me/+971581329990" target='_blank' className="contact-btn mt-3">
                       Contact Us for More Details
                </Button>
                  <Button variant="primary" onClick={openModal}  className="contact-btn mt-3">
                       Book Now
                </Button>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default ServiceDetailScreen;
