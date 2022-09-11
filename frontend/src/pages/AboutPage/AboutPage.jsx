import React from 'react';
import "./AboutPage.css"
import background from './AboutAssets/AboutUs.jpg'

const AboutPage = () => {
  return (
    <div className='content-wrap'>
      <div id='bg'>
        <img src={background} alt='background'/>
      </div>
      <div className='about-text'>
        <h2>About Us</h2>
        <p>Established in 2007, Razor is a contemporary men's barbershop that provides an upscale experience for an affordable price in a relaxed atmosphere.
       Locally owned and operated by barber, Anthony Leto, who boasts over 17 years of experience. 
       Located right in the heart of Bay View's newly revitalized business sector, Razor offers the finest custom haircut and service for your dollar. 
       Every individual receives special attention which includes: consultation, precision haircut or color, style, beard trim, hot towel and straight-edge razor detailing. 
       Come in and relax in a wide comfortable barber chair, watch television and enjoy a cold complimentary refreshment.
        </p>
      </div>
      <footer>
        <p>by appointment only | Book through our site or call 414 482-0633</p>
        <p>Located at 2340 S. Kinnickinnic Ave. Milwaukee, WI 53207</p>
        <p>Open monday - saturday | 10 AM - 6 PM</p>
      </footer>
    </div>
  )
}

export default AboutPage;