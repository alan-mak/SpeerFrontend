import React, { useState } from 'react';
import './button2.scss'

export default function Button2(props) {

  const [mouse, setMouse] = useState({x:0, y:0})
  
  function onMouseMove(event) {
    setMouse({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
  }
  const angle = (Math.atan(mouse.y / mouse.x) * 180) / Math.PI
  const sty = {background: `linear-gradient(${angle}deg, #fff, #000)`}

  return(
    <>
      <button className="hov" onMouseMove={onMouseMove} style={sty}>SEE DEMO</button>
    </>
  )
}