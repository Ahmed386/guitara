import React from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h4 className="fw-bold mb-3">Fixyland</h4>
            <p>
              Nam libero tempore cum soluta nobis eseligendi optio cumque nihil
              impedit quo minus maxime placeat facere.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaBehance />
              </a>
            </div>
          </Col>

          {/* Explore Links */}
          <Col lg={2} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">EXPLORE</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">About Hotel</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Hotel Staff</a>
              </li>
              <li>
                <a href="#">Latest News</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">CONTACT</h5>
            <p>
              7631 Sabina Park, 115 Devon Isle,
              <br />
              Louisiana, USA
            </p>
            <p className="mb-1">(+1) 987 654 3210</p>
            <p>info@domain.com</p>
          </Col>

          {/* Newsletter */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">NEWSLETTER</h5>
            <Form>
              <InputGroup className="mb-3">
                <Form.Control type="email" placeholder="Ex. info@domain.com" />
                <Button variant="warning">
                  <FaPaperPlane />
                </Button>
              </InputGroup>
              <Form.Check
                type="checkbox"
                label="I agree to all terms and policies"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
