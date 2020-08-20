import React from 'react'
import { RestaurantConsumer } from '../../Context/Context';
import CartItem from './CartItem';
import styled from 'styled-components';

const CartList = () => {
    return (
        <div className="container-fluid mb-1">
            <div className="row">
                <div className="col">
                    <RestaurantConsumer>
                        {value => {
                            const { cart, increment, decrement, removeItem } = value;
                            if (cart.length === 0) {
                                return (
                                <h1 className="text-title text-center my-4 text-capitalize">
                                    your cart is currently empty
                                </h1>
                                );
                            }
                            return (
                                <CartListWrapper>
                                    {cart.map(item => (
                                        <CartItem
                                            key={item.id}
                                            cartItem={item}
                                            increment={increment}
                                            decrement={decrement}
                                            removeItem={removeItem}
                                        />
                                    ))}
                                </CartListWrapper>
                            );
                        }}
                    </RestaurantConsumer>
                </div>
            </div>
        </div>
    )
}

const CartListWrapper = styled.div`
    display: grid;
    grid-row-gap: 1rem;
    grid-column-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

export default CartList
