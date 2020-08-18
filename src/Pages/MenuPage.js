import React from 'react'
import Hero from '../Components/Hero'
import menuBcg from '../Images/gallery-masonry-4.jpg'
import { Link } from 'react-router-dom'
import FoodList from '../Components/MenuPage/FoodList'
import MenuCategories from '../Components/MenuPage/MenuCategories'

const MenuPage = () => {
    return (
        <>
            <Hero img={menuBcg} title="Our Menu">
                <Link to='/' className="main-link">goto Home</Link>
            </Hero>
            <MenuCategories />
            <FoodList />
        </>
    )
}

export default MenuPage
