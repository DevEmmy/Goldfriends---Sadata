import React, { useState } from 'react'
import { HiChevronDown, HiChevronRight } from 'react-icons/hi'
import { RequestStyle } from '../AdminStyle'

const Request = () => {
    const [showDetails, setShowDetails] = useState(false)
    const request = {
        user:{
            email: "e@mail.com",
            name: "Emma Olaosebikan",
            phoneNumber: "0903232323"
        },
        message: "Hi, I am interested in De'ville at Lagos, Ikorudu"
    }
  return (
    <RequestStyle>
        <div className="title">
            <div className='topName'>
                <div className="icon" onClick={()=> setShowDetails(!showDetails)}>
                    {
                        showDetails ? <HiChevronDown /> : <HiChevronRight />
                    }
                </div>
                {request.user.name}
            </div>
            
            {
                showDetails && 
                <div className="details">
                    <p>{request.user.email}</p>
                    <p>{request.user.phoneNumber}</p>
                </div>
            }
        </div>
        <div className="message">
            Request: {request.message}
        </div>

        <div className="mark">
            <p>Mark as Responded
            </p>
            <input type="checkbox" name="" id="" />
        </div>
    </RequestStyle>
  )
}

export default Request