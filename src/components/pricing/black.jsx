import React from 'react';

import Nav from '../nav';
import Button2 from '../landing/button2';

export default function Black(props) {
  const price = [
    { plan: "BASIC", time: "MONTHLY", price: "$9" },
    { plan: "ADVANCED", time: "YEARLY", price: "$99" },
    { plan: "PRO", time: "YEARLY", price: "$120" }
  ]
  return (
    <div id="black">
      <Nav colour='white' />
      <div className="writeUp">
        <div className="introduction">
          <h1>PRICING</h1>
          <p>Test our app today! Choose from three subscription based payment models.</p>
        </div>
        <div className="section">
          {price.map(obj => {
            return (
              <div className={obj.plan} style={{paddingRight: "4em"}}>
                <h3 style={{borderBottom: "solid"}}>{obj.plan}</h3>
                <h3>{obj.time}</h3>
                <h1>{obj.price}</h1>
                <div className="feature">
                  <ul>
                    <li>Very good</li>
                    <li>Amazing</li>
                    <li>Perfect job</li>
                    <li>Love this</li>
                    <li>It's so good</li>
                    <li>Features</li>
                  </ul>
                </div>
                <Button2 message="SELECT" path="payments" className="button2-pricing"/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}