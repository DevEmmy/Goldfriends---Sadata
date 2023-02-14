import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaLocationArrow, FaSearchLocation } from 'react-icons/fa'
import { HiChevronDoubleRight, HiLocationMarker } from 'react-icons/hi'
import Cards from './Cards'
import { PropertiesContainer } from './Styled'

const Properties = () => {
    const data = {
        image: "https://images.theconversation.com/files/179208/original/file-20170721-28483-1k8sy5q.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        title: "Chester Field",
        location: "Lagos, Ikorodu",
        id: "0909"
    }

  return (
    <PropertiesContainer>
        <div className="title">
            <h2>Our Properties</h2>
            <p>Upgrade Your Living Space: Real Estate Properties Available</p>
        </div>

        <div className="properties">
            <Cards data={data} />
            <Cards data={data} />
            <Cards data={data} />

            <Link href="/services/real-estate">
            <div className="explore">
                Explore More <HiChevronDoubleRight />
            </div>
        </Link>
        </div>

        
        
    </PropertiesContainer>
  )
}

export default Properties