import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Request from './Request'
import { Banner, VisaProcessingStyle } from './Styled'

const TicketBooking = () => {
  return (
    <>
    <Nav active={2}/>
    {/* <Banner img={"https://images.theconversation.com/files/179208/original/file-20170721-28483-1k8sy5q.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"}>
        <h1>Ticket Booking</h1>
        <p>Let us handle all of the details, so you can sit back and enjoy the journey.</p>

    </Banner> */}
    <Banner>
            <div className="text">
                <h3>
                    Ticket <span className="gold">Booking</span>
                </h3>
                <p>Let us handle all of the details, so you can sit back and enjoy the journey.</p>
            </div>
        </Banner>
        <VisaProcessingStyle>
            <div className="content">
                <h1>Book Your Next Adventure</h1>
                <p>Ticket booking can be a hassle, but our team is here to make it easy and stress-free. Whether you're looking to book a flight, a train, a bus or a cruise, we offer a wide range of ticket booking services to suit your needs.</p>
                <p>Our services include:</p>

                <div>
                    <li>Finding the best deals on flights, trains, buses, and cruises</li>
                    <li>Assisting with seat selection and special requests</li>
                    <li>Providing detailed information on departure and arrival times, layovers, and connecting flights</li>
                    <li>Handling changes or cancellations</li>
                    <li>24/7 customer support</li>
                </div>

                <p>We have access to a wide range of travel options and deals, and our team will work with you to find the perfect trip that fits your budget and schedule. Our user-friendly booking platform is designed to make it easy for you to find and book your tickets in just a few clicks.</p>

                <p>
                We understand that travel plans can change, and we are here to help you every step of the way. In case of any changes or cancellations, our team will assist you with rebooking or refunding your tickets with ease.
                </p>

                <p>
                Don't let the stress of ticket booking hold you back from your travel plans. Contact us today and let us take care of all your ticket booking needs. With our hassle-free ticket booking services, you can sit back, relax and focus on the excitement of your upcoming trip.
                </p>
            </div>

            <Request />
        </VisaProcessingStyle>
    <Footer />
    </>
  )
}

export default TicketBooking