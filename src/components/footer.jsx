import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './footer.scss';

export default function Footer(props) {
  return (
    <div id="foot">
      <div className="email">
        <FontAwesomeIcon icon={faEnvelope}/> support@experienceconcerts.co
      </div>
      <div className="company">
        <h2 >EXP | CON</h2>
        <p>2019 &#169; All Rights Reserved | Speer Technologies Incorporated</p>
      </div>
    </div>
  )
}