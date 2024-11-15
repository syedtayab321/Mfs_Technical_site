import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FreeQuoteModal from "../commonComponents/FreeQuoteModal";
const HeroSection = ()=> {
     const [show, setShow] = useState(false);
     const handleShow = () => setShow(true);
     const handleClose = () => setShow(false);
    return (
         <>
           <FreeQuoteModal show={show} handleClose={handleClose} />
           <section className="hero-section">
                <Container className='hero-main'>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <h1>Expert Renovation Services in Dubai</h1>
                      <p>Transforming spaces with precision and excellence. Let us help you create your dream space!</p>
                      <Button onClick={()=>handleShow()} className="hero-button">Get a Free Quote</Button>
                    </Col>
                  </Row>
                </Container>
              </section>
         </>
    );
}

export default HeroSection;
