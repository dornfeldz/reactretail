import {useContext, useState} from "react";
import {Context} from "./AppLayout.jsx";
import CartItem from "./CartItem.jsx";
import {Link} from "react-router-dom";


function Cart() {

    const {count} = useContext(Context);
    const {cartItems, setCartItems} = useContext(Context);

    return (
        <div>

            <Link to="/" className="border px-5">Home</Link>
            {cartItems.map(item => <CartItem item={item} key={item.id}/>  )}
        </div>
    );
}

export default Cart;