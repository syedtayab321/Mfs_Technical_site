import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../../css/navbar.css';
import AuthModal from "./AuthModal";
import logo from '../../assets/images/mfs-logo.png';

const CustomNavbar = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  return (
    <>
      <AuthModal show={modalShow} handleClose={handleModalClose} />
      <Navbar expand="lg" className="custom-navbar" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt="Mfs Technical Logo"
              className="navbar-logo"
              style={{ width: "80px", height: "80px", marginRight: "10px" }}
            />
            <span>Mfs Technical</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="nav-links">
              <Nav.Link href="/" className="nav-link">Home</Nav.Link>
              <Nav.Link href="/services" className="nav-link">Services</Nav.Link>
              <Nav.Link href="/portfolio" className="nav-link">Portfolio</Nav.Link>
              <Nav.Link href="/about" className="nav-link">About Us</Nav.Link>
              <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
              <Button onClick={handleModalShow} className="btn btn-success">Login/SignUp</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
