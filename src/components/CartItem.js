import React from 'react'

function CartItem({ id, name, price }) {
    
    return (
        <div>
            <div>
                <h5>Name: {name}</h5>
                <h6>Price: ${price}</h6>
            </div>
        </div>
    )
}

export default CartItem