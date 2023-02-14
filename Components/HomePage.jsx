import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Properties from "./Properties";
import ReadMore from "./ReadMore";
import ShortBanner from "./ShortBanner";
import { Banner, BriefAbout, Container, Services } from "./Styled";
import Typewriter from 'typewriter-effect';
import logo from "./media/visa.png"
import real from "./media/real.png"
import ticket from "./media/ticket.png"
import Clients from "./Clients";

const HomePage = () => {
  return (
    <Container padding={0} margin={0}> 
      <Nav />

      <Banner>
        <div className="text">
          <h3>Gold <span className="gold">Friends</span> - Sadata Homes and Gardens</h3>
          <Typewriter
          delay={1100}
  onInit={(typewriter) => {
    typewriter.typeString('Gold Friends is a company that offers a range of services including Real Estate Management, Ticket Booking and Visa Processing. The company specializes in helping clients with various real estate needs, booking tickets for travel, and processing visas for international travel. Their goal is to make these processes as simple and streamlined as possible for their clients.')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .start();
  }}
/>
          <div className="getStarted">
          Get Started
        </div>
        </div>

        {/* <img
          src="https://images.theconversation.com/files/179208/original/file-20170721-28483-1k8sy5q.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
          alt="banner text"
        /> */}
        
      </Banner>
      <Services>
        <h3>Our Branches</h3>
        <p>
        Our Branches are leading providers in their respective industries, offering top-notch products and services while embodying our company's core values and commitment to excellence.
        </p>

        <div className="services">
            <div className="service">
                <img
            src={logo.src}
            alt="banner text"
            />
            <div className="text">
                <h3>Visa Processing</h3>
            <p>
                Travel without stress - let us handle your visa needs
            </p>
            </div>
            
            </div>

            <div className="service">
            <img
            src={ticket.src}
            alt="banner text"
            />
            <div className="text">
                <h3>Ticket Booking</h3>
            <p>
            Let us handle all of the details, so you can sit back and enjoy the journey.
            </p>
            </div>
            
            </div>

            <div className="service">
            <img
            src={real.src}
            alt="banner text"
            />
            <div className="text">
                <h3>Real Estate Management</h3>
            <p>
            We are here to help you realize your housing dreams.
            </p>
            </div>
            
            </div>

            
        </div>
      </Services>


      <BriefAbout>
        <h2>About Us</h2>
        <div className="grid">
          <img src="https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
          <div className="text">
            <p>
            Gold Friends is a dynamic and innovative company that is dedicated to simplifying the lives of its clients. With its wide range of services, including Real Estate Management, Ticket booking, and Visa processing, the company is a one-stop-shop for all your needs.
            </p>
            <p> Its team of highly skilled and compassionate professionals is committed to delivering unparalleled services with a personal touch, ensuring that each and every client feels valued and well taken care of.
            </p>
            <ReadMore link="/about"/>
          </div>
        </div>
      </BriefAbout>

      {/* <Properties /> */}
      <Clients />

      <ShortBanner />

      <Footer />
    </Container>
  );
};

export default HomePage;
