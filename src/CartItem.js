import React from 'react';

class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={style.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>Phone</div>
                    <div style={{color: '#777'}}>Price: 999</div>
                    <div style={{color: '#777'}}>Qty: 1</div>
                </div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                </div>
"
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