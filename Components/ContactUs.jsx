import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { Banner, ContactContainer } from './Styled'

const ContactUs = () => {
  return (
    <>
    <Nav active={3}/>
    <ContactContainer>
        {/* <div className="banner">
            <h1>Contact Us</h1>
            
        </div> */}
        <Banner>
            <div className="text">
                <h3>Connect with Us: Your Gateway to <span className="gold"> Support</span> and
                <span className="gold"> Assistance.</span></h3>

                <p>
            Your travel and housing goals are within reach. Our team of experts is here to make it happen. Contact us today to start living your best life.
            </p>
            </div>
        </Banner>

        <form>
            <h2>
                Get in touch today &#x1F44B;
            </h2>

            <div className="form">
                <input type="email" placeholder='youremail@gmail.com'/>
                <input type="text" placeholder='your name'/>
                <textarea placeholder='Your Message' />
                <div className="btn">Submit</div>
            </div>
        </form>
    </ContactContainer>
    <Footer />
    </>
  )
}

export default ContactUs