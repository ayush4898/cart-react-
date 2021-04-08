import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img : ''
        }
    }
    increaseQty = () => {
        // console.log('this', this.state.qty);
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }
    decreaseQty = () => {
        // console.log('this', this.state.qty);
        if (this.state.qty > 0) {
            this.setState((prevState) => {
                return {
                    qty: prevState.qty - 1
                }
            });
        }
    }
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={style.image}  src={this.state.img}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{this.state.title }</div>
                    <div style={{ color: '#777' }}>{ this.state.price}</div>
                    <div style={{ color: '#777' }}>Qty: { this.state.qty}</div>
                    
                    <div className="cart-item-actions">
                         {/* Buttons */}
                        <img alt="increase"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/128/992/992651.png"
                            onClick = {this.increaseQty}
                        />
                        <img alt="decrease"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/128/104/104616.png"
                            onClick = {this.decreaseQty}
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