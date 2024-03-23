import React, { useRef } from 'react'
import './reservetable.css'
import reserve_img from '../../assets/Reserve Img.svg';
import date from '../../assets/date.svg';
import time from '../../assets/time.svg';
import guest from '../../assets/guest.svg';
import name from '../../assets/name.svg';
import phone from '../../assets/phone.svg';
import email from '../../assets/mail.svg';
function ReserveTable() {
  const timeInput = useRef();
  const dateInput = useRef();
  const handleFocus = (element,type) => {
    element.current.type = type;
  }
  const handleBlur = (element) => {
    element.current.type = "text";
  }
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
              <input ref={dateInput} type="text" onFocus={()=>handleFocus(dateInput,"date")} onBlur={()=>handleBlur(dateInput)} id='date' name='date' placeholder='Date' autoComplete='off'/>
              <img src={date} alt="date" id="inner-date-image" />
            </div>
            <div className="timeAndGuest">
              <div className="input">
                <input ref={timeInput} type='text' onFocus={()=>handleFocus(timeInput,"time")} onBlur={()=>handleBlur(timeInput)} id='time' name='time' placeholder='Time' autoComplete='off'/>
                <img src={time} alt="time" id="inner-time-image" />
              </div>
              <div className="input">
                <input type="number" id='guest' name='guest' placeholder='Guest' autoComplete='off'/>
                <img src={guest} alt="guest" id="inner-guest-image" />
              </div>
            </div>
            <div className="input">
              <input type="text" id='name' name='name' placeholder='Your name' autoComplete='off'/>
              <img src={name} alt="name" id="inner-name-image" />
            </div>
            <div className="input">
              <input type="number" id='number' name='number' placeholder='Your phone' autoComplete='off'/>
              <img src={phone} alt="phone" id="inner-phone-image" />
            </div>
            <div className="emailAndButton">
              <div className="input">
                <input type="email" id='email' name='email' placeholder='Your email' autoComplete='off'/>
                <img src={email} alt="email" id="inner-email-image" />
              </div>
              <button type='button' id="reserve-table">Reserve</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default ReserveTable