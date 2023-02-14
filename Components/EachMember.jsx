import React from 'react'
import { EachMemberStyle } from './Styled'

const EachMember = ({member}) => {
    const {image, name, number} = member
  return (
    <EachMemberStyle>
        <img src={image.src} alt="" />
        <div className="texts">
            <h3>{name}</h3>
            <p>{number}</p>
        </div>
    </EachMemberStyle>
  )
}

export default EachMember