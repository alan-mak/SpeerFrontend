import React from 'react';

import { Howl } from 'howler';

import sample from '../../../audio/sample.mp3';

export default function Sound(prop) {
  
  const playPause = () => {
    if (!sound.playing()) {
      sound.play()
    } else {
      sound.pause()
    }
  }
  
  const sound = new Howl({
    src: [sample],
    onplay: true
  })
  const renderButton = () => {
    return(
      <>

      <button onClick={playPause}>BUTTON2</button>

      </>
    )
  }

  return (
    <>
    {renderButton()}
    </>
  )
}