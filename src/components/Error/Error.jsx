import React from 'react'
import "./Error.scss"
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div id='error'>
            <img src="/favorite.png"/>
            <h1>OOPS! Something went wrong</h1>
            <p>Please go back to home page <Link to="/">here</Link>.</p>
        </div>
    )
}
