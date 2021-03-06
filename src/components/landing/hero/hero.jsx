import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './hero.scss'
import { Carousel } from 'react-responsive-carousel';

import Button1 from '../button1'

import img1 from '../../../img/image1.png';
import img2 from '../../../img/image2.png';
import img3 from '../../../img/image3.png';

export default function Hero(props) {



  return (
    <div id="hero">
      <div id="hero-liquid">
        <Button1 />
      </div>
      <Carousel infiniteLoop autoPlay showArrows={false} showThumbs=  {false} interval={10000} showStatus={false} dynamicHeight={true}  stopOnHover={false}>
        <div>
          <img src={img1} alt="image 1"/>
        </div>
        <div>
          <img src={img2} alt="image 2"/>
        </div>
        <div>
          <img src={img3} alt="image 3"/>
        </div>
      </Carousel>
    </div>
  )
}