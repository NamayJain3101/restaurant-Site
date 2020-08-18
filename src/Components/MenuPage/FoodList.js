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
    margin: 0 3rem;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    @media(max-width: 767px){
        margin: 0 2rem;
    }
`

export default FoodList
