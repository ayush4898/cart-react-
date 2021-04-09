import React from 'react';

class CartItem extends React.Component {
    
    // increaseQty = () => {
    //     // console.log('this', this.state.qty);
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     });
    // }
    // decreaseQty = () => {
    //     // console.log('this', this.state.qty);
    //     if (this.state.qty > 0) {
    //         this.setState((prevState) => {
    //             return {
    //                 qty: prevState.qty - 1
    //             }
    //         });
    //     }
    // }
     render() {
        let product = this.props.product;
        return (
            <div className="cart-item">
                {/* { console.log(this.props) } */}
                <div className="left-block">
                    <img alt="" style={style.image}  src={product.img}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{product.title }</div>
                    <div style={{ color: '#777' }}>{ product.price}</div>
                    <div style={{ color: '#777' }}>Qty: {product.qty}</div>
                    
                    <div className="cart-item-actions">
                         {/* Buttons */}
                        <img alt="increase"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/128/992/992651.png"
                            onClick={() => { this.props.onIncreaseQuantitiy(product) }}
                        />
                        <img alt="decrease"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/128/104/104616.png"
                            onClick = {() => { this.props.onDecreaseQuantitiy(product) }}
                        />
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/128/1214/1214428.png" />
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'lightgrey'
    }

}

export default CartItem;