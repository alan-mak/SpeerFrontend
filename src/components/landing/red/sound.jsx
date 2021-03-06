import React from 'react';

import { Howl } from 'howler';

import sample from '../../../audio/sample.mp3';
import speakerLeft from '../../../img/speaker-left.png';
import speakerRight from '../../../img/speaker-right.png';

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
        <img src={speakerLeft} alt="Left Speaker"className="speakerLeft" onClick={playPause}/>
        <img src={speakerRight} alt="Right Speaker" className="speakerRight" onClick={playPause}/>
      </>
    )
  }

  return (
    <>
      {renderButton()}
    </>
  )
}