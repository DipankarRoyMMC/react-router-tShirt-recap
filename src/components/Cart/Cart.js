import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let commend;
    if (cart.length == 0) {
        commend = <p>At least one item added</p>
    } else if (cart.length === 1) {
        commend = <p>add more adding</p>
    } else {
        commend = <p>Thank's for adding</p>
    }


    return (
        <div>
            <h1>Selected Items: {cart.length}</h1>
            {commend}
            {
                cart.map(cart => <p key={cart.id}> {cart.name}
                    <button onClick={() => handleRemoveFromCart(cart)} > X</button></p>)
            }
            {cart.length === 4 && <button>Order now</button>}


        </div>
    );
};

export default Cart;