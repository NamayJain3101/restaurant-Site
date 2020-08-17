import React from 'react'
import Hero from '../Components/Hero'
import MainBcg from '../Images/parallax-img.jpg'
import { Link } from 'react-router-dom'

const DefaultPage = () => {
    return (
        <Hero img={MainBcg} max title="Error 404: Page not found">
            <Link to='/' className="main-link">goto Home</Link>
        </Hero>
    )
}

export default DefaultPage
