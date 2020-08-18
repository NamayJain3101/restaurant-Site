import React from 'react'
import styled from 'styled-components'

const FoodItem = ({food}) => {
    return (
        <FeaturedFoodWrapper>
            <div className="p-3 mx-auto text-center">
                <img className='img-fluid' src={food.image} alt="FeaturedFood" />
                <div className="row">
                    <span className="title col-8">{food.foodName}</span>
                    <span className="price col-4">
                        {food.price}Rs
                    </span>
                </div>
            </div>
        </FeaturedFoodWrapper>
    )
}

const FeaturedFoodWrapper = styled.div`
    letter-spacing: 2px;
    img{
        width: 100%;
        height: auto;
    }
    .title {
        font-size: 1.3rem;
        margin: 1rem auto;
        line-height: 1.5;
        text-align: left;
    }
    .price {
        color: green;
        font-weight: bold;
        margin: 1rem auto;
        font-size: 1.2em;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
`

export default FoodItem
