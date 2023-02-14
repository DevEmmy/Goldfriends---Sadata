import React from 'react'
import { MainRequestStyle } from '../AdminStyle'
import Request from './Request'

const MainRequest = () => {
  return (
    <MainRequestStyle>
        <h2>Requests (2)</h2>
        <div className="options">
            <div className="option active">
                All
            </div>

            <div className="option">
                New
            </div>

            <div className="option">
                Responded
            </div>
        </div>
        <Request />
        <Request />
        <Request />
        <Request />
        <Request />
        <Request />
    </MainRequestStyle>
  )
}

export default MainRequest