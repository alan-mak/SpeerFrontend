import React, { useState } from 'react';

import './nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav(props) {
  const [menu, setMenu] = useState(false);

  const navItem = [{
    path:"/pricing",
    content:"PRICING"
  },{
    path:"/perks",
    content:"PERKS"
  }, {
    path:"/",
    content:"WHAT IS IT"
  }
  ]

  return (
    <div className="burger">
      <div className={menu ? 'show' : 'hide'} style={ menu? {color:`${props.colour}`} : {color:`white`}}>
        <FontAwesomeIcon icon={faBars}  onClick={()=> {
          menu ? (setMenu(false)): (setMenu(true))
        }} /> EXP | CON
      </div>
      <ul className={menu ? 'ul--show': 'ul--hide'}>
        {navItem.map(item => <li>
          <a href={item.path}>{item.content}</a>
          </li>)}
      <div className="circle" />
      </ul>
    </div>
  )
}