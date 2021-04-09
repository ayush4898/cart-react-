import CartItem from './CartItem';

 
function Cart(props){
   
        return (
            <div className="cart">
               { console.log(props)}
                { props.products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantitiy={props.onIncreaseQuantitiy}
                        onDecreaseQuantitiy={props.onDecreaseQuantitiy}
                        DeleteItem = {props.DeleteItem}
                    />
                })}
            </div>
        );
    
}

export default Cart;