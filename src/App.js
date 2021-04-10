import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import Footer from './Footer';
import firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading :true 
    }
  }
  

  componentDidMount()
  {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     // console.log(snapshot);
    //     const products = snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //       let docData = doc.data();
    //       docData['id'] = doc.id;
    //       return docData;
    //     });
    //     this.setState({
    //       products,
    //       loading : false
    //     })
    //   });
    firebase
      .firestore()
      .collection('products')
      .orderBy('price')
      // .orderBy('price', 'desc')
      // .where('price','>=',999)
      // onsnapshot adds an event listener to firebase query 
      // when ever an change in base occurs it automatic calls itself
      .onSnapshot((snapshot) => {
        // console.log(snapshot);
        const products = snapshot.docs.map((doc) => {
          console.log(doc.data());
          let docData = doc.data();
          docData['id'] = doc.id;
          return docData;
        });
        this.setState({
          products,
          loading : false
        })
      });
    
  }

handleIncreaseQuantity = (product) => {
    console.log('Hey please inc. the qty of',product);
    // const { products } = this.state;
    // const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //     products: products
    // });
  // increasing data in firebase
  const docRef = firebase.firestore().collection('products').doc(product.id);
  docRef.update({
    qty: product.qty + 1
  })
    .then((updatedProduct) => {
      console.log('product updated successfully ', updatedProduct);
    })
    .catch((err) => {
      console.log('error in updating prod. ', err);
    });
}
handleDecreaseQuantity = (product) => {
    // console.log('Hey please inc. the qty of',product);
    // const { products } = this.state;
    // const index = products.indexOf(product);
    // if (products[index].qty > 0) {
    //     products[index].qty -= 1;
    //     this.setState({
    //       products: products
         
    //     });    
    // }
  // Decreasing data in firebase
  if (product.qty > 0) {

      const docRef = firebase.firestore().collection('products').doc(product.id);
      docRef.update({
        qty: product.qty - 1
      })
        .then(() => {
          console.log('product updated successfully ');
        })
        .catch((err) => {
          console.log('error in updating prod. ', err);
        });
        
  }
}
handleDeleteItem = (product) => {
    // const { products } = this.state;
    // let newArray = products.filter(items => items.id !== id );
    // this.setState({
    //   products: newArray
    // })
    const docRef = firebase.firestore().collection('products').doc(product.id);
    docRef.delete()
    .then((deletedProduct) => {
      console.log('product deleted successfully ', deletedProduct);
    })
    .catch((err) => {
      console.log('error in updating prod. ', err);
    });
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

  addProduct = () => {
    firebase.firestore().collection('products')
      .add({
        title: 'Television',
        price: 20999,
        qty: 1,
        img: 'https://images.hindustantimes.com/tech/img/2020/10/15/960x540/image_(23)_1602756606080_1602756611186.jpg'
      })
      .then((productRef) => {
        console.log('new product added successfully : ', productRef);
      })
      .catch((err) => {
        console.log('error in adding new product : ', err);
      });
} 

  render() {
    return (
      <div className="App">
        <button onClick={this.addProduct}>Add product</button>
        <Navbar quantity={this.getCountQuantity()} />
        {this.state.loading && <h1>Loading Products...</h1>}
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
