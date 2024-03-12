import {useContext} from "react";
import {Context} from "./AppLayout.jsx";
import CartItem from "./CartItem.jsx";
import {Link} from "react-router-dom";


function Cart() {
    const {cartItems} = useContext(Context);

    return (
        <div className="h-screen">
            <Link to="/" className="underline underline-offset-[3px] px-5 text-blue-700">&larr; Home</Link>
            <div className="grid grid-cols-3 gap-4 mt-3">
                {cartItems.map(item => <CartItem item={item} key={item.id}/>)}
            </div>
        </div>
    );
}

export default Cart;