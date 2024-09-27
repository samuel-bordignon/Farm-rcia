import React from 'react'
import { useState } from 'react'
import LandingPage from '../pages/LandingPage'
import './Body.css'
import HomePage from '../pages/HomePage'

function Body() {
    const [state, setstate] = useState(true)
    return (
        <div className='body-container'>
            {state && <HomePage />}
        </div>
    )
}

export default Body
