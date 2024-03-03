import React, { useEffect, useRef, useState } from 'react'
import './ourstory.css'
import our_story_img from '../../assets/Image-ourstory.svg'
function OurStory() {
  const showMoreContent = useRef();
  const [showMore,setShowMore] = useState(false);
  useEffect(()=>{
    showMoreContent.current.style.display = showMore ? "block" : "none";
  },[showMore]);
  return (
    <div className="our-story">
      <section id="big-frame">
        <img src={our_story_img} alt="our_story_image" id="our-story-img" />
        <p id="text-our-story">Our Story</p>
        <p className='golden-gradient' id="elisa-is">
        Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. <span ref={showMoreContent} id="view-more">
        On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!
        </span>
        </p>
        <p className='golden-gradient' id='more' onClick={()=>setShowMore(!showMore)}><span className="more">More</span></p>
      </section>
      <section id="active-bubble">
        <div id="bubble"></div>
        <div id="bubble"></div>
        <div id="bubble"></div>
      </section>
    </div>
  )
}

export default OurStory