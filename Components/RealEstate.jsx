import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Properties from './Properties'
import { Banner, RealEstateContainer } from './Styled'
import ShortBanner from "./ShortBanner"

const RealEstate = () => {
  return (
    <>
        <Nav active={2}/>
        <RealEstateContainer>
            {/* <div className="banner">
                <h1>Real Estate</h1>
                <p>Take the Next Step: Find Your Dream Home in Real Estate</p>
            </div> */}
            <Banner>
        <div className="text">
          <h3>Sadata <span className="gold">Homes</span> & Gardens</h3>
          <p>
          Take the Next Step: Find Your Dream Home in Real Estate
          </p>
        </div>

        {/* <img
          src="https://images.theconversation.com/files/179208/original/file-20170721-28483-1k8sy5q.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
          alt="banner text"
        /> */}
        
      </Banner>
            <Properties />
        </RealEstateContainer>

        <ShortBanner />
        <Footer />
    </>
  )
}

export default RealEstate