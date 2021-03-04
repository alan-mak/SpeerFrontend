import React from 'react';

import './nav.scss'

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
      EXP | CON
      <ul>
        {navItem.map(item => <li>
          <a href={item.path}>{item.content}</a>
          </li>)}
      </ul>
    </div>
  )
}