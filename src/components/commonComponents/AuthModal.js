import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Container, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './../../css/authModal.css';
import { signUp, signIn } from '../../BackendServices/Auth';
import {useNavigate} from "react-router-dom";

const AuthModal = ({ show, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    location: '',
  });
  const navigate = useNavigate();
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const response = await signIn(formData.email, formData.password);
        if (response.success) {
          localStorage.setItem('userData', JSON.stringify(response.user));
          alert('Login successful!');
          handleClose();
          navigate('/');
        } else {
          alert(response.error);
        }
      } else {
        // Signup
        const response = await signUp(
          formData.name,
          formData.email,
          formData.phoneNumber,
          formData.password,
          formData.location
        );
        if (response.success) {
          console.log('Signup successful:', response.user);
          alert('Signup successful!');
          handleClose();
        } else {
          alert(response.error);
        }
      }
    } catch (error) {
      console.error('Error during submission:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
                <button className="close-button" onClick={handleClose}>
                  X
                </button>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                className={`form-container ${isLogin ? 'login' : 'signup'}`}
              >
                <Form onSubmit={handleSubmit}>
                  {/* Login Form */}
                  {isLogin ? (
                    <>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </>
                  ) : (
                    // Sign Up Form
                    <>
                      <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          value={formData.email}
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
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </>
                  )}

                  <Button variant="primary" type="submit" className="w-100 mt-4" disabled={loading}>
                    {loading ? <Spinner animation="border" size="sm" /> : isLogin ? 'Login' : 'Sign Up'}
                  </Button>
                </Form>

                <motion.div
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  className="toggle-form"
                >
                  <p onClick={toggleForm} className="toggle-link">
                    {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
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
