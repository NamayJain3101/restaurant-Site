import React from 'react'
import CartColums from './CartColums'
import CartTotals from './CartTotals'
import CartList from './CartList'

const CartSection = () => {
    return (
        <section className="py-5">
            <CartColums />
            <CartList />
            <CartTotals />
        </section>
    )
}

export default CartSection
