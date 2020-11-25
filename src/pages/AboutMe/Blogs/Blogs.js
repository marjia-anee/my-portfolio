import React from 'react';
import { Button, Card, CardDeck, Container} from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
      return (
            <div id="blogs">
                  <h1 className="pt-3 text-center font-details-b pb-3">BLOGS</h1>
          <Container>

                  <CardDeck className = "card-style">
                  
                        <Card className= "focus mt-2 mb-2">
                        
                        <Card.Img variant="top" src="https://miro.medium.com/max/700/1*2tCT3xSJfb-o9AiNoCUDNw.jpeg" />
                        <Card.Body>
                              <Card.Title>Getting Started with JavaScript</Card.Title>
                              <Card.Text>
                              In this article, I tried to write about very basic key points of JavaScript:
Javascript is a beginner-friendly, dynamic, scripting programming language that can add interactivity to a website. Before...
                              </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://marjiazaman.medium.com/getting-started-with-javascript-b53560828ce2" target="_blank" rel="noopener noreferrer">
                        <Button className="card-button" variant="outline-info">
                          Read More
                        </Button>
                        </a>
                        </Card.Footer>
                        
                        </Card>
                      
                        <Card  className= "focus mt-2 mb-2">
                        
                        <Card.Img variant="top" src="https://miro.medium.com/max/700/1*44aJtUU8arzFDn_7QjzMyw.png" />
                        <Card.Body>
                              <Card.Title>All about React Hooks</Card.Title>
                              <Card.Text>
                              In my view, Hooks is one of the most useful methods of React. React Hooks are in-built functions that allow developers to use state and lifecycle methods inside the components...
                              </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://marjiazaman.medium.com/all-about-react-hooks-21aa7de51aba" target="_blank" rel="noopener noreferrer">
                        <Button className="card-button" variant="outline-info">
                          Read More
                        </Button>
                        </a>
                        </Card.Footer>
                        
                        </Card>
                        <Card  className= "focus mt-2 mb-2">
                        
                        <Card.Img variant="top" src="https://miro.medium.com/max/650/1*2u1Nhzr9eF-HE_yX9Ax0gQ.jpeg" />
                        <Card.Body>
                              <Card.Title>A few words on React JSX</Card.Title>
                              <Card.Text>
                              React is a declarative, efficient, and flexible JavaScript library for building user interfaces. But instead of using regular JavaScript, React code should be written in something called JSX..
                              </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://marjiazaman.medium.com/a-few-words-on-react-jsx-acb10b6f60a4" target="_blank" rel="noopener noreferrer">
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