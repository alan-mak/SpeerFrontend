import React from 'react';

import Black from './black';
import Footer from '../footer';
import './styles.scss'

export default function Pricing(props) {
  return(
    <div id="pricing">
      <Black />
      <div className="pricing-foot">
        <Footer/>
      </div>
    </div>
  )
}