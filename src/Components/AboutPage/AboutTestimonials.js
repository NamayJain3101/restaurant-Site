import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-bootstrap'
import { Testimonials } from '../../Context/Testimonials'
import testimonialsImg from '../../Images/parallax-img.jpg'

const AboutTestimonials = () => {
    return (
        <AboutTestimonialsWrapper>
            <h2 className="mx-auto py-3 text-center">Testimonials</h2>
            <Carousel className='carousel'>
                {
                    Testimonials.map(item => {
                        return(
                            <Carousel.Item key={item.id} className='carousel-item'>
                                <div>
                                    <p>{item.text}</p>
                                    <img
                                        className="d-block mx-auto rounded-circle my-3"
                                        src={item.image}
                                        alt="slide"
                                    />
                                    <h3>{item.name}</h3>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </AboutTestimonialsWrapper>
    )
}

const AboutTestimonialsWrapper = styled.div`
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${testimonialsImg}) center/cover no-repeat;
    color: white;
    .carousel-item {
        padding: 3rem 6rem 5rem 6rem;
        width: 100%;
    }
    .carousel-item > div {
        width: 60%;
        margin: 0 auto;
        text-align: center;
    }
    @media(max-width: 768px) {
        .carousel-item {
            padding: 2rem 3rem 4rem 3rem;
            width: 100%;
        }
        .carousel-item > div {
            width: 100%;
        }
    }
`

export default AboutTestimonials
