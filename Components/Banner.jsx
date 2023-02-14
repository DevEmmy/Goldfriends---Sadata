import React from 'react'
import { BannerStyle } from './Styled'

const Banner = ({children, img}) => {
  return (
    <BannerStyle img={img}>
        {children}
    </BannerStyle>
  )
}

export default Banner