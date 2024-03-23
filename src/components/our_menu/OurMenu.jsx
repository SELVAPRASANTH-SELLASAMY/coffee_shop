import React from 'react'
import './ourmenu.css'
import vector from '../../assets/Vector 4.svg'
import arrow from '../../assets/mdi_arrow-bottom-right-bold-box-outline.svg'
function OurMenu() {
  const MenuArray = [
    {
      id:1,
      cost:40,
      name:"Chocolate"
    },
    {
      id:2,
      cost:25,
      name:"Double ES"
    },
    {
      id:3,
      cost:45,
      name:"Caramel"
    },
    {
      id:4,
      cost:50,
      name:"Doppio"
    },
    {
      id:5,
      cost:30,
      name:"Expresso"
    },
    {
      id:6,
      cost:30,
      name:"Cappuccino"
    },
    {
      id:7,
      cost:25,
      name:"Mocha"
    },
    {
      id:8,
      cost:25,
      name:"Latte"
    }
  ];
  
  return (
    <div className="popular-menu">
      <h1>Popular Menu</h1>
      <div className="center-glow"></div>
      <div className="menu-wrapper">
        {
          MenuArray.map((obj)=>(
            <div style={{"--i":`${obj.id}`}} key={obj.id} id='menu-1' className="menu">
              <div className="info">
                <p className="cost">&#36;{obj.cost}</p>
                <p className="menu-name">{obj.name}</p>
              </div>
              <img src={vector} alt="vector" />
            </div>
          ))
        }
      </div>
      <div id="our-menu">
        <h2>Our Menu</h2>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  )
}

export default OurMenu