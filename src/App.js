import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products : [
            {
                title: 'phone',
                price: 999,
                qty: 1,
                img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id: 1
            },
            
            {
                title: 'laptop',
                price: 1000,
                qty: 1,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id: 2
            },
            {
                title: 'Watch',
                price: 99,
                qty: 10,
                img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id: 3
            }
        ]
    }
}
handleIncreaseQuantity = (product) => {
    // console.log('Hey please inc. the qty of',product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products: products
    });
}
handleDecreaseQuantity = (product) => {
    // console.log('Hey please inc. the qty of',product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) {
        products[index].qty -= 1;
        this.setState({
            products: products
        });    
    }
}
  handleDeleteItem = (id) => {
    const { products } = this.state;
    let newArray = products.filter(items => items.id !== id );
    this.setState({
      products: newArray
    })
  
  }
  
getCountQuantity = () => {
  const { products } = this.state;
  let count = 0;
  products.forEach((items) => {
    count += items.qty;
  })
  return count;
}
  
  getCountTotalPrice = () => {
    const { products } = this.state;
    let TotalPrice = 0;
    products.forEach((items) => {
      TotalPrice += items.qty * items.price;
    });
    return TotalPrice;
  }
  render() {
    return (
      <div className="App">
        <Navbar quantity={this.getCountQuantity()}/>
        <Cart
          products={this.state.products}
          onIncreaseQuantitiy={this.handleIncreaseQuantity}
          onDecreaseQuantitiy={this.handleDecreaseQuantity}
          DeleteItem = {this.handleDeleteItem}
        />
        <Footer TotalPrice={this.getCountTotalPrice()}/>
      </div>
    );
  }
}

export default App;
