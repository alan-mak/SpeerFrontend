import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './hero.scss'
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../img/taylor1.jpg';
import img2 from '../../../img/taylor2.jpg';
import img3 from '../../../img/taylor3.png';

export default function Hero(props) {



  return (
    <Carousel infiniteLoop autoPlay showArrows={false} showThumbs={false} interval={10000} showStatus={false} dynamicHeight={true} stopOnHover={false}>
      <div>
        <img src={img1} alt="Taylor 1"/>
      </div>
      <div>
        <img src={img2} alt="Taylor 2"/>
      </div>
      <div>
        <img src={img3} alt="Taylor 3"/>
      </div>
    </Carousel>
  )
}