import React from 'react'
import { RequestStyle } from './Styled'

const Request = () => {
  return (
    <RequestStyle>
        <h1>Service Request Form</h1>

        <form action="">
            <input type="text" placeholder="John Doe" />

            <input type="email" placeholder="johndoe@gmail.com" />

            <input type="tel" placeholder="090239239" />
            
            <textarea
              placeholder="Message"
              defaultValue={`
                  Hi, I am interested in De'ville at Lagos, Ikorudu
                `}
            />

            <div className="submit">Submit</div>
        </form>
    </RequestStyle>
  )
}

export default Request