import React, { useState } from 'react';

import './nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav () {
  const [menu, setMenu] = useState(false);

  const navItem = [{
    path:"/perks",
    content:"PERKS"
  },{
    path:"/pricing",
    content:"PRICING"
  }, {
    path:"/",
    content:"WHAT IS IT"
  }
  ]

  return (
    <div className="burger">
      <FontAwesomeIcon icon={faBars}  onClick={()=> {
        menu ? (setMenu(false)): (
          setMenu(true)
          )
      }}/> EXP | CON
      <ul className={menu ? 'ul--show': 'ul--hide'}>
        {navItem.map(item => <li>
          <a href={item.path}>{item.content}</a>
          </li>)}
      </ul>
    </div>
  )
}