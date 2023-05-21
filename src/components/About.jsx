import React from 'react'
import './About.css'
import Nav from './navbar/Nav'
import Footer from './footer/Footer'

const About = () => {
  return (
    <div className='abt'>
        <Nav />
        <div>
            <h1>Learn More About Us</h1>
        </div>
        <div>
            <img src='https://preview.colorlib.com/theme/philosophy/images/thumbs/about/about-2000.jpg' alt='#'></img>
        </div>
        
        <div className='pet'>
            <div className="one">
                <h3>Who we are</h3>
                <p>A lifestyle blog that covers diverse subjects such as fashion, beauty, home decor, travel, food, health and wellness, personal development, relationships, and more.</p>
            </div>
            <div className="two">
                <h3>Our Mission</h3>
                <p>Dedicated to promoting holistic well-being, offering advice on mindfulness, self-care practices, healthy living, and personal growth. </p>

            </div>
            <div className="three">
                <h3>Our Vision</h3>
                <p>To  focus on empowering readers to prioritize their well-being and lead balanced lives. </p>
            </div>
            </div>

        
            <Footer />
        </div>
  )
}

export default About