import React from 'react'
import styled from 'styled-components'
import { FaShoppingBasket } from 'react-icons/fa'
import { RestaurantConsumer } from '../Context/Context'

const FoodItem = ({food}) => {
    return (
        <RestaurantConsumer>
            {value => {
                const {addToCart} = value;
                return (
                    <FeaturedFoodWrapper>
                        <div className="p-3 mx-auto text-center slideTop">
                            <div className="img-container">
                                <img className='img-fluid' src={food.image} alt="FeaturedFood" />
                                <div>
                                    <FaShoppingBasket className='icon' onClick={() => addToCart(food.id)} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="title">{food.foodName}</span>
                                <span className="price">
                                    {food.price}Rs
                                </span>
                            </div>
                        </div>
                    </FeaturedFoodWrapper>
                )
            }}
        </RestaurantConsumer>
    )
}

const FeaturedFoodWrapper = styled.div`
    letter-spacing: 2px;
    padding: 2rem;
    img{
        width: 100%;
        height: auto;
        border-radius: 50%;
    }
    .img-container {
        position: relative;
    }
    .img-container div {
        position: absolute;
        transition: var(--mainTransition);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: lime;
        padding: 1rem;
        border-radius: 50%;
        cursor: pointer;
        display: none;
    }
    .icon {
        font-size: 3rem;
        color: black;
    }
    .img-container:hover img {
        filter: grayscale(40%);
    }
    .img-container:hover div {
        display: block;
    }
    .title {
        font-size: 1.2rem;
        margin: 1rem auto;
        line-height: 1.5;
        text-align: left;
    }
    .price {
        color: green;
        font-weight: bold;
        margin: 1rem auto;
        font-size: 1em;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
`

export default FoodItem
