import React from 'react';
import { Button, Card, CardDeck, Container} from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
      return (
            <div id="blog">
                  <h1 className="pt-3 text-center font-details-b pb-3">BLOGS</h1>
          <Container>

                  <CardDeck className = "card-style">
                  
                        <Card className= "focus mt-2 mb-2">
                        
                        <Card.Img variant="top" src="https://miro.medium.com/max/700/1*ypU_4erZ0E2b2PDQg9P4Zw.jpeg" />
                        <Card.Body>
                              <Card.Title>Basic Javascript</Card.Title>
                              <Card.Text>
                              Javascript has been the most used programming language for so many years now. I am learning Javascript, here I created a roughly described important...
                              </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://medium.com/@marjiazaman/10-interesting-things-in-basic-javascript-f35c9b582b18" target="_blank" rel="noopener noreferrer">
                        <Button className="card-button" variant="outline-info">
                          Read More
                        </Button>
                        </a>
                        </Card.Footer>
                        
                        </Card>
                      
                        <Card  className= "focus mt-2 mb-2">
                        
                        <Card.Img variant="top" src="https://miro.medium.com/max/700/1*lvDFebquohDMgpdonDgjNQ.png" />
                        <Card.Body>
                              <Card.Title>All About React Router</Card.Title>
                              <Card.Text>
                              React Router is the standard routing library for React.The react-router library is now split into three separate packages...
                              </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://medium.com/@marjiazaman/all-about-react-router-1d8c5778053e" target="_blank" rel="noopener noreferrer">
                        <Button className="card-button" variant="outline-info">
                          Read More
                        </Button>
                        </a>
                        </Card.Footer>
                        
                        </Card>
                        <Card  className= "focus mt-2 mb-2">
                        
                        <Card.Img variant="top" src="https://miro.medium.com/max/700/1*ypU_4erZ0E2b2PDQg9P4Zw.jpeg" />
                        <Card.Body>
                              <Card.Title>Basic Javascript</Card.Title>
                              <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                              </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://medium.com/@marjiazaman/10-interesting-things-in-basic-javascript-f35c9b582b18" target="_blank" rel="noopener noreferrer">
                        <Button className="card-button" variant="outline-info">
                          Read More
                        </Button>
                        </a>
                        </Card.Footer>
                        
                        </Card>
                  </CardDeck>

                  
          </Container>
      </div>
      );
};

export default Blogs;