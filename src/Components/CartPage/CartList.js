import React from 'react'
import { RestaurantConsumer } from '../../Context/Context';
import CartItem from './CartItem';

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
                                <>
                                    {cart.map(item => (
                                        <CartItem
                                            key={item.id}
                                            cartItem={item}
                                            increment={increment}
                                            decrement={decrement}
                                            removeItem={removeItem}
                                        />
                                    ))}
                                </>
                            );
                        }}
                    </RestaurantConsumer>
                </div>
            </div>
        </div>
    )
}

export default CartList
