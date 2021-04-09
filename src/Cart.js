import React from 'react';
import CartItem from './CartItem';

 
class Cart extends React.Component{
    constructor() {
        super();
        this.state = {
            products : [
                {
                    title: 'phone',
                    price: 999,
                    qty: 1,
                    img: '',
                    id: 1
                },
                
                {
                    title: 'laptop',
                    price: 1000,
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    title: 'Watch',
                    price: 99,
                    qty: 100,
                    img: '',
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
    render() {
        return (
            <div className="cart">
                { this.state.products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantitiy={this.handleIncreaseQuantity}
                        onDecreaseQuantitiy = {this.handleDecreaseQuantity}
                        
                    />
                })}
            </div>
        );
    }
}

export default Cart;