import React from 'react';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import Tilt from "react-tilt";
import './Experience.css';


const Experience = () => {
    return (
        <div id="experience">
        <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
        <Jumbotron className="jumbo-style">
          <Container>
            <Tilt options={{ max: 25 }}>
              <Card>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                  {/* <Card.Img variant="top" className="img-resize" src={} alt="Accenture logo" /> */}
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    {/* <Card.Title className="text-center">Associate Software Engineer</Card.Title> */}
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style ">Quality Assurance Specialist</strong>
                      <br />
                      <strong>Itbzinc</strong> <br/> <small>N Miami Ave suite 230, Miami, FL 33127</small>
                      <br />
                      <strong>Duration:</strong> March 2019 - May 2020
                      <br/>
                      <strong>Job Type:</strong> Full-Time
                      <br/>
                      <strong>Job Nature:</strong> Remote


                      {/* <strong> Description </strong>
                      <ul className="text-left">
                        <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                        <li><strong>Developed</strong> automation system to create SQL bulk query scripts that 
                          increased efficiency by 80% and decreased working hours from 4 hours to 30 mins per task.
                        </li>
                        <li><strong>Provided</strong> application maintenance while working as `Production Support`. 
                        </li>
                        <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                        to the business requirements.</li>
                        <li><strong>Co-created</strong> React Document used as a guide for new developers.</li>
  
                      </ul>
                       */}
                      
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron>
      </div>
    );
};

export default Experience;