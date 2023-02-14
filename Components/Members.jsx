import React from 'react'
import { MembersStyle } from './Styled'
import img1 from "./media/1.jpeg"
import img2 from "./media/2.jpeg"
import img3 from "./media/3.jpeg"
import img4 from "./media/5.jpeg"
import img5 from "./media/6.jpeg"
import EachMember from './EachMember'

const Members = () => {
    const members = [
        {
            image: img1,
            name: "Adefaka Funmilayo",
            number: "08079960033",
            facebook: null,
            ig: null
        },
        {
            image: img2,
            name: "Abel Victoria",
            number: "07054723868",
            facebook: null,
            ig: null
        },
        {
            image: img3,
            name: "Kehinde Olamide",
            number: "07055558095",
            facebook: null,
            ig: null
        },
        {
            image: img4,
            name: "Oluwagbemiga Aloa",
            number: "07064690936",
            facebook: null,
            ig: null
        },
        {
            image: img5,
            name: "Agunbiade Tega Fisayomi",
            number: "09126303292",
            facebook: null,
            ig: null
        },
        
    ]
  return (
    <MembersStyle>
        <h2>Our Members</h2>
        <p>Experience the best with our dedicated and highly-skilled team of professionals who are committed to exceeding your expectations.</p>

        <div className="members">
            {
            members.map((member, i) =>{
                return(
                    <EachMember member={member} key={i}/>
                )
            })
        }
        </div>
        
    </MembersStyle>
  )
}

export default Members