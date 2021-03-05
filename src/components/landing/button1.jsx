import React from 'react';
import { useHistory } from 'react-router-dom';

import './button1.scss'

export default function Button1(props) {

  const history = useHistory();

  const redirect = () => {
    history.push('/pricing')
  }

  return (
    <button className="liquid" onClick={redirect}><p id="text-liquid">TRY IT NOW</p></button>
  )
}