import React from 'react'
import Nav from './Nav'
import { Banner, VisaProcessingStyle } from './Styled'
import Footer from "./Footer"
import Request from './Request'

const VisaProcessing = () => {
  return (
    <>
        <Nav active={2}/>
        {/* <Banner img="https://image-factory.media.messe-muenchen.de/image/411146/s1920/">
            <h1>Visa Processing</h1>
            <p>Unlock Your World: Visa Processing Made Easy</p>
        </Banner> */}
        <Banner>
            <div className="text">
                <h3>
                    Visa <span className="gold">Processing</span>
                </h3>
                <p>Unlock Your World: Visa Processing Made Easy</p>
            </div>
        </Banner>
        <VisaProcessingStyle>
            <div className="content">
                <h1>
                Effortless Visa Processing: Your Gateway to the World
                </h1>
                <p>Visa processing can be a complex and time-consuming task, but our team of experts is here to make it as simple and stress-free as possible. We understand that obtaining a visa is an important step in your travel or immigration plans, and we are dedicated to helping you navigate the process with ease.

We provide a wide range of visa processing services, including assistance with:</p>

<div>
    <li>Application preparation and submission</li>
    <li>Document gathering and verification</li>
    <li>Interview preparation</li>
    <li>Follow-up and status checking</li>
    <li>Appeals and reconsideration</li>
</div>

<p>Our team of specialists is well-versed in the latest visa regulations and requirements, and we will work closely with you to ensure that your application is complete and accurate. We will also provide you with regular updates on the status of your application, so you can stay informed every step of the way.</p>

<p>
We pride ourselves on providing excellent customer service, and we are committed to helping you achieve your goals as quickly and efficiently as possible. Whether you're applying for a tourist visa, a student visa, or a work permit, we have the expertise and experience to guide you through the process.
</p>

<p>
Don't let the stress of visa processing hold you back from your travel or immigration plans. Contact us today to learn more about how we can help you unlock your world.
</p>
            </div>

            <Request />
        </VisaProcessingStyle>
        <Footer />
    </>
    
  )
}

export default VisaProcessing