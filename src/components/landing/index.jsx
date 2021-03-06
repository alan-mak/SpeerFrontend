import React from 'react';

import Hero from './hero/hero';
import Red from './red/red';
import Perks from './perks/perks';
import Review from './review/review';
import Get from './get/get';
import Nav from '../nav';
import Footer from '../footer'

import './style.scss'

export default function Landing(props) {

  return(
    <>
      <Nav />
      <Hero />
      <Red />
      <Perks />
      <Review />
      <Get />
      <div id="landing-foot">
        <Footer />
      </div>
    </>
  )
}