import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../pexels-vanessa-loring-5965658.jpg'
import CarouselImage2 from '../pexels-pixabay-70746.jpg'
import CarouselImage3 from '../pexels-mali-143133.jpg'

function CarouselFade() {
  return (
    <Carousel fade>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={CarouselImage1}
                alt="Photo by Vanessa Loring: slices of fruits beside green vegetables"
                height="600" />
        <Carousel.Caption>
            <h3>Order groceries for delivery or pickup today</h3>
            <p>Whatever you want from local stores, brought right to your door.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={CarouselImage2}
                alt="Photo by Pixabay: red strawberries"
                height="600" />
        <Carousel.Caption>
            <h3>Order groceries for delivery or pickup today</h3>
            <p>Whatever you want from local stores, brought right to your door.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={CarouselImage3}
                alt="Photo by mali maeder: orange carrots on table"
                height="600" />
        <Carousel.Caption>
            <h3>Order groceries for delivery or pickup today</h3>
            <p>Whatever you want from local stores, brought right to your door.</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;