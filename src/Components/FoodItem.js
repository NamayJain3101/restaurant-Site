import React from 'react'
import styled from 'styled-components'

const FoodItem = ({food}) => {
    return (
        <FeaturedFoodWrapper>
            <div className="p-3 mx-auto text-center">
                <img className='img-fluid' src={food.image} alt="FeaturedFood" />
                <h3>{food.foodName}</h3>
                <h6>
                    {food.price}Rs
                </h6>
            </div>
        </FeaturedFoodWrapper>
    )
}

const FeaturedFoodWrapper = styled.div`
    letter-spacing: 2px;
    h3 {
        font-size: 1.3rem;
        margin: 1rem auto;
        line-height: 1.5;
    }
    h6 {
        color: green;
        font-weight: bold;
        font-size: 1.2em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default FoodItem
