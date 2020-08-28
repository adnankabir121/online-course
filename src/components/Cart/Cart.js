import React from 'react';

const Cart = (props) => {
    const totalPrice = props.cart.reduce((total,crc)=>total+crc.price,0);
    return (
        <div>
            <h6>Course Added : {props.cart.length}</h6>
            <h6>Total Price : {totalPrice} Taka</h6>
        </div>
    );
};

export default Cart;