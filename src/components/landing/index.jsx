import React from 'react';

import Hero from './hero/hero';
import Red from './red/red';
import Perks from './perks/perks';
import Review from './review/review';

export default function Landing(props) {

  return(
    <>
      <Hero />
      <Red />
      <Perks />
      <Review />
    </>
  )
}