import React, { useState } from 'react';
import './button2.scss'

export default function Button2(props) {

  const [mouse, setMouse] = useState({x:0, y:0})
  
  function onMouseMove(event) {
    setMouse({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
  }
  const angle = (Math.atan((mouse.y - 38) / (mouse.x - 112)) * 180) / Math.PI
  const sty = {background: `linear-gradient(${angle}deg, #fff, #000)`}

  return(
    <>
      <button className="hov" onMouseMove={onMouseMove} style={sty}>{props.message}</button>
    </>
  )
}