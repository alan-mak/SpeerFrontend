import React from 'react';
import Button1 from '../button1';
import Button2 from '../button2';
import Nav from '../../nav';

import './red.scss'

export default function Red(props) {
  return(
    <div id='red'>
      <Nav/>
      <Button1 />
      <Button2 />
    </div>
  )
}