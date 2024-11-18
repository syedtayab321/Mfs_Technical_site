import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Container, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';

const OrderModal = ({ show, handleClose, serviceName, Price }) => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState({
    name:userData?.name ?? '',
    phoneNumber:userData?.phoneNumber ?? '',
    email:userData?.email ?? '',
    location:userData?.location ?? '',
    serviceName:serviceName,
    price:Price,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderId = new Date().getTime().toString();
      await setDoc(doc(db, 'Orders', orderId), {
        ...orderData,
        orderDate: new Date().toISOString(),
      });

      alert('Order saved successfully!');
      setOrderData({ name: '', phoneNumber: '', email: '', location: '' });
      handleClose();
    } catch (error) {
      alert('Failed to save the order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="order-modal">
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                className="modal-header"
              >
                <h3>Enter Your Details</h3>
                <button className="close-button" onClick={handleClose}>
                  X
                </button>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                className="form-container"
              >
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      value={orderData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone number"
                      name="phoneNumber"
                      value={orderData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={orderData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter location"
                      name="location"
                      value={orderData.location}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 mt-4" disabled={loading}>
                    {loading ? <Spinner animation="border" size="sm" /> : 'Save Order'}
                  </Button>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default OrderModal;
