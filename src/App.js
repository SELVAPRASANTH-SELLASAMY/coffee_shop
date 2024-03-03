import React from 'react'
import {Navbar,Blog,Footer,Hero,Offer,OurMenu,OurStory,Recommended,ReserveTable,Review,Services,Subscribe} from './components';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Navbar/>
      <OurStory/>
      <Services/>
      <Offer/>
      <ReserveTable/>
    </div>
  )
}

export default App