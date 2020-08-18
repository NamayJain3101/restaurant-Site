import React from 'react'
import { RestaurantConsumer } from '../../Context/Context'
import FoodItem from '../FoodItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FeaturedItems = () => {
    return (
        <>
            <h1 className='text-center mx-auto my-5 text-capitalize font-weight-bold'>Featured Dishes</h1>
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
            <div className="d-flex justify-content-center mb-4">
                <Link to='/menu' className='main-link' style={{background: 'black', color: 'lime', outlineColor: 'black'}}>View Complete Menu</Link>
            </div>
        </>
    )
}

const FeaturedWrapper = styled.div`
    margin: 0 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

export default FeaturedItems
