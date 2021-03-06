import React from 'react';
import Button1 from '../button1';
import Nav from '../../nav';

import './perks.scss';
import '../red/red.scss';

export default function Perks(props) {
  return (
    <div id="perks">
      <Nav cirColour="#5EE2E9"/>
      <div className="button1-try">
        <Button1 />
      </div>
      <div className="writeUp">
        <h1>PERKS</h1>
        <div className="content">
          <div id="sub1">            
            <h3>Subscription Payment Model</h3>
            <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </div>
          <div id="sub2">            
            <h3>No Fee Cancellation Policy</h3>
            <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </div>
          <div id="sub3">            
            <h3>Subscription Payment Model</h3>
            <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </div>
        </div>
      </div>
    </div>
  )
}