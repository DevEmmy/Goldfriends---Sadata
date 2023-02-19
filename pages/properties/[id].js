import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi';
import Footer from '../../Components/Footer';
import Nav from '../../Components/Nav';
import { Banner, Details } from '../../Components/Styled';
import {data} from "./data"

const property = () => {
    const router = useRouter();
    const {id} = router.query
    const [property, setProperty] = useState()

    useEffect(()=>{
        setProperty(data[id - 1])
    }, [data, id])
    // console.log(property)

  return (
    <>
      <Nav active={2}/>
      <Banner img={property?.images[0]}>
        <h1>{property?.title}</h1>
        {/* <p>Testing Listings</p> */}
      </Banner>

      <Details>
        <div className="description">
          <h2>Description</h2>
          <p>
            {property?.details}
          </p>
        </div>

        <div className="media">
            <h2>Images</h2>

            <div className="images">
                {
                property?.images.map((img, i)=>{
                    return(
                        <img src={img} alt="" key={i}/>
                    )
                })
            }
            </div>
            
        </div>

        <div className="media">
            <h2>Videos</h2>

            <div className="images">
                {
                property?.videos.map((video, i)=>{
                    return(
                        <video src={video} controls={true} alt="" key={i}/>
                    )
                })
            }
            </div>
            
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
  )
}

export default property