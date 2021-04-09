
function Navbar(props) {
   
    return (
        <div className='navbar'>
            {console.log('nav bar props',props)}
            <div className="cart-icon">
                <img src="https://image.flaticon.com/icons/png/128/833/833314.png" alt="cart-icon" />
                <span className="cart-items-count">{props.quantity}</span>
            </div>
        </div>
    )
}
 
export default Navbar;