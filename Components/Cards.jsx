import Link from 'next/link'
import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { CardStyle } from './Styled'

const Cards = ({data}) => {
    const {image, title, location, id} = data
  return (
    <CardStyle noShadow={false}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p><HiLocationMarker />{location}</p>

        <Link href={`/services/real-estate/${id}`}>
            <div className="enquire">
                Enquire
            </div>
        </Link>
        
    </CardStyle>
  )
}

export default Cards