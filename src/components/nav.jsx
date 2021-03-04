import React from 'react';

import './nav.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Nav () {

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
      <FontAwesomeIcon icon={faBars} /> EXP | CON
      <ul>
        {navItem.map(item => <li>
          <a href={item.path}>{item.content}</a>
          </li>)}
      </ul>
    </div>
  )
}