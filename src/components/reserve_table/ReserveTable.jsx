import React from 'react'
import './reservetable.css'
import reserve_img from '../../assets/Reserve Img.svg';
import date from '../../assets/date.svg';
import time from '../../assets/time.svg';
import guest from '../../assets/guest.svg';
import name from '../../assets/name.svg';
import phone from '../../assets/phone.svg';
import email from '../../assets/mail.svg';
function ReserveTable() {
  return (
    <div className="reserve-table">
      <div id="reserve-table-container">
        <h1 id="reserve-table-headline">Reserve a Table</h1>
        <section id="reserve-table-left">
          <img src={reserve_img} alt="reserve_image" />
        </section>
        <section id="reserve-table-right">
          <form id="reserve-table-form">
            <div className="input">
              <input type="date" id='date' name='date' placeholder='Date' autoComplete='off'/>
              <img src={date} alt="date" />
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default ReserveTable