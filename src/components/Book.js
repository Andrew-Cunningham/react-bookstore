import React from 'react'

export default function Book({id, title, author, price, addToCart}) {
    const handleClick = () => {
        return addToCart(id)
      }
      const bookStyle = {
        borderStyle: 'solid',
        borderColor: 'red',
        backgroundColor: 'green'
      }
        return (
            <div style={bookStyle} key={id} className="container">
                <h3>Title: {title}</h3>
                <h3>Author: {author}</h3>
                <h4>Cost: ${price}</h4>
                <button id={id} onClick={handleClick} >Add to Cart</button>
            </div>
        )
    }
