import Link from 'next/link'
import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { CardStyle } from './Styled'

const Cards = ({data}) => {
    const {images, title, location, id} = data
  return (
    <CardStyle noShadow={false}>
        <img src={images[0]} alt={title} />
        <h3>{title}</h3>
        <p><HiLocationMarker />{location}</p>

        <Link href={`/properties/${id}`}>
            <div className="enquire">
                Enquire
            </div>
        </Link>
        
    </CardStyle>
  )
}

export default Cards