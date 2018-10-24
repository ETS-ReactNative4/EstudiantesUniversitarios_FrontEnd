import React, { Component } from 'react';
import '../styles/CarouselImages.css';
import {Carousel, Image} from "react-bootstrap";

class CarouselImages extends Component {
  render() {
    return (
      <div className="CarouselImages container">

          {/* ======================================================================== */}
          {/* CARRUSEL DE IMAGENES */}
          <Carousel>
              <Carousel.Item>
                  <Image width={720} height={480} className="asdasd" src={require('../resources/pastas1.jpg')} />
                  <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                  <Image width={720} height={480} className="asdasd" src={require('../resources/pastas3.jpeg')} />
                  <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                  <Image width={720} height={480} className="asdasd" src={require('../resources/pastas10.jpg')} />
                  <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
          {/* ======================================================================== */}

      </div>
    );
  }
}

export default CarouselImages;
