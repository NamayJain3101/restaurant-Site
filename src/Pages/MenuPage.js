import React from 'react'
import Hero from '../Components/Hero'
import menuBcg from '../Images/gallery-masonry-4.jpg'
import { Link } from 'react-router-dom'
import FoodList from '../Components/MenuPage/FoodList'
import MenuCategories from '../Components/MenuPage/MenuCategories'
import { ToastContainer } from 'react-toastify'

const MenuPage = () => {
    return (
        <>
            <Hero img={menuBcg} title="Our Menu">
                <Link to='/' className="main-link">goto Home</Link>
            </Hero>
            <MenuCategories />
            <FoodList />
            <ToastContainer 
                closeButton={false}
                position="bottom-center" 
                autoClose={3000} 
                closeOnClick={false} 
                draggable={false}
                pauseOnHover={false} 
                bodyClassName="text-center font-weight-bold"
                bodyStyle={{color: 'lime', letterSpacing: '4px'}}
            />
        </>
    )
}

export default MenuPage
