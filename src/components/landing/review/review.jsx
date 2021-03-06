import React from 'react';

import Nav from '../../nav';
import Button2 from '../button2';
import speaker from '../../../img/speaker3.png';

import './review.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Review(props) {
  const reviewers = ['ARTIST', 'PRODUCER', 'MUSIC FAN']
  return (
    <div id="review">
      <Nav colour="#5EE2E9" />
      <div className="button2-try">
        <Button2 message={"TRY IT NOW"} path="pricing"/>
      </div>
      <div className="speakers">
        <img src={speaker} alt="Blue speaker"/>
      </div>
      <div className="writeUp">
        <h1>REVIEWS</h1>
        <div className="content">
          <div className="sub">
            {reviewers.map(person => {
              return (
                <div className={person}>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <h3>{person}</h3>
                  <p>"Love it, it's the Best. I can't live without it!"</p>
                </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  )
}