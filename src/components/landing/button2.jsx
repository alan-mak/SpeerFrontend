import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './button2.scss'

export default function Button2(props) {

  const [mouse, setMouse] = useState({x:0, y:0})
  const history = useHistory();
  
  function onMouseMove(event) {
    setMouse({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
  }
  const angle = (Math.atan((mouse.y - 38) / (mouse.x - 112)) * 180) / Math.PI
  const sty = {background: `linear-gradient(${angle}deg, #fff, #000)`}

  const redirect = () => {
    history.push(`/${props.path}`)
  }

  return(
    <>
      <button className="hov" onMouseMove={onMouseMove} onClick={redirect} style={sty}>{props.message}</button>
    </>
  )
}