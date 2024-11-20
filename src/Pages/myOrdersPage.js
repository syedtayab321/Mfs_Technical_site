import React, { useState, useEffect } from 'react';
import { Table, Spinner, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import './../css/orderspage.css';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userData = JSON.parse(localStorage.getItem('userData'));
  const fetchOrders = async (email) => {
    setLoading(true);
    try {
      const ordersRef = collection(db, 'Orders');
      const q = query(ordersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      const fetchedOrders = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(fetchedOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      alert('Failed to fetch orders.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      const email = userData.email;
          fetchOrders(email);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container className="orders-page">
      <Row>
        <Col>
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="page-header"
          >
            <h2>Your Orders</h2>
            <p>View all your orders associated with <strong>{userData.email}</strong>.</p>
          </motion.div>
        </Col>
      </Row>

      <Row>
        <Col>
          {loading ? (
            <div className="text-center my-5">
              <Spinner animation="border" />
              <p>Loading orders...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center my-5">
              <p>No orders found for <strong>{userData.email}</strong>.</p>
            </div>
          ) : (
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="orders-table"
            >
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={order.id}>
                      <td>{index + 1}</td>
                      <td>{order.name}</td>
                      <td>{order.phoneNumber}</td>
                      <td>{order.email}</td>
                      <td>{order.location}</td>
                      <td>{new Date(order.orderDate).toLocaleString()}</td>
                      <td>{order.serviceName}</td>
                      <td>{order.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </motion.div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default OrdersPage;
