import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './MainContent.css';

function MainContent() {
  return (
    <>
      <div className="carousel">
      <Carousel variant="dark">
        <Carousel.Item>
          <Link to = "/sevendays">
          <img
            className="d-block"
            src="img/main.png"
            style = {{ height : 500 }}       
            alt="First slide"
          />
          </Link>
        </Carousel.Item>
        
        <Carousel.Item>
          <Link to = "/details">
          <img
            className="d-block"
            src="img/main2.png"
            style = {{ height : 500 }}    
            alt="Second slide"
          />
          </Link>
        </Carousel.Item>
      </Carousel>
      </div>
    </>

  );
}

export default MainContent;