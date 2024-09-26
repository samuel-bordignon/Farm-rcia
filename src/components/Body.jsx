import React from 'react'
import { useState } from 'react'
import LandingPage from '../pages/LandingPage'
import './Body.css'

function Body() {
    const [state, setstate] = useState(true)
    return (
        <div className='body-container'>
            {state && <LandingPage />}
        </div>
    )
}

export default Body
