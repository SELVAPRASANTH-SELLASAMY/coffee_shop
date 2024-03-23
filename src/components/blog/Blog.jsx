import React from 'react'
import './blog.css'
import cofee_frame from '../../assets/coffee Frame.svg'
function Blog() {
  return (
    <div className="blog">
      <h1 id="blog-heading">Our Blog</h1>
      <section className="blog-container">
        <div className="blog-item">
          <h3 id="blog-item-heading">How to make a great coffee</h3>
          <p id="blog-description">
          Making a cup of coffee doesn't have to be complicated. Start by gathering your supplies: coffee grounds, water, and a French press, mug or other vessel. Next, measure out 2 tablespoons of ground coffee per 8 ounces of water. If you're using a French press, pour the measured grounds into the bottom of the press followed by hot water (between 195-205 degrees Fahrenheit). Let sit for three minutes before gently pushing down on the filter to trap the grounds at the bottom; this will create an intense flavor with slightly heavier body than filtered methods. If you have neither a French press nor filter, just pour your measured grounds directly into a mug or vessel and top with piping hot water. Give it a stir and let it sit for 3-4 minutes before consuming--but don't leave it too long as this method won't produce quite as bold of a flavor as either filtering or pressing would!
          </p>
          <figure>
            <img src={cofee_frame} alt="coffee frame" />
          </figure>
        </div>
      </section>
    </div>
  )
}

export default Blog