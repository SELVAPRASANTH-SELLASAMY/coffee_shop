import React from 'react'
import './hero.css'
import heroImg from '../../assets/Hero Img.svg'
import coffees from '../../assets/Coffees.svg'
import cup1 from '../../assets/Cup1.svg'
import moto from '../../assets/healthicons_vespa-motorcycle-outline.svg';
function Hero() {
  return (
    <div className="hero">
      <div className="glow1"></div>
      <div className="glow2"></div>
      <section id="left-side">
          <h1 className="elza-coffee">Elza coffee</h1>
          <p className="golden-gradient good-mood">
            Today's good mood is sponsored by coffee <br />
            search for your coffee now
          </p>
          <div className="buttons">
            <button id="shop-now"><span className="golden-gradient">Shop Now</span></button>
            <button id="catelog"><span className="golden-gradient">Catalog</span></button>
          </div>
        <div id="card">
          <img id='cup1' src={cup1} alt="cup1" />
          <div className="cards-right-part">
            <p className='golden-gradient'>But first coffee</p>
            <button id="hurry-up">
              <span className='golden-gradient'>Hurry Up</span>
              <img id='moto' src={moto} alt="moto" />
            </button>
          </div>
        </div>
      </section>
      <section className="right-side">
        <div className="heroImg">
          <img id="cupImg" src={heroImg} alt="heroImg" />
          <img id="coffees" src={coffees} alt="coffees" />
        </div>
      </section>
    </div>
  )
}

export default Hero