import React from 'react'
import { ClientStyle } from './Styled'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "./media/clients/_1.jpeg"
import img2 from "./media/clients/_2.jpeg"
import img3 from "./media/clients/_3.jpeg"
import img4 from "./media/clients/_4.jpeg"
import img5 from "./media/clients/_5.jpeg"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const images = [img1, img2, img3, img4, img5]

const Clients = () => {

  return (
    <ClientStyle>
        <h3>Our Happy Clients</h3>
        <p>Our satisfied clients are a testament to our commitment to quality and customer satisfaction. From large corporations to small businesses, we have helped a diverse range of clients achieve their goals and transform their operations. Take a look at some of our happy customers and see how we've made a positive impact on their success.</p>
        <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
        >
            {
                images.map((img, i)=>{
                    return(
                        <img src={img.src} key={i} alt="" />
                    )
                })
            }
        </Carousel>;
    </ClientStyle>

  )
}

export default Clients