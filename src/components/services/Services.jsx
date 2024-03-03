import React from 'react'
import './services.css'
import eq from '../../assets/eq.svg'
import tc from '../../assets/tc.svg'
import ta from '../../assets/ta.svg'
import bv from '../../assets/bv.svg'
import ps from '../../assets/ps.svg'
function Services() {
  return (
    <div className="our-services">
      <h1>Services</h1>
      <section id="services-icons">
        <div id="eq">
          <img src={eq} alt="equipment" />
          <p className='golden-gradient'>Equipment</p>
        </div>
        <div id="tc">
          <img src={tc} alt="type-of-coffee" />
          <p className='golden-gradient'>Type Of Coffee</p>
        </div>
        <div id="ta">
          <img src={ta} alt="take-a-way" />
          <p className='golden-gradient'>Take A Way</p>
        </div>
        <div id="bv">
          <img src={bv} alt="beans-varient" />
          <p className='golden-gradient'>Beans Varient</p>
        </div>
        <div id="ps">
          <img src={ps} alt="pastry" />
          <p className='golden-gradient'>Pastry</p>
        </div>
      </section>
    </div>
  )
}

export default Services