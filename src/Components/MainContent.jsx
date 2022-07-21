import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MainContent() {
  return (
    <>
    <div className="carousel">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src="img/main.png"
          style = {{ height : 500 }}       
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="img/main2.png"
          style = {{ height : 500 }}    
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </>

  );
}

export default MainContent;