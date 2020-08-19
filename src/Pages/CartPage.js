import React from 'react'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'
import MainBcg from '../Images/parallax-img.jpg'
import CartSection from '../Components/CartPage/CartSection'

const CartPage = () => {
    return (
        <>
            <Hero img={MainBcg} title="your Cart">
                <Link to='/' className="main-link">goto Home</Link>
            </Hero>
            <CartSection />
        </>
    )
}

export default CartPage
