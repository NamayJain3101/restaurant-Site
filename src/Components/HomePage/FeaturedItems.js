import React from 'react'
import { RestaurantConsumer } from '../../Context/Context'
import FoodItem from '../FoodItem';
import styled from 'styled-components';

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
        </>
    )
}

const FeaturedWrapper = styled.div`
    margin: 0 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

export default FeaturedItems
