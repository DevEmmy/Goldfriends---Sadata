import React from "react";
import { details } from "../utilities/details";
import Footer from "./Footer";
import Members from "./Members";
import Nav from "./Nav";
import { AboutContainer, Banner } from "./Styled";
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <>
      <Nav active={1}/>
      <AboutContainer>
        {/* <div className="banner">
          <p>About Us</p>
          <h1>
            Experience the world and find your perfect home with us.
          </h1>
          <p>From ticket booking to real estate, we've got you covered.</p>
        </div> */}
        <Banner>
          <div className="text">
            <h3>
            Get to Know Us: The <span className="gold">Team</span> Behind Your Success
            </h3>
            <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Discover the Passion Behind Our Business: Meet the Team Dedicated to Your SuccessGet to Know Us and See What Sets Us Apart')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .start();
  }}
/>
          </div>
        </Banner>

        <div className="gridContent">
          <div className="first">
            <h2>
              We are your one-stop shop for all things travel and housing.
            </h2>
            <div className="content">
              <p>
              At {details.name}, we are dedicated to providing top-quality
              services to our clients. Whether you are looking to travel, find a
              new home, or both, we have the expertise and resources to make your goals a reality.
            </p>


            <p> Our visa and ticket booking services make it
              easy for you to plan and execute your dream vacation. Our team of
              travel experts will handle all of the details, from finding the
              best flights and accommodations to securing all necessary
              documents. In addition to helping you travel the world, we also
              offer a wide range of real estate services.
              </p>
            <p> Whether you are
              looking to buy, sell, or rent a property, our team of experienced
              professionals will guide you through the process and help you find
              the perfect home. Thank you for considering {details.name} for
              all of your travel and housing needs. We look forward to helping
              you create the life you've always wanted.
            </p>
            </div>
            
          </div>

          <div className="second">
            <img src="https://tlmtravelstours.com/wp-content/uploads/2016/05/Travel-PNG-Transparent-Image.png" alt="" />
          </div>
        </div>

        <Members />

        <Footer />
      </AboutContainer>
    </>
  );
};

export default About;
