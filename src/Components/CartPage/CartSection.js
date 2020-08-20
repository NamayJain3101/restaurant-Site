import React from 'react'
import CartTotals from './CartTotals'
import CartList from './CartList'

const CartSection = () => {
    return (
        <section className="pt-5 pb-3">
            <CartList />
            <CartTotals />
        </section>
    )
}

export default CartSection
