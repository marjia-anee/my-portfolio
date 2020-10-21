import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/img/carousal/slide1.webp';
import image2 from '../../assets/img/carousal/slide2.webp';
import image3 from '../../assets/img/carousal/slide3.webp';
import ScrollDownPart from '../ScrollDownPart/ScrollDownPart';
import './CarouselPart.css';



const CarouselPart = () => {
    return (
      <>
        <Carousel controls={false} indicators interval={2500} pause={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={image1}
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={image2}
              alt="Second slide"
            />

            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={image3}
              alt="Third slide"
            />

          </Carousel.Item>
      </Carousel>
      <ScrollDownPart />
    </>
  );
};

export default CarouselPart;