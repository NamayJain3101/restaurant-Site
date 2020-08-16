import React from 'react'
import Hero from '../Components/Hero'
import MainBcg from '../Images/parallax-img.jpg'

const HomePage = () => {
    return (
        <Hero img={MainBcg} title="Home" subtitle="Our restaurant offers full-service dining with breathtaking views seen from our indoor covered patio and our outdoor sundeck." />
    )
}

export default HomePage
