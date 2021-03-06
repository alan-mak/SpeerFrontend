import React from 'react';

import Nav from '../../nav';
import Button2 from '../button2';
import speaker from '../../../img/speaker3.png';

import './review.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Review(props) {
  return (
    <div id="review">
      <Nav colour="#5EE2E9" />
      <div className="button2-try">
        <Button2 message={"TRY IT NOW"} />
      </div>
      <div className="speakers">
        <img src={speaker} />
      </div>
      <div className="writeUp">
        <h1>REVIEWS</h1>
        <div className="content">
          <div className="sub1">
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h3>ARTIST</h3>
            <p>"Love it, it's the Best. I can't live without it!"</p>
          </div>
          <div className="sub2">
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h3>PRODUCER</h3>
            <p>"Love it, it's the Best. I can't live without it!"</p>
          </div>
          <div className="sub3">
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h3>MUSIC FAN</h3>
            <p>"Love it, it's the Best. I can't live without it!"</p>
          </div>
        </div>
      </div>
    </div>
  )
}