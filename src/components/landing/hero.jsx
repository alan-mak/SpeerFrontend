import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './hero.scss'
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../img/taylor1.jpg';
import img2 from '../../img/taylor2.jpg';
import img3 from '../../img/taylor3.png';

export default function Hero(props) {



  return (
    <Carousel infiniteLoop autoPlay>
      <div>
        <img src={img1} alt="Taylor 1"/>
        <p className="legend">Taylor 1</p>
      </div>
      <div>
        <img src={img2} alt="Taylor 2"/>
        <p className="legend">Taylor 2</p>
      </div>
      <div>
        <img src={img3} alt="Taylor 3"/>
        <p className="legend">Taylor 3</p>
      </div>
    </Carousel>
  )
}