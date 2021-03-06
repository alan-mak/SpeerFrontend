import React from 'react';
import Button1 from '../button1';
import Button2 from '../button2';
import Nav from '../../nav';

import './red.scss'

export default function Red(props) {
  return(
    <div id='red'>
      <Nav/>
      <div id="button1-try">
        <Button1 />
      </div>
      <div id="button2-demo">
        <Button2 />
      </div>
    </div>
  )
}