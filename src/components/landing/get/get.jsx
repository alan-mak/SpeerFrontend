import React from 'react';
import Nav from '../../nav';
import Button1 from '../button1'
import './get.scss';

export default function Get(props) {
  return (
    <div id="get">
      <Nav cirColour="blue"/>
      <div className="button1-try">
        <Button1 />
      </div>
      <div className="writeUp">
        <h1>GET EXP | CON NOW</h1>
        <p>Purchase and download the app</p>
      </div>
    </div>
  )
}