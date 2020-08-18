import React from 'react'
import styled from 'styled-components'
import { RestaurantConsumer } from '../../Context/Context';
import FoodItem from '../FoodItem';

const FoodList = () => {
    return (
        <FoodListWrapper>
            <RestaurantConsumer>
                {value => {
                    const {filteredItems} = value;
                    return(
                        filteredItems.map(food => {
                            return(
                                <FoodItem key={food.id} food={food} />
                            )
                        })
                    )
                }}
            </RestaurantConsumer>
        </FoodListWrapper>
    )
}

const FoodListWrapper = styled.div`
    margin: 0 5rem;
    padding: 4rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;
    @media(max-width: 767px){
        margin: 0 2rem;
        padding: 3rem 0;
    }
`

export default FoodList
