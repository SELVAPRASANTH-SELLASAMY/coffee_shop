import React, { useEffect, useRef } from 'react'
import './recommended.css'
import Arabica from '../../assets/arabica.svg';
import HouseBlend from '../../assets/house blend.svg';
import Robusta from '../../assets/Robusta.svg';
import phInfo from '../../assets/ph_info.svg';
import cart from '../../assets/cart.svg';
import ArrowButton from '../../assets/arrow.svg';
function Recommended() {
  const recommendationArray = [
    {
      id:1,
      src:Arabica,
      item_name:"Arabica"
    },
    {
      id:2,
      src:HouseBlend,
      item_name:"House Blend"
    },
    {
      id:3,
      src:Robusta,
      item_name:"Robusta"
    },
    {
      id:4,
      src:Arabica,
      item_name:"Arabica"
    },
    {
      id:5,
      src:HouseBlend,
      item_name:"House Blend"
    },
    {
      id:6,
      src:Robusta,
      item_name:"Robusta"
    },
    {
      id:7,
      src:Arabica,
      item_name:"Arabica"
    },
    {
      id:8,
      src:HouseBlend,
      item_name:"House Blend"
    },
    {
      id:9,
      src:Robusta,
      item_name:"Robusta"
    },
    {
      id:10,
      src:Robusta,
      item_name:"Robusta"
    }
  ];
  const scrollElement = useRef();
  var initial = useRef(50);
  useEffect(()=>{
    const scrollInterval = setInterval(()=>{
      scrollElement.current.scrollBy({left:initial.current,behavior:"smooth"});
      initial.current+=50;
      if(initial.current >= 300){
        scrollElement.current.scrollBy({left:-1000,behavior:"smooth"});
        initial.current = 50;
      }
    },[2000]);
    return(() => clearInterval(scrollInterval));
  },[])

  const scrollLeft = () => {
    if(initial.current > 50){
      scrollElement.current.scrollBy({left:(50-initial.current),behavior:"smooth"});
      initial.current -= 50;
    }
  }
  const scrollRight = () => {
    if(initial.current < 300){
      scrollElement.current.scrollBy({left:(initial.current-50),behavior:"smooth"});
      initial.current += 50;
    }
  }
  return (
    <div className="recommended">
      <h1 id="recommended-heading">Recommended</h1>
      <section ref={scrollElement} className="recommended-items-container">
        {
          recommendationArray.map((obj)=>(
              <div key={obj.id} className="item">
                <figure id="reference-image">
                  <img id='product' src={obj.src} alt={obj.item_name} />
                  <img id='phInfo' src={phInfo} alt="phInfo" />
                  <img src={cart} alt="cart" id="cart" />
                </figure>
                <figcaption>
                  <div className="item-name">{obj.item_name}</div>
                  <div className="dark-roast">Dark Roast</div>
                </figcaption>
              </div>
          ))
        }
      </section>
      <div className="recommendation-buttons">
        <figure className="prev-btn">
          <img onClick={()=>scrollLeft()} id='prev-btn' src={ArrowButton} alt="go previous" />
        </figure>
        <figure className="next-btn">
          <img onClick={()=>scrollRight()} id='next-btn' src={ArrowButton} alt="go next" />
        </figure>
      </div>
    </div>
  )
}

export default Recommended