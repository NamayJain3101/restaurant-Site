import React from 'react'
import Hero from '../Components/Hero'
import MainBcg from '../Images/parallax-img.jpg'
import aboutBcg from '../Images/gallery-masonry-1.jpg'
import ReservationForm from '../Components/HomePage/ReservationForm'
import chefImg from '../Images/chef.png'
import chefSignImg from '../Images/chefSign.png'
import Gallery from '../Components/HomePage/Gallery'
import News from '../Components/HomePage/News'
import FeaturedItems from '../Components/HomePage/FeaturedItems'

const HomePage = () => {
    return (
        <>
            <Hero img={MainBcg} max="true" title="welcome" subtitle="Our restaurant offers full-service dining with breathtaking views seen from our indoor covered patio and our outdoor sundeck." />
            <ReservationForm />
            <div className='container mt-n5 mb-5 px-5 px-lg-0 mx-auto row'>
                <div className="jumbotron text-center mx-auto px-3 m-0 p-1 w-50 h-auto d-md-block col-12 col-lg-6" style={{background: `url(${aboutBcg}) center/cover no-repeat`}}>
                    <img src={chefImg} className='img-fluid mx-auto' alt='about'></img>
                </div>
                <div className='col-12 col-lg-6 py-3 py-md-0 px-md-5'>
                    <h1 className="mx-auto my-3 text-left font-weight-bold">About Us</h1>
                    <p className="my-4 text-justify">Pesto is a family owned and operated Italian Restaurant offering a combination of fresh ingredients and authentic Italian cooking.</p>
                    <p className="my-4 text-justify">We will make sure you are served the most authentic and fresh Italian dishes, while offering the best customer service. Our kitchen is committed to providing our guests with the best Italian Cuisine.</p>
                    <img src={chefSignImg} className='img-fluid w-50 w-sm-25' alt='about'></img>
                </div>
            </div>
            <Gallery />
            <FeaturedItems />
            <News />
        </>
    )
}

export default HomePage
