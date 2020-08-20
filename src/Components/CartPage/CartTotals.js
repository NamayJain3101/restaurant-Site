import React from 'react'
import { RestaurantConsumer } from '../../Context/Context';
import { Link } from 'react-router-dom';

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
                            <h3 className='mb-5'>Total: {cartTotal}Rs</h3>
                            <Link to='/' onClick={clearCart} className="main-link" style={{background: 'black', color: "lime", outlineColor: 'black', textTransform: "uppercase"}}>
                                Pay now
                            </Link>
                        </div>
                    }}
                </RestaurantConsumer>
            </div>
        </div>
    )
}

export default CartTotals
