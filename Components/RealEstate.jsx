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

        <img
          src="https://images.unsplash.com/photo-1628116904346-44a605db3b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
        
      </Banner>
            <Properties />
        </RealEstateContainer>

        <ShortBanner />
        <Footer />
    </>
  )
}

export default RealEstate