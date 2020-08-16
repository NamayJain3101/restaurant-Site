import React from 'react'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'
import aboutBcg from '../Images/gallery-masonry-1.jpg'

const AboutPage = () => {
    return (
        <>
            <Hero img={aboutBcg} title="About Us">
                <Link to='/' className="main-link">goto Home</Link>
            </Hero>
        </>
    )
}

export default AboutPage
