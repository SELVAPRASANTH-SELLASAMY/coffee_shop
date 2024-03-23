import React from 'react'
import './offer.css'
import proef_packet from '../../assets/Proefpakket_page-0003 2 (no bg).svg';
function Offer() {
  return (
    <div className="offer">
      <section id="offer-frame">
        <div className="left-side">
          <h1 id='heading'>Offer</h1>
          <h1 id="offer">up to <span>50%</span> off </h1>
          <p className='golden-gradient' id="offer-details">
          At our cafe, we take pride in providing our customers with the best coffee around. Our carefully-selected coffees come from some of the most renowned coffee growing regions in the world, ensuring that each cup is unrivaled in flavor and freshness. 
          </p>
          <button id="shop-now">Shop Now</button>
        </div>
        <div className="right-side">
          <img src={proef_packet} alt="proef-packet" />
        </div>
      </section>
    </div>
  )
}

export default Offer