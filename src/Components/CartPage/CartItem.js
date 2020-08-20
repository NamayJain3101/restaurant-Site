import React from 'react'
import { FaTrash, FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const CartItem = ({cartItem, increment, decrement, removeItem}) => {
    const { id, foodName, price, count, total, image } = cartItem;
    return (
        <CartItemWrapper>
            <img src={image} className="img-fluid" alt="product" />
            <div>{foodName}</div>
            <div>Price: {price}Rs</div>
            <div>
                <FaChevronCircleDown
                    onClick={() => decrement(id)}
                    className="cart-icon"
                />
                <span className="count">{count}</span>
                <FaChevronCircleUp
                    onClick={() => increment(id)}
                    className="cart-icon"
                />
            </div>
            <div>
                <FaTrash
                    className="cart-icon text-danger"
                    onClick={() => removeItem(id)}
                />
            </div>
            <div>
                <strong>item total : {total}Rs</strong>
            </div>
        </CartItemWrapper>
    )
}

const CartItemWrapper = styled.div`
    padding: 1rem;
    margin: 0.5rem 1rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    letter-spacing: 2px;
    border: 1px solid #ccc;
    box-shadow: 4px 4px 20px 4px #ccc;
    img {
        width: 100px;
        border-radius: 50%;
        margin-bottom: 1rem;
    }
    div {
        margin-bottom: 0.5rem
    }
    .cart-icon {
        margin: 0 1rem;
        color: green;
        font-size: 1.3rem;
    }
`

export default CartItem
