import React from 'react'
import { RestaurantConsumer } from '../../Context/Context';

const CartTotals = () => {
    return (
        <div className="container">
            <div className="row">
                <RestaurantConsumer>
                    {value => {
                        const {clearCart, cartSubTotal, cartTax, cartTotal} = value;
                        return <div className="col text-title text-center my-4">
                            <button className="btn btn-outline-danger text-capitalize mb-5" onClick={clearCart}>Clear Cart</button>
                            <h3>Subtotal: {cartSubTotal}Rs</h3>
                            <h3>Tax: {cartTax}Rs</h3>
                            <h3>Total: {cartTotal}Rs</h3>
                            <button className="main-link mt-5" style={{background: 'black', color: "lime", outlineColor: 'black', textTransform: "uppercase"}}>
                                Pay now
                            </button>
                        </div>
                    }}
                </RestaurantConsumer>
            </div>
        </div>
    )
}

export default CartTotals
