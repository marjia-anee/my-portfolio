import React from 'react';
import { Button, Col, Jumbotron, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="mailto:marjiazaman@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-danger" title="marjiazaman@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.linkedin.com/in/marjia-zaman-212459115/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>
              
              <div className="m-2">
                <a href="https://github.com/marjia-anee" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>
              
              <div className="m-2">
                <a href="https://medium.com/@marjiazaman" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-info" title="Let's check some blogs!">
                    <i className="fab fa-medium"></i> Medium.com
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.facebook.com/marjia.anee/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="Say hello on FB">
                    <i className="fab fa-facebook-square"></i> FaceBook
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
};

export default Contact;