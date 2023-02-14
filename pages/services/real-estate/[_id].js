import React from "react";
import Banner from "../../../Components/Banner";
import Footer from "../../../Components/Footer";
import Nav from "../../../Components/Nav";
import { Details } from "../../../Components/Styled";
import { HiLocationMarker } from "react-icons/hi";
// import { Banner } from '../../../Components/Styled'

const property = () => {
  return (
    <>
      <Nav active={2}/>
      <Banner img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chalfont-manor-1-credit-sotheby-s-international-realty-via-onthemarket-1591006723.jpg?crop=0.607xw:1.00xh;0.223xw,0&resize=640:*">
        <h1>Hello</h1>
        <p>Testing Listings</p>
      </Banner>

      <Details>
        <div className="description">
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            cupiditate consequuntur voluptatibus error ea sint natus? Commodi
            eligendi nihil molestiae laborum corporis hic nam ut, adipisci earum
            cumque, inventore tenetur? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eligendi et corrupti mollitia eum deleniti.
            Repellat hic tempora quia ipsa asperiores, vero sapiente tempore eos
            dignissimos dolor minus ipsam delectus veniam quae cumque at nisi
            fugiat sit. Magni odit a error perferendis nam nesciunt debitis?
            Doloremque possimus eius ex iure dicta.
          </p>
        </div>

        <p className="location">
          <HiLocationMarker />
          Ikorodu, Lagos.
        </p>

        <div className="request">
          <h2>Make a Request for Property</h2>
          <form action="">
            <input type="text" placeholder="John Doe" />
            <input type="email" placeholder="johndoe@gmail.com" />
            <input type="tel" placeholder="090239239" />
            <textarea
              placeholder="Message"
              defaultValue={`
                  Hi, I am interested in De'ville at Lagos, Ikorudu
                `}
            />

            <div className="submit">Submit</div>
          </form>
        </div>
      </Details>
      <Footer />
    </>
  );
};

export default property;
