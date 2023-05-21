import React from 'react'
import './Contact.css'
import Nav from './navbar/Nav'
import Footer from './footer/Footer'

const Contact = () => {
  return (
    <div>
      <Nav />
        <div className='sweet'>
            <h4>Feel Free To Contact us.</h4>
            <img src='https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=600' alt='#'></img>
        </div>

        <div className='goal'>
            <div className='filmore'>
                <h4>Where To Find Us</h4>
                <p>1258, filmore avenue Bloomington California.</p>
            </div>

            <div className='avn'>
                <h4>Contact Info</h4>
                <p>Ayo16gold@gmail.com. +2349020530264</p>
            </div>
        </div>

        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1" />
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<div class="mb-3">
  <label for="basic-url" class="form-label">Your Email Address</label>
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
  </div>
  <div class="form-text" id="basic-addon4">Your Message</div>
</div>

<div class="input-group mb-3">
  <span class="input-group-text"></span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" /> 
  <span class="input-group-text"></span>
</div>

<button class="btn btn-primary" type="button">Submit</button>

<Footer />


    </div>
  )
}

export default Contact