import React from 'react'
import CartItem from './CartItem'

function CartContainer({ items }) {
    return (
        <div>
            <h2  id="myTarget">Cart</h2>
            {items.length > 0 && items.map(item => {
                return <CartItem key={item.id} id={item.id} name={item.title} price={item.price} />
            })}
        </div>
    )
}

export default CartContainer