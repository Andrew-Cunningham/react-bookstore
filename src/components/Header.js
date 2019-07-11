import React, { Component } from 'react'


export class Header extends Component {
    

    render() {
        let totalPrice=this.props.totalPrice
        return (
            <div><h1>Buy A Book</h1>
                <div>Search For A Book<input onChange={this.props.bookSearch}></input></div>
                <div>Total in Cart: ${totalPrice}</div>
                <a href="#myTarget">View Cart</a>
            </div>
        )
    }
}

export default Header
