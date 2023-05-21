import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <footer>
        <div className='first'>
            <div className="col1">
                <i class="fa-solid fa-bolt"></i>
                <span>@Y</span>
            </div>

            <div className='col2'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi saepe reiciendis mollitia.</p>
            </div>

            <div className='col3'>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            </div>
        </div>


        <div className='second'>
            <ul>
                <li><h3> Quick Links</h3></li>
                <li>Home</li>
                <li>Blog</li>
                <li>Styles</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        <div className='third'>
            <ul>
                <li><h3>Archives</h3></li>
                <li>November 2022</li>
                <li>December 2022</li>
                <li>January 2023</li>
                <li>February 2023</li>
                <li>March 2023</li>
                <li>April 2023</li>
            </ul>
        </div>
        <div className='fourth'>
            <ul>
                <li><h3>SOCIAL</h3></li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Pinterest</li>
                <li>Google+</li>
                <li>Linkedln</li>
            </ul>
        </div>
    </footer>
    </div>
  )
}

export default Footer