import React,{useState}from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import '../../css/navbar.css';
import AuthModal from "./AuthModal";

const CustomNavbar = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);
  return (
   <>
       <AuthModal show={modalShow} handleClose={handleModalClose} />
      <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          Mfs Technical
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" variant="green" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/services" className="nav-link">Services</Nav.Link>
            <Nav.Link href="/portfolio" className="nav-link">Portfolio</Nav.Link>
            <Nav.Link href="/about" className="nav-link">About Us</Nav.Link>
            <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
            <Button onClick={()=>handleModalShow()} className='btn btn-success'>Login/SignUp</Button>
          </Nav>
          {/*<Button href="#quote" className="quote-button">Whatsapp</Button>*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  );
};

export default CustomNavbar;
