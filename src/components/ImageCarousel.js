import React from "react";
import { Carousel } from "react-bootstrap";
import "./ImageCarousel.css";
import image1 from "../logopack/mockup.png";
import image2 from "../logopack/8.png";
import image3 from "../logopack/9.png";

const ImageCarousel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>Prémium termékek</h3>
            <p>Termékeink teljesen egyediek, sehol máshol nem találja meg őket.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Prémium minőség</h3>
            <p>Termékeink a legmagasabb minőségűek, és mindenféle szórakozásnak és játéknak ellenállnak.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Tökéletes illeszkedés</h3>
            <p>
            Mivel mi magunk is kutyatulajdonosok vagyunk, tudjuk, mennyire fontos a tökéletes illeszkedés a kutya kényelme szempontjából.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
