import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './../../css/authModal.css';

const AuthModal = ({ show, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  // Toggle between Login and Sign Up forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Animation variants for fade-in effects
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="auth-modal">
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
                <h3>{isLogin ? 'Login' : 'Sign Up'}</h3>
                <button className="close-button" onClick={handleClose}>X</button>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                className={`form-container ${isLogin ? 'login' : 'signup'}`}
              >
                {/* Login Form */}
                {isLogin ? (
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 mt-4">
                      Login
                    </Button>
                  </Form>
                ) : (
                  // Sign Up Form
                  <Form>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter phone number" required />
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="Enter your address" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 mt-4">
                      Sign Up
                    </Button>
                  </Form>
                )}

                <motion.div
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  className="toggle-form"
                >
                  <p onClick={toggleForm} className="toggle-link">
                    {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
                  </p>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
