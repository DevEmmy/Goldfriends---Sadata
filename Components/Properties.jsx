import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaLocationArrow, FaSearchLocation } from 'react-icons/fa'
import { HiChevronDoubleRight, HiLocationMarker } from 'react-icons/hi'
import Cards from './Cards'
import { PropertiesContainer } from './Styled'
import {data} from "../pages/properties/data.js"

const Properties = () => {
    
    

    

  return (
    <PropertiesContainer>
        <div className="title">
            <h2>Our Properties</h2>
            <p>Upgrade Your Living Space: Real Estate Properties Available</p>
        </div>

        <div className="properties">
            {
                data.map((d, i)=>{
                    return(
                        <Cards data={d} />
                    )
                })
            }
            
            {/* <Cards data={data} />
            <Cards data={data} /> */}
        </div>

        
        
    </PropertiesContainer>
  )
}

export default Properties