import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { db } from '../../FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const FreeQuoteModal = ({ handleClose, show }) => {
   const userData = JSON.parse(localStorage.getItem('userData'))
  const [formData, setFormData] = useState({
    name:userData?.name ?? '',
    email:userData?.email ?? '',
    phone:userData?.phoneNumber ?? '',
    details: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const quotesCollection = collection(db, 'quotes');
      await addDoc(quotesCollection, formData);
      alert('Quote submitted successfully!');
      handleClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        details: '',
      });
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('Failed to submit quote. Please try again.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Request a Free Quote</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="phone" className="mt-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="details" className="mt-3">
            <Form.Label>Project Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe your project"
              value={formData.details}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit Quote
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FreeQuoteModal;
