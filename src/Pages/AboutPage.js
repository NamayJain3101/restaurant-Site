import React from 'react'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'
import aboutBcg from '../Images/gallery-masonry-1.jpg'
import AboutFeatures from '../Components/AboutPage/AboutFeatures'
import AboutTestimonials from '../Components/AboutPage/AboutTestimonials'
import Awards from '../Components/AboutPage/Awards'

const AboutPage = () => {
    return (
        <>
            <Hero img={aboutBcg} title="About Us">
                <Link to='/' className="main-link">goto Home</Link>
            </Hero>
            <div className='container p-5 px-lg-0 mx-auto row'>
                <img src={aboutBcg} className='img-fluid py-3 py-md-5 pt-0 mx-auto my-3 my-lg-0 d-md-block col-12 col-lg-6' alt='about'></img>
                <div className='col-12 col-lg-6'>
                    <h2 className="mx-auto my-3 text-center">About our restaurant</h2>
                    <ul style={{listStyleType: 'none' }} className="text-center my-5 text font-italic">
                        <li>
                            <h4>
                            We offer the best Italian dishes in a friendly and calm atmosphere.
                            </h4>
                        </li>
                    </ul>
                    <p className="my-4 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae sit possimus quia quo praesentium, ipsa aliquam. Corrupti illo dolorum architecto!</p>
                    <p className="my-4 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ratione eius, quod modi blanditiis velit placeat consequuntur, deserunt aspernatur vel reiciendis rem perferendis unde dolore expedita impedit odio obcaecati quam?</p>
                </div>
            </div>
            <AboutFeatures />
            <AboutTestimonials />
            <Awards />
        </>
    )
}

export default AboutPage
