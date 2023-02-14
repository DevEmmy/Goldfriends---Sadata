import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { ReadMoreStyle } from './Styled'

const ReadMore = ({link, color, bg}) => {
  return (
    <Link href={link}>
        <ReadMoreStyle color={color} bg={bg}>
            Read More <HiChevronDoubleRight />
        </ReadMoreStyle>
    </Link>
    
  )
}

export default ReadMore