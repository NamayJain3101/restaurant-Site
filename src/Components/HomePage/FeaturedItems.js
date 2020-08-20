import React from 'react'
import { RestaurantConsumer } from '../../Context/Context'
import FoodItem from '../FoodItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FeaturedItems = () => {
    return (
        <>
            <h1 className='slideTop text-center mx-auto my-5 text-capitalize font-weight-bold'>Featured Dishes</h1>
            <FeaturedWrapper>
                <RestaurantConsumer>
                    {value => {
                        const {featuredItems} = value;
                        return(
                            featuredItems.map(food => {
                                return(
                                    <FoodItem key={food.id} food={food} />
                                )
                            })
                        )
                    }}
                </RestaurantConsumer>
            </FeaturedWrapper>
            <div className="slideTop d-flex justify-content-center mb-5 mx-auto w-75 text-center">
                <Link to='/menu' className='main-link btn-dark' style={{background: 'black', color: 'lime', outlineColor: 'black', textTransform: 'uppercase'}}>View Menu</Link>
            </div>
        </>
    )
}

const FeaturedWrapper = styled.div`
    margin: 0 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    @media(max-width: 767px){
        margin: 0 2rem;
    }
`

export default FeaturedItems
