import React from 'react';

import Hero from './hero/hero';
import Red from './red/red';
import Perks from './perks/perks'

export default function Landing(props) {

  return(
    <>
      <Hero />
      <Red />
      <Perks />
    </>
  )
}