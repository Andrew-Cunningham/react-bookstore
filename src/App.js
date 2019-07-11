import React from 'react';

import './App.css';
import Header from './components/Header.js'
import Book from './components/Book.js'
import CartContainer from './components/CartContainer'



class App extends React.Component {

  state = {
    books: [],
    authorSort: false,//buttons change bool
    titleSort: false,// have buttons change the bool
    searchedBooks: []
  }

  authorStore = [];


  titleStore = []//do the same thing as authorstore to this

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({ books: json })
  }

  addToCart = id => {
    console.log(id)
    this.setState(prevState => {
      return {
        ...prevState,
        books: prevState.books.map(book => book.id === id ? { ...book, inCart: true } : book)
      }
    })

  }

  sortBooks = e => {

    if (e.target.value === 'author') {
      this.setState(() => {
        return {
          authorSort: true,
          titleSort: false
        }
      })
    }
    else if (e.target.value === 'title') {
      this.setState(() => {
        return {
          titleSort: true,
          authorSort: false
        }
      })
    }
    console.log(this.state)
  }

  bookSearch = e => {
    let value = e.target.value.toLowerCase()
    this.setState(prevState => {
      return {
        ...prevState.books,
        searchedBooks: prevState.books.filter(book => book.title.toLowerCase().includes(value) ? book : null)
      }
    }
    )
  }



  render() {
    const cartItems = this.state.books.filter(book => book.inCart === true)

    let totalPrice = 0
    cartItems.forEach(function (element, index) {
      totalPrice += parseInt(cartItems[index].price)
    });

  
    if (this.state.authorSort === true) {
      this.state.books.sort(function (a, b) {
        let authorA = a.author.toLowerCase(), authorB = b.author.toLowerCase()
        if (authorA < authorB)
          return -1
        if (authorA > authorB)
          return 1
        return 0
      })
    }

    if (this.state.titleSort === true) {
      this.state.books.sort(function (a, b) {
        let authorA = a.title.toLowerCase(), authorB = b.title.toLowerCase()
        if (authorA < authorB)
          return -1
        if (authorA > authorB)
          return 1
        return 0
      })
    }

    return <div>
      <Header bookSearch={this.bookSearch} totalPrice={totalPrice}></Header>
      <div>
        <h1>Books</h1>
        <button onClick={this.sortBooks} value='author'> Sort by Author</button>
        <button onClick={this.sortBooks} value='title'> Sort by Title</button>
        {this.state.searchedBooks.length == 0 ?
          this.state.books.map(book => {
            return (
              <Book
                key={book.id}
              
                addToCart={this.addToCart}
                {...book} 
              />
            )
          }) : this.state.searchedBooks.map(book => {
            return (
              <Book
                key={book.id}
              
                addToCart={this.addToCart}
                {...book} 
              />
            )
          })}
        <CartContainer items={cartItems} />
        <div>Total Price: ${totalPrice}</div>
      </div>
    </div>
  }

}
export default App;
