import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import myImage from '../.././assets/img/myImage.jpg';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div id="about">
        <div className="about">
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image className="profile justify-content-end" alt="" src={myImage} thumbnail fluid />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className="align-items-start p-2 my-details rounded">
                  <h4 className= "text-center">Hi there! I am <strong>Marjia Zaman</strong></h4>
                  <br />A passionate programmer, born and brought up in Bangladesh. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
                  <br />
                  In 2015, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.
                  <br />
                  Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                  <br />
                  Along with that, I also help people as a COACH on their journey of becoming a professional programmer. 
                  <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                  <br /> <br />
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-success">
                          My Resume
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/akjha96" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                          GitHub
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/anand-kumar-jha-745798a4/" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default AboutMe;