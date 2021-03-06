import React from 'react';
import Button1 from '../button1';
import Button2 from '../button2';
import Nav from '../../nav';
import Sound from './sound'

import './red.scss'

export default function Red(props) {
  return(
    <div id='red'>
      <Nav/>
      <div className="button1-try">
        <Button1 />
      </div>
      <div className="button2-demo">
        <Button2 />
      </div>
      <div className="speaker">
        <Sound />
      </div>
      <div className="writeUp">
        <h1 style={{color:"white"}}>SUPERIOR SOUND</h1>
        <p>Experience live versions of your favourite songs</p>
      </div>
    </div>
  )
}